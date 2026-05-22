import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Hero.css';

export default function Hero() {
  const [ref, isVisible] = useScrollReveal();

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="home" className="hero-editorial">
      <div className="grid-12 container">
        
        {/* Label */}
        <motion.div 
          className="hero-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          PORTFOLIO 2025
        </motion.div>

        {/* Main Name (Asymmetric) */}
        <div className="hero-name-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="hero-name text-display"
          >
            MEEZAB
          </motion.div>
          <div style={{ display: 'flex', alignItems: 'flex-end', position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              className="hero-name text-display offset-name"
            >
              MOMIN
            </motion.div>
            
            {/* Role overlap */}
            <motion.div 
              className="hero-role"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
            >
              Full-Stack Developer
            </motion.div>
          </div>
        </div>

        {/* Bio */}
        <motion.div 
          className="hero-bio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Building elegant solutions to complex problems. 
          Currently crafting AI-powered applications and 
          exploring the intersection of design & code.
        </motion.div>

        {/* Right Stats */}
        <motion.div 
          className="hero-stats"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div className="stat-group" variants={fadeInUp}>
            <span className="stat-number text-display">30+</span>
            <span className="stat-label">PROJECTS</span>
          </motion.div>
          
          <motion.div className="stat-group" variants={fadeInUp}>
            <span className="stat-number text-display">08.6</span>
            <span className="stat-label">GPA</span>
          </motion.div>
          
          <motion.div className="stat-group" variants={fadeInUp}>
            <span className="stat-number text-display">2022</span>
            <span className="stat-label">EST.</span>
          </motion.div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div 
          className="hero-dec-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
        />

        {/* Version String */}
        <motion.div 
          className="hero-version"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.8 }}
        >
          v2025.1
        </motion.div>

        {/* CTA Links */}
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.8 }}
        >
          <a href="#projects" className="link-editorial">View Work ↓</a>
          <a href="#contact" className="link-editorial">Contact →</a>
        </motion.div>

      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 3 }}
      >
        SCROLL
      </motion.div>
    </section>
  );
}
