import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteData';

export const PawIcon = ({ className = "tp-paw-icon" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="currentColor">
    <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      id="site-header"
      data-scrolled={scrolled ? "true" : "false"}
      data-hidden="false"
      data-home={isHome ? "true" : undefined}
      className="tp-header fixed inset-x-0 top-0 z-50"
    >
      <div className="tp-header__bar gutter">
        <Link className="tp-header__brand" aria-label="TeddyPups U.A.E. — home" to="/">
          <img
            alt=""
            width="56"
            height="56"
            className="tp-header__logo"
            src="https://puppy.instabizweb.com/brand/logo.png"
          />
          <span className="font-plush tp-header__name">TeddyPups</span>
        </Link>

        <nav aria-label="Main" className="tp-header__nav">
          <ul>
            <li>
              <NavLink to="/" end className="tp-nav-link" data-active={isHome ? "true" : "false"}>
                <span>Home</span>
                <PawIcon className="tp-nav-link__paw" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/puppies" className="tp-nav-link" data-active={location.pathname === '/puppies' ? "true" : "false"}>
                <span>Puppies</span>
                <PawIcon className="tp-nav-link__paw" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/happy-families" className="tp-nav-link" data-active={location.pathname === '/happy-families' ? "true" : "false"}>
                <span>Happy families</span>
                <PawIcon className="tp-nav-link__paw" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/how-it-works" className="tp-nav-link" data-active={location.pathname === '/how-it-works' ? "true" : "false"}>
                <span>How it works</span>
                <PawIcon className="tp-nav-link__paw" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="tp-nav-link" data-active={location.pathname === '/faq' ? "true" : "false"}>
                <span>FAQ</span>
                <PawIcon className="tp-nav-link__paw" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="tp-nav-link" data-active={(location.pathname === '/contact' || location.pathname === '/visit') ? "true" : "false"}>
                <span>Visit & contact</span>
                <PawIcon className="tp-nav-link__paw" />
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="tp-header__end">
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
            className="inline-flex h-10 items-center gap-2 rounded-full border-2 border-cocoa bg-milk px-4 text-[0.95rem] font-semibold lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-haspopup="dialog"
          >
            <PawIcon className="size-4" />
            Menu
          </button>
        </div>
      </div>

      {/* Decorative Scalloped Hem Pattern */}
      <svg aria-hidden="true" className="tp-header__hem" width="100%" height="14" preserveAspectRatio="none">
        <defs>
          <pattern id="tp-hem" width="44" height="14" patternUnits="userSpaceOnUse">
            <path d="M0 0H44V2A22 11 0 0 1 0 2Z" className="tp-header__hem-fill" />
            <path d="M0 2A22 11 0 0 0 44 2" className="tp-header__hem-line" />
          </pattern>
        </defs>
        <rect width="100%" height="14" fill="url(#tp-hem)" />
      </svg>

      {/* Mobile Drawer */}
      {menuOpen && (
        <dialog
          aria-label="Site menu"
          open
          className="tp-menu m-0 h-dvh max-h-none w-screen max-w-none bg-honey p-0 text-cocoa backdrop:bg-cocoa/40 fixed inset-0 z-[100]"
        >
          <div className="flex h-full flex-col gutter pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-5">
            <div className="flex items-center justify-between">
              <span className="font-scrawl text-lg">where to, friend?</span>
              <button
                type="button"
                className="h-11 rounded-full bg-cocoa px-5 font-semibold text-milk"
                onClick={() => setMenuOpen(false)}
              >
                Close
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-10 flex-1">
              <ul className="space-y-1">
                {['/', '/puppies', '/happy-families', '/how-it-works', '/faq', '/contact'].map((path) => {
                  const label = path === '/' ? 'Home' : path.slice(1).replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
                  const active = location.pathname === path;
                  return (
                    <li key={path}>
                      <NavLink
                        to={path}
                        className="tp-menu-link font-plush block py-2 text-[clamp(2.4rem,11vw,3.4rem)]"
                        data-active={active ? "true" : "false"}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>{label}</span>
                        <PawIcon className="tp-nav-link__paw" />
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="space-y-3">
              <a
                href={siteConfig.whatsappUrl}
                className="btn btn-whatsapp w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </a>
              <p className="text-center text-sm font-medium">{siteConfig.phone}</p>
            </div>
          </div>
        </dialog>
      )}
    </header>
  );
}
