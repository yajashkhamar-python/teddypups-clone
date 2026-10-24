import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteData';
import { PawIcon } from './Header';

export default function Footer() {
  return (
    <footer className="tp-footer">
      <div className="gutter">
        <div className="tp-footer__grid">
          <div className="tp-footer__col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <img
                src="https://puppy.instabizweb.com/brand/logo.png"
                alt="TeddyPups Logo"
                style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid var(--cocoa)' }}
              />
              <span className="font-plush" style={{ fontSize: '1.4rem' }}>TeddyPups</span>
            </div>
            <p style={{ lineHeight: 1.6, color: 'var(--cocoa-muted)', marginBottom: '1.5rem', maxWidth: '380px' }}>
              TeddyPups U.A.E. is a Dubai-based brand specializing in miniature and teacup puppies, offering premium veterinary care, showroom viewing, and worldwide shipping.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
              >
                Instagram
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
              >
                TikTok
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="tp-footer__col">
            <h4>
              <PawIcon />
              <span>Explore</span>
            </h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/puppies">Available Puppies</Link></li>
              <li><Link to="/happy-families">Happy Families</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
              <li><Link to="/contact">Visit & Contact Us</Link></li>
            </ul>
          </div>

          <div className="tp-footer__col">
            <h4>
              <PawIcon />
              <span>Say Hello</span>
            </h4>
            <ul style={{ gap: '0.9rem' }}>
              <li>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--cocoa-muted)' }}>Location</strong>
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--cocoa-muted)' }}>Call or WhatsApp</strong>
                <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
              </li>
              <li>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--cocoa-muted)' }}>Email</strong>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ marginTop: '0.5rem', width: 'fit-content' }}
                >
                  Direct WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="tp-footer__bottom">
          <p>© {new Date().getFullYear()} TeddyPups U.A.E. All rights reserved.</p>
          <p className="font-scrawl" style={{ fontSize: '1.2rem', color: 'var(--cocoa)' }}>
            every puppy is family
          </p>
        </div>
      </div>
    </footer>
  );
}
