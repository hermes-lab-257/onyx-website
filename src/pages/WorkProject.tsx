import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { workItems } from '../data/workItems';
import FadeIn from '../components/FadeIn';

export default function WorkProject() {
  const { slug } = useParams<{ slug: string }>();
  const project = workItems.find(
    p => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!project) {
    return (
      <div className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-5xl font-heading italic mb-6">Project Not Found</h1>
        <p className="text-white/60 mb-8">The project you're looking for doesn't exist.</p>
        <Link
          to="/work"
          className="liquid-glass-strong rounded-full px-8 py-4 text-lg font-medium text-white font-body inline-flex items-center gap-2 hover:bg-white/10 transition-all"
        >
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white font-body mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to All Projects
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-10">
            <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-2">{project.category}</p>
            <h1 className="text-6xl md:text-7xl font-heading italic text-white mb-6">{project.title}</h1>
            <p className="text-xl text-white/60 font-body font-light max-w-2xl">{project.description}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="liquid-glass rounded-2xl p-8 max-w-2xl">
            <h2 className="text-2xl font-heading italic text-white mb-4">Project Overview</h2>
            <p className="text-white/60 font-body font-light leading-relaxed mb-6">
              This project showcases our expertise in {project.category.toLowerCase()}. 
              We worked closely with the client to deliver a solution that exceeded expectations.
            </p>
            <p className="text-white/60 font-body font-light leading-relaxed mb-8">
              From initial concept to final delivery, our team ensured every detail aligned with the brand's vision and business goals.
            </p>
            <Link
              to="/contact"
              className="liquid-glass-strong rounded-full px-8 py-4 text-lg font-medium text-white font-body inline-flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              Start Your Project
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
