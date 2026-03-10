import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import BlurText from './components/BlurText';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_115329_5e00c9c5-4d69-49b7-94c3-9c31c60bb644.mp4';

const navLinks = ['Home', 'Voyages', 'Worlds', 'Innovation', 'Plan Launch'];

const partners = ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'];

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1a365d] to-[#0d1b2a]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero_bg.jpeg"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/5 z-0" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16">
          <div className="liquid-glass rounded-full mx-auto max-w-5xl flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/images/logo.svg" alt="Onyx" className="h-12 w-12" />
            </div>

            {/* Center Nav Links - Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                index === navLinks.length - 1 ? (
                  <button
                    key={link}
                    className="bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body flex items-center gap-1 hover:bg-gray-100 transition-colors"
                  >
                    {link}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                ) : (
                  <a
                    key={link}
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                )
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-24">
          {/* Badge */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8"
          >
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
              New
            </span>
            <span className="text-sm text-foreground/90 pr-3 font-body">
              Maiden Crewed Voyage to Mars Arrives 2026
            </span>
          </motion.div>

          {/* Heading */}
          <BlurText
            text="Venture Past Our Sky Across the Universe"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] max-w-2xl justify-center tracking-[-4px]"
            delay={100}
            animateBy="words"
            direction="bottom"
          />

          {/* Subheading */}
          <motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
          >
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex items-center gap-6 mt-8"
          >
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-foreground font-body flex items-center gap-2 hover:bg-white/10 transition-colors">
              Start Your Voyage
              <ArrowUpRight className="h-5 w-5" />
            </button>
            <button className="text-foreground font-body text-sm flex items-center gap-2 hover:text-white/80 transition-colors">
              View Liftoff
              <Play className="h-4 w-4 fill-current" />
            </button>
          </motion.div>
        </div>

        {/* Partners Bar */}
        <div className="flex flex-col items-center gap-4 pb-8">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Collaborating with top aerospace pioneers globally
          </div>
          <div className="flex gap-12 md:gap-16">
            {partners.map((partner, index) => (
              <motion.span
                key={partner}
                initial={{ filter: 'blur(10px)', opacity: 0 }}
                animate={{ filter: 'blur(0px)', opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                className="text-2xl md:text-3xl font-heading italic text-white tracking-tight"
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
