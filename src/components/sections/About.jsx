import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="about-editorial">
      <div className="container" ref={ref}>
        <motion.div 
          className="grid-40-60"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          {/* Left Column */}
          <div className="about-left">
            <motion.div variants={fadeInUp}>
              <div className="section-label">ABOUT</div>
              <h2 className="section-heading text-display">WHO AM I</h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="profile-wrapper">
              <img src="/placeholder.jpg" alt="Meezab Momin" className="profile-editorial" />
            </motion.div>

            <motion.div variants={fadeInUp} className="quick-facts">
              <div className="fact-item">
                <span className="fact-label text-mono">BASED IN</span>
                <span className="fact-value">Bhiwandi, Maharashtra</span>
              </div>
              <div className="fact-item">
                <span className="fact-label text-mono">EXPERIENCE</span>
                <span className="fact-value">Since 2022</span>
              </div>
              <div className="fact-item">
                <span className="fact-label text-mono">CURRENTLY</span>
                <span className="fact-value">Master's Student at JNU</span>
              </div>
              <div className="fact-item">
                <span className="fact-label text-mono">OPEN TO</span>
                <span className="fact-value">Collaborations & Opportunities</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="about-right">
            <motion.div variants={fadeInUp} className="intro-paragraph">
              <p>
                <span className="text-paper-white">I'm a full-stack developer specializing in AI-powered web applications.</span> Currently pursuing my MCA at Jaipur National University with an 8.6 SGPA, I build production-grade tools that solve real problems—from CPU emulators to AI-driven platforms.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="body-paragraphs">
              <p className="drop-cap-paragraph">
                <span className="drop-cap">M</span>y journey began with a fascination for how things work under the hood. I don't just use frameworks; I try to understand them. This led me to build a complete 8085/8086 microprocessor simulator from scratch in the browser, proving that complex systems can be made accessible.
              </p>
              
              <p>
                I believe in "honest design"—where form follows function and code is as clean as the interface it powers. I avoid unnecessary abstractions and focus on creating tools that respect the user's time, privacy, and intelligence. My toolkit, Zylarium, runs entirely client-side for exactly this reason.
              </p>
              
              <p>
                When I'm not coding, I'm writing. I've published a research paper tracing the 50-year evolution of fill algorithms, and authored two books exploring themes of self-reliance and the philosophy of work. I approach software engineering with the same editorial rigor—every line should have a purpose.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="pull-quote">
              "I build tools that make complex problems feel approachable."
            </motion.div>

            <motion.div variants={fadeInUp} className="skills-editorial">
              <h3 className="skills-heading">Working With</h3>
              <div className="skills-list">
                <div className="skill-row">
                  <span className="skill-cat">Frontend:</span>
                  <span className="skill-items">React 18, Next.js 15, TypeScript, Tailwind CSS</span>
                </div>
                <div className="skill-row">
                  <span className="skill-cat">Backend:</span>
                  <span className="skill-items">Node.js, Express.js, MongoDB, Firebase</span>
                </div>
                <div className="skill-row">
                  <span className="skill-cat">AI/ML:</span>
                  <span className="skill-items">Google Gemini API, Genkit, TensorFlow.js</span>
                </div>
                <div className="skill-row">
                  <span className="skill-cat">Tools:</span>
                  <span className="skill-items">Git, Vercel, Vite, Figma</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="timeline-editorial">
              <h3 className="skills-heading" style={{ marginTop: '48px' }}>Education</h3>
              <div className="timeline-item">
                <div className="timeline-year text-mono">2025 – 2027</div>
                <div className="timeline-degree">Master of Computer Applications</div>
                <div className="timeline-uni">Jaipur National University • SGPA: 8.6</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year text-mono">2022 – 2025</div>
                <div className="timeline-degree">Bachelor of Computer Applications</div>
                <div className="timeline-uni">NIMS University • GPA: 8.02</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="highlight-stats text-mono">
              <div className="stats-line" />
              <div className="stats-text">
                30+ TOOLS BUILT <span className="stat-sep">•</span> 8.6 GPA <span className="stat-sep">•</span> 2 BOOKS PUBLISHED
              </div>
              <div className="stats-line" />
            </motion.div>
            
            <motion.div variants={fadeInUp} className="signature text-mono">
              // Always learning, always building<br/>
              Meezab Momin
            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
