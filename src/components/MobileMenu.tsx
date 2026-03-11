"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  description?: string;
}

const navigationItems: NavItem[] = [
  { name: "Home", href: "/", description: "Homepage" },
  { name: "Services", href: "/services", description: "What we do" },
  { name: "Work", href: "/work", description: "Our projects" },
  { name: "Contact", href: "/contact", description: "Get in touch" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-black/90 border-l border-white/10"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-heading italic text-xl text-white">Menu</span>
              <button
                onClick={onClose}
                className="p-2 text-white/60 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="px-6 pb-12">
              <ul className="flex flex-col gap-4">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="block group"
                    >
                      <TextRoll
                        className="text-3xl md:text-4xl font-bold uppercase leading-[0.9] text-white/80 group-hover:text-white transition-colors"
                      >
                        {item.name}
                      </TextRoll>
                      {item.description && (
                        <p className="text-sm text-white/40 mt-1 font-body">
                          {item.description}
                        </p>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="absolute bottom-8 left-6 right-6">
              <a
                href="/contact"
                onClick={onClose}
                className="liquid-glass-strong rounded-full px-8 py-4 text-base font-medium text-white font-body inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const STAGGER = 0.035;

interface TextRollProps {
  children: string;
  className?: string;
}

export const TextRoll: React.FC<TextRollProps> = ({ children, className }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn("relative block overflow-hidden", className)}
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.span>
  );
};
