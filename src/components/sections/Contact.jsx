import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal({ margin: "-20% 0px" });
  
  const [formState, setFormState] = useState({
    name: '', email: '', message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length >= 2 ? '' : 'Name must be at least 2 characters';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address';
      case 'message':
        return value.length >= 10 ? '' : 'Message must be at least 10 characters';
      default:
        return '';
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all
    const newErrors = {
      name: validateField('name', formState.name),
      email: validateField('email', formState.email),
      message: validateField('message', formState.message)
    };
    
    setErrors(newErrors);
    
    if (Object.values(newErrors).some(err => err !== '')) return;

    setIsSubmitting(true);
    
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="contact" className="contact-editorial">
      <div className="container contact-container" ref={ref}>
        <motion.div 
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Header */}
          <motion.div className="contact-header" variants={fadeInUp}>
            <div className="contact-label text-mono">GET IN TOUCH</div>
            <h2 className="contact-heading text-display">Let's talk</h2>
            <p className="contact-subtext">
              Have a project in mind? Want to collaborate? Just want to say hi? Drop me a message.
            </p>
          </motion.div>

          <div className="contact-grid">
            {/* Form Column */}
            <motion.div className="contact-form-col" variants={fadeInUp}>
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    className="success-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="editorial-form">
                <div className="form-group">
                  <label htmlFor="name">YOUR NAME</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && <span className="error-text">⚠ {errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="error-text">⚠ {errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">MESSAGE</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.message ? 'input-error' : ''}
                  />
                  {errors.message && <span className="error-text">⚠ {errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'loading' : ''} ${isSuccess ? 'success' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : isSuccess ? 'MESSAGE SENT ✓' : 'SEND MESSAGE'}
                </button>
              </form>
            </motion.div>

            {/* Info Column */}
            <motion.div className="contact-info-col" variants={fadeInUp}>
              <div className="info-block">
                <h3 className="info-heading">Prefer email?</h3>
                <a href="mailto:mmm045762s@gmail.com" className="email-link">mmm045762s@gmail.com</a>
              </div>

              <div className="divider" />

              <div className="info-block">
                <h3 className="info-heading">Connect elsewhere</h3>
                <div className="social-links">
                  <a href="https://github.com/QuantumGlitch404" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">Twitter</a>
                </div>
              </div>

              <div className="divider" />

              <div className="availability-note">
                <p>Currently open to freelance projects and full-time opportunities.<br/>Response time: Usually within 24-48 hours.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
