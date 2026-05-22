import { useState, useEffect } from 'react';
import './Footer.css';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled > 50% of the document height
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrolled > docHeight * 0.5) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-editorial">
      <div className="container">
        
        {/* Top Grid */}
        <div className="footer-grid">
          
          {/* Left Col - Branding */}
          <div className="footer-col-left">
            <h2 className="footer-branding text-display">MEEZAB MOMIN</h2>
            <div className="footer-tagline">Developer & Builder</div>
            <p className="footer-bio">
              Crafting thoughtful digital experiences<br/>
              from Bhiwandi, Maharashtra.
            </p>
          </div>

          {/* Middle Col - Sitemap */}
          <div className="footer-col-middle">
            <h3 className="footer-heading text-mono">SITEMAP</h3>
            <ul className="footer-links">
              <li><a href="#home">Intro</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Right Col - Connect */}
          <div className="footer-col-right">
            <h3 className="footer-heading text-mono">CONNECT</h3>
            <ul className="footer-links">
              <li><a href="https://github.com/QuantumGlitch404" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="mailto:mmm045762s@gmail.com">Email</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-separator" />
        <div className="footer-bottom-bar text-mono">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Meezab Momin
          </div>
          <div className="footer-credits">
            Built with React • Designed with care
          </div>
        </div>
        <div className="footer-font-credits text-mono">
          Fonts: Fraunces, Inter, DM Sans, JetBrains Mono
        </div>
      </div>

      {/* Back to top button */}
      <button 
        className={`back-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
}
