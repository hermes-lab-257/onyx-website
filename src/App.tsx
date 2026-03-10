import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Play, Sparkles, Palette, Globe, Video, ArrowRight, ChevronDown, Star, Zap, Target, Users } from 'lucide-react';
import BlurText from './components/BlurText';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_115329_5e00c9c5-4d69-49b7-94c3-9c31c60bb644.mp4';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  {
    icon: Sparkles,
    title: 'Branding & Storytelling',
    description: 'We craft distinct visual and verbal identities that resonate with your audience. Your brand becomes a living story that speaks even when you\'re not there.',
    features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Tone of Voice'],
  },
  {
    icon: Globe,
    title: 'Digital Presence',
    description: 'websites and apps that captivate and convert. We blend cutting-edge technology with intuitive design to deliver exceptional user experiences.',
    features: ['Website Design', 'App Development', 'E-commerce', 'UI/UX Design'],
  },
  {
    icon: Palette,
    title: 'Social Media',
    description: 'Elevate your brand visibility and foster meaningful connections. Our strategies amplify your online impact across every platform.',
    features: ['Strategy', 'Content Planning', 'Community Management', 'Analytics'],
  },
  {
    icon: Video,
    title: 'Content Creation',
    description: 'From video production to photography and graphic design — we bring your brand story to life through compelling, immersive content.',
    features: ['Video Production', 'Photography', 'Graphic Design', 'Motion Graphics'],
  },
];

const partners = ['Mul Gogi', 'Lee\'s Bamboo', 'INTfinity', 'Nexus Labs', 'Vertex Co'];

