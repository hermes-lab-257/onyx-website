import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HoverExpandGallery from '../components/HoverExpandGallery';

const workItems = [
  { 
    category: 'F&B', 
    title: 'Restaurant Brand Identity', 
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description: 'Complete brand overhaul for a Korean BBQ restaurant',
    code: '#01'
  },
  { 
    category: 'Retail', 
    title: 'E-commerce Redesign', 
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    description: 'Modern e-commerce experience for a fashion brand',
    code: '#02'
  },
  { 
    category: 'Services', 
    title: 'Corporate Website', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    description: 'Professional corporate presence for consulting firm',
    code: '#03'
  },
  { 
    category: 'Tech', 
    title: 'SaaS Platform UI', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Intuitive dashboard design for analytics platform',
    code: '#04'
  },
  { 
    category: 'Beauty', 
    title: 'Beauty Brand Launch', 
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
    description: 'Full brand launch including packaging and digital',
    code: '#05'
  },
  { 
    category: 'Fitness', 
    title: 'Fitness App Design', 
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    description: 'Mobile app design for fitness startup',
    code: '#06'
  },
];

const categories = ['All', 'F&B', 'Retail', 'Services', 'Tech', 'Beauty', 'Fitness'];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? workItems 
    : workItems.filter(item => item.category === activeCategory);

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
            <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">Our Work</p>
            <h1 className="text-6xl md:text-7xl font-heading italic text-white mb-6">
              Recent Projects
            </h1>
            <p className="text-xl text-white/60 font-body font-light max-w-2xl mx-auto">
              A showcase of our work across branding, digital, and content. Each project represents our commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-body transition-all ${
                  category === activeCategory
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Work Gallery — HoverExpand */}
      <section className="px-4 py-8">
        <div className="max-w-[1600px] mx-auto overflow-x-auto scroll-smooth">
          <HoverExpandGallery
            images={filteredItems.map(item => ({
              src: item.image,
              alt: item.title,
              code: item.code,
            }))}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-heading italic text-white mb-6">Have a Project in Mind?</h2>
            <p className="text-white/60 font-body mb-8">
              We'd love to hear about your project. Let's create something amazing together.
            </p>
            <a
              href="/contact"
              className="liquid-glass-strong rounded-full px-8 py-4 text-lg font-medium text-white font-body inline-flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              Start a Project
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
