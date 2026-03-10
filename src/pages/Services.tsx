import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Globe, Palette, Video, ArrowRight, Check } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    slug: 'branding',
    icon: Sparkles,
    title: 'Branding & Storytelling',
    tagline: 'Your brand is your story. Let us help you tell it brilliantly.',
    description: 'We craft distinct visual and verbal identities that resonate with your audience. Your brand becomes a living story that speaks even when you\'re not there.',
    features: [
      'Brand Strategy & Positioning',
      'Visual Identity Design',
      'Brand Guidelines',
      'Tone of Voice',
      'Logo Design',
      'Brand Architecture',
    ],
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-500/10',
  },
  {
    slug: 'digital',
    icon: Globe,
    title: 'Digital Presence',
    tagline: 'websites and apps that captivate and convert.',
    description: 'We blend cutting-edge technology with intuitive design to deliver exceptional user experiences. From simple landing pages to complex web applications.',
    features: [
      'Website Design & Development',
      'E-commerce Solutions',
      'UI/UX Design',
      'App Development',
      'Web Applications',
      'CMS Integration',
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    slug: 'social',
    icon: Palette,
    title: 'Social Media',
    tagline: 'Elevate your brand visibility and foster meaningful connections.',
    description: 'Our comprehensive social media strategies amplify your online impact. We build communities, not just follower counts.',
    features: [
      'Social Media Strategy',
      'Content Planning',
      'Community Management',
      'Influencer Marketing',
      'Analytics & Reporting',
      'Paid Social Campaigns',
    ],
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    slug: 'content',
    icon: Video,
    title: 'Content Creation',
    tagline: 'Compelling content that tells your brand\'s story.',
    description: 'From video production to photography and graphic design — we bring your brand story to life through immersive, compelling content.',
    features: [
      'Video Production',
      'Photography',
      'Graphic Design',
      'Motion Graphics',
      'Copywriting',
      'Content Strategy',
    ],
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
  },
];

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">What We Do</p>
            <h1 className="text-6xl md:text-7xl font-heading italic text-white mb-6">
              Services That Scale
            </h1>
            <p className="text-xl text-white/60 font-body font-light max-w-2xl mx-auto">
              From brand strategy to execution — we deliver end-to-end solutions that drive real business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/services/${service.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="liquid-glass rounded-3xl p-8 h-full group cursor-pointer"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-heading italic text-white mb-2">
                      {service.title}
                    </h2>
                    <p className="text-white/40 font-body italic mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-white/70 font-body font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.slice(0, 4).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs text-white/50 bg-white/5 px-3 py-1 rounded-full font-body"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                      <span className="font-body">Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                </Link>
              </motion.div>
</div>
                              ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-4 bg-black/20 mt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">Why ONYX</p>
            <h2 className="text-5xl font-heading italic text-white">The ONYX Difference</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Thinking',
                description: 'Every design decision backed by strategy and data.',
              },
              {
                title: 'Premium Quality',
                description: 'We don\'t settle. Excellence in every pixel.',
              },
              {
                title: 'Results-Driven',
                description: 'Beauty meets business. We build for impact.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="liquid-glass rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-white/70" />
                </div>
                <h3 className="text-xl font-heading italic text-white mb-2">{item.title}</h3>
                <p className="text-white/50 font-body font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
