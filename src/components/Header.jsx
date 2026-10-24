import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteData';

export const PawIcon = ({ className = "tp-paw-icon" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="currentColor">
    <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="tp-header" id="site-header" data-scrolled="false" data-home={location.pathname === '/' ? 'true' : 'false'}>
      <div className="tp-header__bar gutter">
        <Link to="/" className="tp-header__brand" aria-label="TeddyPups U.A.E. — Home">
          <img
            src="https://puppy.instabizweb.com/brand/logo.png"
            alt="TeddyPups Logo"
            className="tp-header__logo"
            width="56"
            height="56"
          />
          <span className="font-plush tp-header__name">TeddyPups</span>
        </Link>

        <nav aria-label="Main navigation" className="tp-header__nav">
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => `tp-nav-link ${isActive ? 'active' : ''}`}>
                <span>Home</span>
                <PawIcon className="tp-nav-link__paw" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/puppies" className={({ isActive }) => `tp-nav-link ${isActive ? 'active' : ''}`}>
                <span>Puppies</span>
                <PawIcon className="tp-nav-link__paw" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/happy-families" className={({ isActive }) => `tp-nav-link ${isActive ? 'active' : ''}`}>
                <span>Happy families</span>
                <PawIcon className="tp-nav-link__paw" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/how-it-works" className={({ isActive }) => `tp-nav-link ${isActive ? 'active' : ''}`}>
                <span>How it works</span>
                <PawIcon className="tp-nav-link__paw" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={({ isActive }) => `tp-nav-link ${isActive ? 'active' : ''}`}>
                <span>FAQ</span>
                <PawIcon className="tp-nav-link__paw" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `tp-nav-link ${isActive ? 'active' : ''}`}>
                <span>Visit & contact</span>
                <PawIcon className="tp-nav-link__paw" />
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="tp-header__end" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp tp-header__wa"
          >
            WhatsApp us
          </a>
          <button
            type="button"
            className="tp-header__mobile-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <PawIcon style={{ width: '16px', height: '16px' }} />
            <span>Menu</span>
          </button>
        </div>
      </div>

      {/* Scalloped Hem Pattern from reference */}
      <svg aria-hidden="true" className="tp-header__hem" width="100%" height="14" preserveAspectRatio="none">
        <defs>
          <pattern id="tp-hem-pattern" width="44" height="14" patternUnits="userSpaceOnUse">
            <path d="M0 0H44V2A22 11 0 0 1 0 2Z" fill="#fffdf8" />
            <path d="M0 2A22 11 0 0 0 44 2" fill="none" stroke="#2a170e" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="14" fill="url(#tp-hem-pattern)" />
      </svg>

      {/* Mobile Menu Dialog */}
      <div className={`tp-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="tp-drawer__header">
          <span className="font-scrawl" style={{ fontSize: '1.4rem' }}>where to, friend?</span>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setMenuOpen(false)}
            style={{ padding: '0.45rem 1rem' }}
          >
            Close
          </button>
        </div>
        <ul className="tp-drawer__links">
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              <span>Home</span>
              <PawIcon style={{ width: '28px', height: '28px' }} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/puppies" onClick={() => setMenuOpen(false)}>
              <span>Puppies</span>
              <PawIcon style={{ width: '28px', height: '28px' }} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/happy-families" onClick={() => setMenuOpen(false)}>
              <span>Happy families</span>
              <PawIcon style={{ width: '28px', height: '28px' }} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/how-it-works" onClick={() => setMenuOpen(false)}>
              <span>How it works</span>
              <PawIcon style={{ width: '28px', height: '28px' }} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" onClick={() => setMenuOpen(false)}>
              <span>FAQ</span>
              <PawIcon style={{ width: '28px', height: '28px' }} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              <span>Visit & contact</span>
              <PawIcon style={{ width: '28px', height: '28px' }} />
            </NavLink>
          </li>
        </ul>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            WhatsApp us
          </a>
          <p style={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>
            {siteConfig.phone}
          </p>
        </div>
      </div>
    </header>
  );
}
