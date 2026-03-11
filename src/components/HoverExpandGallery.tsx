import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ExternalLink } from 'lucide-react';

interface ImageItem {
  src: string;
  alt: string;
  code?: string;
  slug?: string;
}

interface HoverExpandGalleryProps {
  images: ImageItem[];
  className?: string;
}

export default function HoverExpandGallery({ images, className = '' }: HoverExpandGalleryProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
      {images.map((img, index) => {
        const slug = img.slug || img.alt.toLowerCase().replace(/\s+/g, '-');
        return (
          <div
            key={index}
            className="relative flex-shrink-0 cursor-pointer"
            style={{ width: expandedIndex === index ? 400 : 120, height: 500 }}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={false}
                animate={{ width: expandedIndex === index ? 400 : 120 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="relative h-full rounded-2xl overflow-hidden bg-white/5"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <p className="text-white/70 font-body text-sm mb-2">{img.alt}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono text-sm">{img.code || `#${index + 1}`}</span>
                        <Link
                          to={`/work/${slug}`}
                          className="inline-flex items-center gap-1 text-white/60 hover:text-white transition-colors text-sm"
                          onClick={e => e.stopPropagation()}
                        >
                          View Project <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                  {expandedIndex !== index && (
                    <div className="flex items-center gap-2">
                      <span className="text-white font-mono text-sm">{img.code || `#${index + 1}`}</span>
                      <ChevronUp className="h-5 w-5 text-white/60 transition-transform rotate-180" />
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
