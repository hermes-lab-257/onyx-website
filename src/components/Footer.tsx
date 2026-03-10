import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Branding', href: '/services/branding' },
    { name: 'Digital Presence', href: '/services/digital' },
    { name: 'Social Media', href: '/services/social' },
    { name: 'Content', href: '/services/content' },
  ],
  company: [
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ],
};

const socials = [
  { name: 'Instagram', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
];

export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-white/10 bg-black/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/">
                <span className="text-4xl font-heading italic text-white">ONYX</span>
              </Link>
              <p className="text-white/50 font-body mt-4 max-w-sm">
                We build brands that dominate. Strategy + Branding + Design + Technology for businesses ready to own their digital space.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 liquid-glass rounded-full px-5 py-2.5 text-sm font-medium text-white font-body flex items-center gap-2 hover:bg-white/10 transition-all"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm text-white/30 uppercase tracking-widest font-body mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/60 hover:text-white transition-colors font-body">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm text-white/30 uppercase tracking-widest font-body mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/60 hover:text-white transition-colors font-body">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 font-body text-sm">
            © 2026 Onyx Digital SG. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-white/30 hover:text-white transition-colors font-body text-sm"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
