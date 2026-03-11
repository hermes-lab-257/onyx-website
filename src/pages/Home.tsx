import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Globe, Palette, Video, Play } from 'lucide-react';
import { PerspectiveCarousel } from '../components/PerspectiveCarousel';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4';

const services = [
  {
    icon: Sparkles,
    title: 'Branding & Storytelling',
    description: 'We craft distinct visual and verbal identities that resonate with your audience.',
    href: '/services/branding',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Digital Presence',
    description: 'websites and apps that captivate and convert.',
    href: '/services/digital',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Social Media',
    description: 'Elevate your brand visibility and foster meaningful connections.',
    href: '/services/social',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Video,
    title: 'Content Creation',
    description: 'From video production to photography and graphic design.',
    href: '/services/content',
    color: 'from-amber-500 to-orange-500',
  },
];

const partners = ['Mul Gogi', "Lee's Bamboo", 'INTfinity', 'Nexus Labs', 'Vertex Co'];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '12', label: 'Awards Won' },
];

const workItems = [
  {
    category: 'F&B',
    title: 'Mul Gogi Korean BBQ',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
  },
  {
    category: 'Retail',
    title: "Lee's Bamboo Blinds",
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80',
  },
  {
    category: 'Services',
    title: 'INTfinity Consulting',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - New Design */}
      <section className="relative min-h-screen flex items-center justify-center">
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
        </div>

        {/* Transparent Navbar - floating, no background */}
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
        <div className="relative z-10 pt-32 pb-64 px-4 w-full">
          <div className="max-w-5xl mx-auto">
            {/* Featured Badge */}
            <FadeIn>
              <div className="flex justify-center mb-12">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm" />
                  <div className="relative rounded-full bg-white/90 backdrop-blur-md px-8 py-3">
                    <span className="text-sm font-medium text-black font-[Barlow]">Featured in Fortune</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Main Content Box with Corner Accents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-transparent p-12 pb-64"
            >
              {/* Corner accents */}
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
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Bar */}
      <section className="py-12 border-y border-white/5 bg-black/30">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-xs text-white/40 uppercase tracking-[0.2em] font-body mb-8">Trusted By Leading Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <motion.span
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-serif italic text-white/40 hover:text-white/70 transition-colors cursor-default"
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">What We Do</p>
              <h2 className="text-5xl md:text-6xl font-serif italic text-white">Services That Scale</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <Link to={service.href}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="liquid-glass rounded-3xl p-8 group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`liquid-glass rounded-2xl p-4 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-serif italic text-white">{service.title}</h3>
                          <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all" />
                        </div>
                        <p className="text-white/60 font-body font-light mt-2">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-white/60 hover:text-white font-body flex items-center gap-2 mx-auto transition-colors"
                >
                  View All Services <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Work Preview */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-2">Our Work</p>
              <h2 className="text-5xl md:text-6xl font-serif italic text-white">Recent Projects</h2>
              <p className="text-white/60 font-body font-light mt-4 max-w-2xl mx-auto">
                A showcase of our work across branding, digital, and content.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <PerspectiveCarousel
              images={workItems.map(item => ({ src: item.image, alt: item.title }))}
              showNavigation
              autoplay
              className="pb-10"
            />
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link to="/work">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-white/60 hover:text-white font-body flex items-center gap-2 mx-auto transition-colors"
                >
                  View All Projects <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent via-white/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">Let's Build Something Amazing</p>
            <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-6">Ready to Transform?</h2>
            <p className="text-lg text-white/60 font-body font-light mb-10">
              Every great brand starts with a conversation. Tell us about your project.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="liquid-glass-strong rounded-full px-8 py-4 text-lg font-medium text-white font-body inline-flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                Get In Touch
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
