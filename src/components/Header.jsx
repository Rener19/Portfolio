import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu on click outside or on Escape key
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header>
      <div className="nav-container">
        <a href="#home" className="logo" aria-label="Home" onClick={closeMenu}>
          <img
            src="./assets/logo.svg"
            alt="< R />"
            width="48"
            height="48"
            style={{ display: 'block', width: '48px', height: '48px' }}
          />
        </a>

        <nav className="nav-wrapper" ref={navRef} aria-label="Main Navigation">
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="nav-links">
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#work" onClick={closeMenu}>Work</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>

          <div className="nav-controls">
            <ThemeToggle />
            <button
              id="mobile-menu-btn"
              className="mobile-menu-btn"
              aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={menuOpen}
              aria-controls="nav-links"
              onClick={toggleMenu}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

