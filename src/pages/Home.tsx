import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowUpRight, Play, ChevronDown, Sparkles, Globe, Palette, Video, ArrowRight } from 'lucide-react';
import BlurText from '../components/BlurText';
import { PerspectiveCarousel } from '../components/PerspectiveCarousel';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_115329_5e00c9c5-4d69-49b7-94c3-9c31c60bb644.mp4';

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

const partners = ['Mul Gogi', 'Lee\'s Bamboo', 'INTfinity', 'Nexus Labs', 'Vertex Co'];

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="fixed inset-0 z-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]"
        >
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
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 pt-24">
          <FadeIn>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="liquid-glass rounded-full px-1.5 py-1 inline-flex items-center gap-3 mb-10"
            >
              <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
                Singapore
              </span>
              <span className="text-sm text-white/70 pr-2 font-body">Full-Suite Digital Agency</span>
            </motion.div>
          </FadeIn>

          <BlurText
            text="We Build Brands That Dominate"
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.9] max-w-5xl justify-center tracking-[-2px]"
            delay={100}
            animateBy="words"
            direction="bottom"
          />

          <FadeIn delay={0.4}>
            <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-2xl font-body font-light leading-relaxed mx-auto">
              Strategy + Branding + Design + Technology.{' '}
              <span className="text-white">We engineer transformation</span> for businesses ready to own their digital space.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex items-center gap-5 mt-12 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="liquid-glass-strong rounded-full px-7 py-3.5 text-base font-medium text-white font-body flex items-center gap-2 hover:bg-white/10 transition-all"
                >
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link to="/work">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/70 hover:text-white font-body text-base flex items-center gap-2 transition-colors"
                >
                  View Our Work
                  <Play className="h-4 w-4 fill-current" />
                </motion.button>
              </Link>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.8}>
            <div className="flex gap-12 md:gap-20 mt-20 justify-center">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-heading italic text-white">{stat.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-widest font-body mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <Link to="/services" className="text-white/30 hover:text-white/60 transition-colors">
              <ChevronDown className="h-8 w-8 animate-bounce" />
            </Link>
          </motion.div>
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
                className="text-xl md:text-2xl font-heading italic text-white/40 hover:text-white/70 transition-colors cursor-default"
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
              <h2 className="text-5xl md:text-6xl font-heading italic text-white">Services That Scale</h2>
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
                          <h3 className="text-2xl font-heading italic text-white">{service.title}</h3>
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

      {/* Work Preview — Perspective Carousel */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-2">Our Work</p>
              <h2 className="text-5xl md:text-6xl font-heading italic text-white">Recent Projects</h2>
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
            <h2 className="text-5xl md:text-6xl font-heading italic text-white mb-6">Ready to Transform?</h2>
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
                <ArrowUpRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