const workItems = [
  { category: 'F&B', title: 'Restaurant Brand Identity', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' },
  { category: 'Retail', title: 'E-commerce Redesign', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80' },
  { category: 'Services', title: 'Corporate Website', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { category: 'Tech', title: 'SaaS Platform UI', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
  { category: 'Beauty', title: 'Beauty Brand Launch', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80' },
  { category: 'Fitness', title: 'Fitness App Design', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80' },
];

const process = [
  {
    step: '01',
    icon: Target,
    title: 'Discover',
    description: 'We dive deep into your business, audience, and goals. Research, analysis, and strategy lay the foundation.',
  },
  {
    step: '02',
    icon: Zap,
    title: 'Define',
    description: 'We crystallize your vision into a clear strategy. Brand positioning, visual direction, and roadmap take shape.',
  },
  {
    step: '03',
    icon: Palette,
    title: 'Design',
    description: 'Iterative design brings your brand to life. From concepts to polished deliverables, we craft with precision.',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Deploy',
    description: 'We launch with impact. From development to go-to-market, we ensure everything lands smoothly.',
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '12', label: 'Awards Won' },
];

const testimonials = [
  {
    quote: 'Onyx transformed our brand completely. Our revenue increased 3x within 6 months of the redesign.',
    author: 'Sarah Chen',
    role: 'CEO, Nexus Labs',
  },
  {
    quote: 'The team understood our vision immediately. They delivered beyond our expectations.',
    author: 'Michael Tan',
    role: 'Founder, Mul Gogi',
  },
];

function Rocket(props: React.ComponentProps<typeof Zap>) {
  return <Zap {...props} />;
}

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

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
        <nav className="fixed top-4 left-0 right-0 z-50 px-6 lg:px-12">
          <div className="liquid-glass rounded-full mx-auto max-w-7xl flex items-center justify-between px-5 py-2.5">
            <a href="#home" className="flex-shrink-0">
              <span className="text-2xl font-heading italic text-white tracking-wide">ONYX</span>
            </a>

            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-white/70 hover:text-white font-body transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-white text-black rounded-full px-4 py-1.5 text-sm font-medium font-body flex items-center gap-1 hover:bg-gray-100 transition-colors ml-3"
              >
                Get Started
                <ArrowUpRight className="h-3.5 w-3.5" />
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
            className="liquid-glass rounded-full px-1.5 py-1 flex items-center gap-3 mb-10"
          >
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
              Singapore
            </span>
            <span className="text-sm text-white/70 pr-2 font-body">Full-Suite Digital Agency</span>
          </motion.div>

          <BlurText
            text="We Build Brands That Dominate"
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.9] max-w-5xl justify-center tracking-[-2px]"
            delay={100}
            animateBy="words"
            direction="bottom"
          />

          <motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-xl md:text-2xl text-white/60 max-w-2xl font-body font-light leading-relaxed"
          >
            Strategy + Branding + Design + Technology. 
            <span className="text-white"> We engineer transformation</span> for businesses ready to own their digital space.
          </motion.p>

          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex items-center gap-5 mt-12"
          >
            <a href="#contact" className="liquid-glass-strong rounded-full px-7 py-3.5 text-base font-medium text-white font-body flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#work" className="text-white/70 hover:text-white font-body text-base flex items-center gap-2 transition-colors">
              View Our Work
              <Play className="h-4 w-4 fill-current" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex gap-12 md:gap-20 mt-20"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-heading italic text-white">{stat.value}</p>
                <p className="text-xs text-white/50 uppercase tracking-widest font-body mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <a href="#services" className="text-white/30 hover:text-white/60 transition-colors">
              <ChevronDown className="h-8 w-8 animate-bounce" />
            </a>
          </motion.div>
        </section>

        {/* Partners Bar */}
        <section className="py-12 border-y border-white/5 bg-black/30">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-center text-xs text-white/40 uppercase tracking-[0.2em] font-body mb-8">Trusted By Leading Brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="text-xl md:text-2xl font-heading italic text-white/40 hover:text-white/70 transition-colors cursor-default"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">What We Do</p>
              <h2 className="text-5xl md:text-6xl font-heading italic text-white">Services That Scale</h2>
              <p className="text-lg text-white/50 font-body mt-6 max-w-xl mx-auto">
                From brand strategy to execution — we deliver end-to-end solutions that drive real business results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="liquid-glass rounded-3xl p-8 hover:bg-white/5 transition-all group hover:scale-[1.01]"
                >
                  <div className="flex items-start gap-4">
                    <div className="liquid-glass rounded-2xl p-3 group-hover:scale-110 transition-transform">
                      <service.icon className="h-7 w-7 text-white/80" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading italic text-white mb-3">{service.title}</h3>
                      <p className="text-white/60 font-body font-light leading-relaxed mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span key={feature} className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded-full font-body">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-16"
            >
              <div>
                <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">Our Work</p>
                <h2 className="text-5xl md:text-6xl font-heading italic text-white">Recent Projects</h2>
              </div>
              <a href="#" className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors font-body mt-6 md:mt-0">
                View All Projects <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workItems.map((work, index) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                    <p className="text-xs text-white/60 uppercase tracking-wider font-body mb-1">{work.category}</p>
                    <h3 className="text-xl font-heading text-white">{work.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="#" className="md:hidden flex items-center justify-center gap-2 text-white/60 hover:text-white transition-colors font-body mt-8">
              View All Projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-32 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">How We Work</p>
              <h2 className="text-5xl md:text-6xl font-heading italic text-white">The ONYX Process</h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent -translate-x-4" />
                  )}
                  <div className="liquid-glass rounded-3xl p-6 text-center">
                    <p className="text-5xl font-heading italic text-white/20 mb-4">{step.step}</p>
                    <div className="liquid-glass rounded-full p-3 w-fit mx-auto mb-4">
                      <step.icon className="h-6 w-6 text-white/70" />
                    </div>
                    <h3 className="text-xl font-heading italic text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-white/50 font-body font-light leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">Testimonials</p>
              <h2 className="text-5xl md:text-6xl font-heading italic text-white">What Clients Say</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="liquid-glass rounded-3xl p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-white/80 font-body font-light italic leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-body font-medium">{testimonial.author}</p>
                    <p className="text-sm text-white/50 font-body">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 bg-gradient-to-b from-transparent via-white/5 to-transparent">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">Let's Build Something Amazing</p>
              <h2 className="text-5xl md:text-6xl font-heading italic text-white mb-6">Ready to Transform?</h2>
              <p className="text-lg text-white/60 font-body font-light mb-10">
                Every great brand starts with a conversation. Tell us about your project and let's create something extraordinary together.
              </p>
              <a
                href="#contact"
                className="liquid-glass-strong rounded-full px-8 py-4 text-lg font-medium text-white font-body inline-flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105"
              >
                Get In Touch
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">Get In Touch</p>
              <h2 className="text-5xl md:text-6xl font-heading italic text-white mb-6">Let's Talk</h2>
              <p className="text-lg text-white/60 font-body font-light mb-10">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:hello@onyxdigital.sg"
                className="liquid-glass-strong rounded-full px-8 py-4 text-lg font-medium text-white font-body inline-flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 mb-6"
              >
                hello@onyxdigital.sg
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 border-t border-white/10 bg-black/40">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="text-3xl font-heading italic text-white">ONYX</span>
              <p className="text-white/40 font-body text-sm mt-2">Singapore • Hong Kong • Tokyo</p>
            </div>
            <p className="text-white/30 font-body text-sm">© 2026 Onyx Digital SG. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-white/40 hover:text-white transition-colors font-body text-sm">Instagram</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors font-body text-sm">LinkedIn</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors font-body text-sm">Facebook</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors font-body text-sm">Twitter</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
