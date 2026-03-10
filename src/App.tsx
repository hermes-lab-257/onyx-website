import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Sparkles, Palette, Globe, Video, ArrowRight } from 'lucide-react';
import BlurText from './components/BlurText';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_115329_5e00c9c5-4d69-49b7-94c3-9c31c60bb644.mp4';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  {
    icon: Sparkles,
    title: 'Branding & Storytelling',
    description: 'We craft distinct visual and verbal identities that resonate with your audience. Your brand becomes a living story that speaks even when you\'re not there.',
  },
  {
    icon: Globe,
    title: 'Digital Presence',
    description: 'websites and apps that captivate and convert. We blend cutting-edge technology with intuitive design to deliver exceptional user experiences.',
  },
  {
    icon: Palette,
    title: 'Social Media',
    description: 'Elevate your brand visibility and foster meaningful connections. Our strategies amplify your online impact across every platform.',
  },
  {
    icon: Video,
    title: 'Content Creation',
    description: 'From video production to photography and graphic design — we bring your brand story to life through compelling, immersive content.',
  },
];

const partners = ['Mul Gogi', 'Lee\'s Bamboo', 'INTfinity'];

const workItems = [
  { category: 'F&B', title: 'Restaurant Brand Identity' },
  { category: 'Retail', title: 'E-commerce Redesign' },
  { category: 'Services', title: 'Corporate Website' },
];

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero_bg.jpeg"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16">
          <div className="liquid-glass rounded-full mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
            <a href="#home" className="flex-shrink-0">
              <span className="text-2xl font-heading italic text-white">ONYX</span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-body transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-1 hover:bg-gray-100 transition-colors ml-2"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8"
          >
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
              Singapore
            </span>
            <span className="text-sm text-white/80 pr-3 font-body">
              Full-Suite Digital Agency
            </span>
          </motion.div>

          <BlurText
            text="We Build Brands That Dominate"
            className="text-5xl md:text-7xl lg:text-[5rem] font-heading italic text-white leading-[0.9] max-w-4xl justify-center tracking-[-2px]"
            delay={100}
            animateBy="words"
            direction="bottom"
          />

          <motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl font-body font-light leading-relaxed"
          >
            Strategy + Branding + Design + Technology. We engineer transformation for businesses ready to own their digital space.
          </motion.p>

          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex items-center gap-6 mt-10"
          >
            <a href="#contact" className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body flex items-center gap-2 hover:bg-white/10 transition-colors">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#work" className="text-white font-body text-sm flex items-center gap-2 hover:text-white/80 transition-colors">
              View Our Work
              <Play className="h-4 w-4 fill-current" />
            </a>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col items-center gap-4 mt-20"
          >
            <p className="text-xs text-white/50 uppercase tracking-widest font-body">Trusted By</p>
            <div className="flex gap-8 md:gap-12">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="text-xl md:text-2xl font-heading italic text-white/60 tracking-tight"
                >
                  {partner}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-heading italic text-white">Services That Scale</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="liquid-glass rounded-2xl p-8 hover:bg-white/5 transition-colors group"
                >
                  <service.icon className="h-8 w-8 text-white/70 mb-4 group-hover:text-white transition-colors" />
                  <h3 className="text-2xl font-heading italic text-white mb-3">{service.title}</h3>
                  <p className="text-white/60 font-body font-light leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">Our Work</p>
              <h2 className="text-4xl md:text-5xl font-heading italic text-white">Recent Projects</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {workItems.map((work, index) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="liquid-glass rounded-2xl p-6 cursor-pointer hover:scale-[1.02] transition-transform"
                >
                  <p className="text-xs text-white/50 uppercase tracking-wider font-body mb-2">{work.category}</p>
                  <h3 className="text-xl font-heading text-white">{work.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">About Us</p>
              <h2 className="text-4xl md:text-5xl font-heading italic text-white mb-8">Engineers of Transformation</h2>
              <p className="text-lg text-white/70 font-body font-light leading-relaxed mb-8">
                We're a cross-disciplinary team combining strategy, branding, UX design, and technology for swift, impactful results. We believe every business is unique — that's why we take a personalized approach to each project.
              </p>
              <p className="text-lg text-white/70 font-body font-light leading-relaxed">
                We start by understanding your business, your audience, and your goals. Then we build a customized strategy that delivers results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-heading italic text-white mb-6">Ready to Transform?</h2>
              <p className="text-lg text-white/70 font-body font-light mb-10">
                Let's discuss your project. Send us a message and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:hello@onyxdigital.sg"
                className="liquid-glass-strong rounded-full px-8 py-4 text-lg font-medium text-white font-body inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                hello@onyxdigital.sg
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-2xl font-heading italic text-white">ONYX</span>
            <p className="text-white/50 font-body text-sm">© 2026 Onyx Digital SG. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-white transition-colors font-body text-sm">Instagram</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors font-body text-sm">LinkedIn</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors font-body text-sm">Facebook</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
