import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  stepDuration?: number;
}

export default function BlurText({
  text,
  className = '',
  delay = 100,
  _animateBy = 'words',
  direction = 'bottom',
  stepDuration = 0.35,
}: BlurTextProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{
            filter: 'blur(10px)',
            opacity: 0,
            y: direction === 'bottom' ? 50 : -50,
          }}
          animate={
            isInView
              ? {
                  filter: 'blur(0px)',
                  opacity: 1,
                  y: 0,
                  transition: {
                    filter: { duration: stepDuration, delay: delay * 0.001 * index },
                    opacity: { duration: stepDuration, delay: delay * 0.001 * index },
                    y: { duration: stepDuration, delay: delay * 0.001 * index },
                  },
                }
              : {
                  filter: 'blur(10px)',
                  opacity: 0,
                  y: direction === 'bottom' ? 50 : -50,
                }
          }
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
