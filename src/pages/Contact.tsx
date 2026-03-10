import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setIsSubmitted(true), 1000);
  };

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
            <p className="text-sm text-white/50 uppercase tracking-widest font-body mb-4">Get In Touch</p>
            <h1 className="text-6xl md:text-7xl font-heading italic text-white mb-6">
              Let's Talk
            </h1>
            <p className="text-xl text-white/60 font-body font-light max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading italic text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="liquid-glass rounded-xl p-3">
                    <Mail className="h-6 w-6 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white/40 font-body text-sm uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:hello@onyxdigital.sg" className="text-white font-body text-lg hover:text-white/80 transition-colors">
                      hello@onyxdigital.sg
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="liquid-glass rounded-xl p-3">
                    <Phone className="h-6 w-6 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white/40 font-body text-sm uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+6581234567" className="text-white font-body text-lg hover:text-white/80 transition-colors">
                      +65 8123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="liquid-glass rounded-xl p-3">
                    <MapPin className="h-6 w-6 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white/40 font-body text-sm uppercase tracking-wider mb-1">Location</p>
                    <p className="text-white font-body text-lg">
                      Singapore • Hong Kong • Tokyo
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-heading italic text-white mb-4">Office Hours</h3>
              <p className="text-white/60 font-body">
                Monday - Friday: 9:00 AM - 7:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="liquid-glass rounded-3xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-heading italic text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60 font-body">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="liquid-glass rounded-3xl p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-white/60 font-body text-sm mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 font-body text-sm mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-white/60 font-body text-sm mb-2">Company</label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 font-body text-sm mb-2">Budget</label>
                      <select
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-white/30 transition-colors"
                      >
                        <option value="" className="bg-black">Select budget range</option>
                        <option value="under5k" className="bg-black">Under $5,000</option>
                        <option value="5k-10k" className="bg-black">$5,000 - $10,000</option>
                        <option value="10k-25k" className="bg-black">$10,000 - $25,000</option>
                        <option value="25k-50k" className="bg-black">$25,000 - $50,000</option>
                        <option value="50k+" className="bg-black">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white/60 font-body text-sm mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-white/30 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full liquid-glass-strong rounded-full px-6 py-4 text-base font-medium text-white font-body flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                  >
                    Send Message
                    <Send className="h-5 w-5" />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
