import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { puppies } from '../data/puppies';
import { siteConfig } from '../data/siteData';
import { PawIcon } from '../components/Header';
import PuppyCard from '../components/PuppyCard';

export default function PuppyDetail() {
  const { id } = useParams();
  const puppy = puppies.find(p => p.id === id);

  if (!puppy) {
    return (
      <div style={{ paddingTop: 'calc(var(--header-h) + 4rem)', textAlign: 'center', minHeight: '70vh' }}>
        <div className="gutter">
          <p className="font-scrawl" style={{ fontSize: '2rem', color: 'var(--accent-rust)' }}>
            puppy not found
          </p>
          <h1 className="font-plush" style={{ margin: '1rem 0 2rem' }}>Looking for a special companion?</h1>
          <Link to="/puppies" className="btn btn-primary">
            Browse all available puppies
          </Link>
        </div>
      </div>
    );
  }

  const isAvailable = puppy.status === 'available';
  const whatsappInquiryUrl = `https://wa.me/971541676733?text=${encodeURIComponent(
    `Hi TeddyPups! I'm interested in ${puppy.name} (${puppy.breed}, ${puppy.gender}, ${puppy.age}). Could you please share more details/video?`
  )}`;

  const similarPups = puppies.filter(p => p.id !== puppy.id && p.status === 'available').slice(0, 3);

  return (
    <div style={{ paddingTop: 'var(--header-h)', backgroundColor: 'var(--honey)', minHeight: '85vh' }}>
      {/* Breadcrumb / Top Bar */}
      <div style={{ padding: '1.25rem 0', borderBottom: '1.5px solid rgba(42, 23, 14, 0.15)', backgroundColor: 'var(--honey-subtle)' }}>
        <div className="gutter" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
          <Link to="/" style={{ color: 'var(--cocoa-muted)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link to="/puppies" style={{ color: 'var(--cocoa-muted)', textDecoration: 'none' }}>Puppies</Link>
          <span>/</span>
          <span style={{ fontWeight: 700, color: 'var(--cocoa)' }}>{puppy.name}</span>
        </div>
      </div>

      {/* Main Detail Content */}
      <div className="gutter" style={{ padding: '3rem 1rem 5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Image / Gallery */}
          <div>
            <div
              className="tp-card-sketch"
              style={{
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                backgroundColor: 'var(--milk)',
                marginBottom: '1.5rem'
              }}
            >
              <img
                src={puppy.image}
                alt={puppy.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {puppy.gallery && puppy.gallery.length > 1 && (
              <div style={{ display: 'flex', gap: '1rem' }}>
                {puppy.gallery.map((img, i) => (
                  <div
                    key={i}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: 'var(--radius-md)',
                      border: '2px solid var(--cocoa)',
                      overflow: 'hidden'
                    }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Specs & Inquiry */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span className={`tp-badge ${isAvailable ? 'tp-badge--available' : 'tp-badge--adopted'}`}>
                {isAvailable ? 'Available' : 'Gone Home'}
              </span>
              <span className="tp-badge" style={{ backgroundColor: 'var(--honey-warm)' }}>
                {puppy.origin === 'local' ? '📍 Downtown Dubai Showroom' : '✈️ Direct Breeder Import'}
              </span>
            </div>

            <h1 className="font-plush" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--cocoa)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
              {puppy.name}
            </h1>
            <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent-rust)', marginBottom: '1.5rem' }}>
              {puppy.breed} · {puppy.gender} · {puppy.age}
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--cocoa-light)', marginBottom: '2rem' }}>
              {puppy.description}
            </p>

            {/* Inclusions Card */}
            <div
              className="tp-card-sketch"
              style={{ padding: '1.5rem', backgroundColor: 'var(--honey-subtle)', marginBottom: '2.5rem' }}
            >
              <h3 className="font-plush" style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <PawIcon /> Every Teddy Pup comes with:
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {puppy.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>
                    <span style={{ color: '#059669' }}>✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}
              >
                Inquire about {puppy.name} on WhatsApp
              </a>
              <Link to="/contact" className="btn btn-secondary" style={{ padding: '0.9rem 1.8rem' }}>
                Book Showroom Visit
              </Link>
            </div>
          </div>
        </div>

        {/* Similar Puppies */}
        {similarPups.length > 0 && (
          <div style={{ marginTop: '5rem', borderTop: '2px solid var(--cocoa)', paddingTop: '3.5rem' }}>
            <h2 className="font-plush" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
              Other available puppies
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '2rem'
              }}
            >
              {similarPups.map(p => (
                <PuppyCard key={p.id} puppy={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
