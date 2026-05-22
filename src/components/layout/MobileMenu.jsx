import { useEffect } from 'react';
import './MobileMenu.css';

export default function MobileMenu({ isOpen, links, onClose, onNavClick, activeSection }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
        <ul className="mobile-nav-links">
          {links.map((link, index) => (
            <li 
              key={link.name}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="mobile-nav-item"
            >
              <a
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={(e) => onNavClick(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
