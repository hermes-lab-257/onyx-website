import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Sparkles, Globe, Palette, Video, Zap } from 'lucide-react';

const servicesData: Record<string, {
  icon: typeof Sparkles;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  color: string;
  relatedImage: string;
}> = {
  branding: {
    icon: Sparkles,
    title: 'Branding & Storytelling',
    tagline: 'Your brand is your story. Let us tell it brilliantly.',
    description: 'We craft distinct visual and verbal identities that resonate with your audience.',
    longDescription: 'Your brand is more than a logo — it\'s the entire experience your customers have with your business. We help you define who you are, what you stand for, and how you want to be perceived. From naming and brand strategy to visual identity and brand guidelines, we build brands that leave lasting impressions.',
    features: ['Brand Strategy', 'Visual Identity', 'Logo Design', 'Brand Guidelines', 'Tone of Voice', 'Brand Architecture', 'Naming', 'Brand Messaging'],
    benefits: ['Stand out from competitors', 'Build customer trust', 'Create emotional connections', 'Consistent brand experience', 'Higher brand recall'],
    process: [
      { step: '01', title: 'Discovery', description: 'We dive deep into your business, audience, and goals.' },
      { step: '02', title: 'Strategy', description: 'We define your brand positioning and messaging framework.' },
      { step: '03', title: 'Design', description: 'We craft your visual identity and brand elements.' },
      { step: '04', title: 'Delivery', description: 'We deliver comprehensive brand guidelines and assets.' },
    ],
    color: 'from-rose-500 to-pink-500',
    relatedImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
  },
  digital: {
    icon: Globe,
    title: 'Digital Presence',
    tagline: 'websites and apps that captivate and convert.',
    description: 'We blend cutting-edge technology with intuitive design.',
    longDescription: 'In today\'s digital-first world, your website is often the first interaction customers have with your brand. We build websites and applications that not only look stunning but also drive results. From responsive design to complex web applications, we deliver digital experiences that engage users and convert visitors into customers.',
    features: ['Website Design', 'Web Development', 'E-commerce', 'UI/UX Design', 'App Development', 'CMS Integration', 'API Development', 'Performance Optimization'],
    benefits: ['Increase conversions', 'Improve user experience', 'Mobile-first approach', 'SEO friendly', 'Fast loading times'],
    process: [
      { step: '01', title: 'Requirements', description: 'We gather your needs and define project scope.' },
      { step: '02', title: 'Wireframing', description: 'We map out user flows and site architecture.' },
      { step: '03', title: 'Design', description: 'We create visual designs that align with your brand.' },
      { step: '04', title: 'Development', description: 'We build with clean, scalable code.' },
    ],
    color: 'from-blue-500 to-cyan-500',
    relatedImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  social: {
    icon: Palette,
    title: 'Social Media',
    tagline: 'Elevate your brand visibility and foster connections.',
    description: 'Our strategies amplify your online impact across every platform.',
    longDescription: 'Social media is where conversations happen. We help you join them meaningfully. Our approach goes beyond posting — we build communities, craft compelling content strategies, and create meaningful connections with your audience. Let\'s turn followers into fans.',
    features: ['Social Strategy', 'Content Planning', 'Community Management', 'Influencer Marketing', 'Paid Advertising', 'Analytics', 'Content Creation', 'Storytelling'],
    benefits: ['Grow your following', 'Increase engagement', 'Build community', 'Drive traffic', 'Generate leads'],
    process: [
      { step: '01', title: 'Audit', description: 'We analyze your current social presence.' },
      { step: '02', title: 'Strategy', description: 'We develop a tailored content strategy.' },
      { step: '03', title: 'Content', description: 'We create engaging content calendar.' },
      { step: '04', title: 'Growth', description: 'We optimize and scale your presence.' },
    ],
    color: 'from-violet-500 to-purple-500',
    relatedImage: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
  },
  content: {
    icon: Video,
    title: 'Content Creation',
    tagline: 'Compelling content that tells your brand\'s story.',
    description: 'We bring your brand to life through immersive content.',
    longDescription: 'Content is king, and we\'re the storytellers. From high-quality video production to stunning photography and compelling copywriting, we create content that captures attention and communicates your message. Every piece is crafted to engage your audience and elevate your brand.',
    features: ['Video Production', 'Photography', 'Graphic Design', 'Motion Graphics', 'Copywriting', 'Animation', 'Podcasts', 'Live Streaming'],
    benefits: ['Higher engagement', 'Better storytelling', 'Professional quality', 'Versatile content', 'Brand consistency'],
    process: [
      { step: '01', title: 'Brief', description: 'We understand your content goals and message.' },
      { step: '02', title: 'Concept', description: 'We develop creative concepts and storyboards.' },
      { step: '03', title: 'Production', description: 'We execute with professional equipment.' },
      { step: '04', title: 'Post', description: 'We edit, refine, and deliver polished content.' },
    ],
    color: 'from-amber-500 to-orange-500',
    relatedImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
  },
};

const icons: Record<string, typeof Sparkles> = {
  branding: Sparkles,
  digital: Globe,
  social: Palette,
  content: Video,
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-white/60">Service not found</p>
        <Link to="/services" className="text-white underline mt-4 inline-block">Back to Services</Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-body">Back to Services</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <Icon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading italic text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-white/60 font-body italic mb-6">
                {service.tagline}
              </p>
              <p className="text-lg text-white/70 font-body font-light leading-relaxed">
                {service.longDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src={service.relatedImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl`} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading italic text-white mb-4">What's Included</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="liquid-glass rounded-xl p-4 flex items-center gap-3"
              >
                <Check className="h-5 w-5 text-white/70 flex-shrink-0" />
                <span className="text-white/80 font-body">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading italic text-white mb-4">Why It Matters</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="liquid-glass rounded-2xl p-6 text-center"
              >
                <Zap className={`h-8 w-8 mx-auto mb-3 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                <p className="text-white font-body">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-20 bg-black/20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading italic text-white mb-4">Our Process</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent -translate-x-4" />
                )}
                <div className="liquid-glass rounded-2xl p-6 text-center">
                  <p className="text-4xl font-heading italic text-white/20 mb-4">{step.step}</p>
                  <h3 className="text-lg font-heading italic text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/50 font-body font-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading italic text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/60 font-body mb-8">
              Let's discuss how we can help transform your brand.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`liquid-glass-strong rounded-full px-8 py-4 text-lg font-medium text-white font-body inline-flex items-center gap-2 hover:bg-white/10 transition-all bg-gradient-to-r ${service.color}`}
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
