import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4';

export default function AltHome() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Full-screen video background */}
      <div className="fixed inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        {/* No overlay */}
      </div>

      {/* Transparent Navbar - floating, no background, white text */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white font-[Barlow] tracking-wide">
            ONYX
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded transition-colors text-sm font-medium font-[Barlow]">
              Home
            </Link>
            <Link to="/services" className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded transition-colors text-sm font-medium font-[Barlow]">
              Services
            </Link>
            <Link to="/work" className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded transition-colors text-sm font-medium font-[Barlow]">
              Work
            </Link>
            <Link to="/contact" className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded transition-colors text-sm font-medium font-[Barlow]">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 pt-32 pb-64 px-4 flex items-center min-h-screen">
        <div className="max-w-5xl mx-auto w-full">
          {/* Featured Badge - centered at top */}
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Outer ring: white/10 + backdrop-blur-sm */}
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm" />
              {/* Inner pill: white/90 + backdrop-blur-md */}
              <div className="relative rounded-full bg-white/90 backdrop-blur-md px-8 py-3">
                <span className="text-sm font-medium text-black font-[Barlow]">Featured in Fortune</span>
              </div>
            </motion.div>
          </div>

          {/* Main content block with corner accents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-transparent p-12 pb-64"
          >
            {/* Corner accents - 7x7px white squares */}
            <div className="absolute top-0 left-0 w-[7px] h-[7px] bg-white" />
            <div className="absolute top-0 right-0 w-[7px] h-[7px] bg-white" />
            <div className="absolute bottom-0 left-0 w-[7px] h-[7px] bg-white" />
            <div className="absolute bottom-0 right-0 w-[7px] h-[7px] bg-white" />

            {/* Headline */}
            <div className="space-y-2">
              <p className="text-[64px] md:text-[64px] leading-none text-white font-light font-[Barlow]">
                Agency that makes your
              </p>
              <p className="text-[64px] md:text-[64px] leading-none text-white italic font-[Instrument_Serif]">
                videos & reels viral
              </p>
            </div>

            {/* Sub-headline */}
            <div className="mt-8 max-w-2xl">
              <p className="text-white/75 text-lg font-[Barlow] leading-relaxed">
                We craft cinematic brand content that captivates audiences and drives measurable growth. 
                From concept to distribution, we're your full-service video production partner.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#f8f8f8] text-[#171717] font-medium font-[Barlow] rounded-[2px] hover:bg-white transition-colors"
              >
                Start Your Project
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Link to compare back to original */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          to="/"
          className="liquid-glass rounded-full px-4 py-2 text-sm text-white font-[Barlow] hover:bg-white/10 transition-colors"
        >
          ← Compare Original
        </Link>
      </div>
    </div>
  );
}
