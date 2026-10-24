import React from 'react';
import { happyMoments, siteConfig } from '../data/siteData';

export default function HappyFamilies() {
  return (
    <div style={{ paddingTop: 'var(--header-h)', backgroundColor: 'var(--honey)', minHeight: '85vh' }}>
      {/* Header Banner */}
      <div
        style={{
          padding: 'clamp(2.5rem, 5vw, 4.5rem) 0 2.5rem',
          backgroundColor: 'var(--honey-warm)',
          borderBottom: '2.5px solid var(--cocoa)'
        }}
      >
        <div className="gutter" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <p className="font-scrawl" style={{ color: 'var(--accent-rust)', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
            our wall of happy endings
          </p>
          <h1 className="font-plush" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: 'var(--cocoa)', marginBottom: '1.2rem' }}>
            Happy families & puppies
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--cocoa-muted)', lineHeight: 1.6 }}>
            Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients across Dubai, Abu Dhabi, and beyond.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gutter" style={{ padding: '4rem 1rem 5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {happyMoments.map(m => (
            <div key={m.id} className="tp-card-sketch">
              <div style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', borderBottom: '2px solid var(--cocoa)' }}>
                <img
                  src={m.image}
                  alt={m.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: '1.6rem' }}>
                <h3 className="font-plush" style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>
                  {m.title} {m.emoji}
                </h3>
                <p style={{ color: 'var(--cocoa-muted)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                  "{m.quote}"
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed rgba(42, 23, 14, 0.2)', paddingTop: '0.9rem' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-rust)' }}>
                    {m.family}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--cocoa-muted)' }}>
                    Verified Adopter
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share your moment CTA */}
        <div
          className="tp-card-sketch"
          style={{
            marginTop: '4.5rem',
            padding: '3rem',
            textAlign: 'center',
            backgroundColor: 'var(--honey-subtle)'
          }}
        >
          <h2 className="font-plush" style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
            Are you a TeddyPups parent?
          </h2>
          <p style={{ color: 'var(--cocoa-muted)', maxWidth: '550px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            We adore watching our puppies grow up! Tag us on Instagram or share your photos on WhatsApp to be featured on our wall.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Tag @teddypups.worldwide
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Send photos on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
