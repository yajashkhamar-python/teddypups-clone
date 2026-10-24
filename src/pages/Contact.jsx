import React, { useState } from 'react';
import { siteConfig } from '../data/siteData';
import { puppies } from '../data/puppies';
import { PawIcon } from '../components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    puppyId: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate realistic asynchronous frontend form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div style={{ paddingTop: 'var(--header-h)', backgroundColor: 'var(--honey)', minHeight: '85vh' }}>
      {/* Header */}
      <div
        style={{
          padding: 'clamp(2.5rem, 5vw, 4.5rem) 0 2.5rem',
          backgroundColor: 'var(--honey-warm)',
          borderBottom: '2.5px solid var(--cocoa)'
        }}
      >
        <div className="gutter" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <p className="font-scrawl" style={{ color: 'var(--accent-rust)', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
            let's connect
          </p>
          <h1 className="font-plush" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: 'var(--cocoa)', marginBottom: '1.2rem' }}>
            Get in touch with us
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--cocoa-muted)', lineHeight: 1.6 }}>
            Visit our private showroom in Downtown Dubai or send us a letter. We would love to help you find your new furry family member.
          </p>
        </div>
      </div>

      <div className="gutter" style={{ padding: '4rem 1rem 5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Info & Map Placeholder */}
          <div>
            <div className="tp-card-sketch" style={{ padding: '2.2rem', marginBottom: '2rem' }}>
              <h2 className="font-plush" style={{ fontSize: '1.6rem', marginBottom: '1.25rem' }}>
                Visit us in Downtown Dubai
              </h2>
              <p style={{ color: 'var(--cocoa-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                To ensure each family and puppy enjoys quiet, uninterrupted bonding time, showroom visits are arranged by appointment.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--cocoa-muted)' }}>Showroom Address</strong>
                  <p style={{ fontSize: '1.05rem', fontWeight: 600 }}>{siteConfig.address}</p>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--cocoa-muted)' }}>Telephone</strong>
                  <a href={`tel:${siteConfig.phoneRaw}`} style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--cocoa)' }}>
                    {siteConfig.phone}
                  </a>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--cocoa-muted)' }}>Official Email</strong>
                  <a href={`mailto:${siteConfig.email}`} style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--cocoa)' }}>
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                Instant WhatsApp Booking
              </a>
            </div>

            <div
              className="tp-card-sketch"
              style={{
                padding: '1.8rem',
                backgroundColor: 'var(--honey-subtle)',
                textAlign: 'center'
              }}
            >
              <h3 className="font-plush" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                Showroom Operating Hours
              </h3>
              <p style={{ color: 'var(--cocoa-muted)', fontSize: '0.95rem' }}>
                Monday – Sunday: 10:00 AM – 9:00 PM (By Appointment)
              </p>
            </div>
          </div>

          {/* Right Column: Stylized Letterform matching reference */}
          <div>
            {submitted ? (
              <div
                className="tp-card-sketch"
                style={{ padding: '3.5rem 2rem', textAlign: 'center', backgroundColor: '#ecfdf5' }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '1.8rem'
                  }}
                >
                  ✓
                </div>
                <h3 className="font-plush" style={{ fontSize: '2rem', color: '#065f46', marginBottom: '0.5rem' }}>
                  Letter Received!
                </h3>
                <p style={{ color: '#047857', maxWidth: '450px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name || 'Friend'}</strong>. Our team will review your message and contact you on{' '}
                  <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="tp-letterform">
                <span aria-hidden="true" className="tp-letter__stamp">
                  <PawIcon style={{ width: '32px', height: '32px' }} />
                </span>

                <p className="font-scrawl tp-letterform__greeting">
                  Dear TeddyPups,
                </p>

                <p className="tp-letterform__line">
                  my name is{' '}
                  <span className="tp-blank" style={{ width: '160px' }}>
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </span>
                  , and you can reach me on{' '}
                  <span className="tp-blank" style={{ width: '180px' }}>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </span>{' '}
                  or by email at{' '}
                  <span className="tp-blank" style={{ width: '200px' }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="optional"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </span>
                  .
                </p>

                <p className="tp-letterform__line">
                  I live in{' '}
                  <span className="tp-blank" style={{ width: '150px' }}>
                    <input
                      name="area"
                      placeholder="e.g. Dubai Marina"
                      value={formData.area}
                      onChange={handleChange}
                    />
                  </span>
                  , and I'm curious about{' '}
                  <span className="tp-blank" style={{ width: '220px' }}>
                    <select
                      name="puppyId"
                      value={formData.puppyId}
                      onChange={handleChange}
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="">any puppy (not sure yet)</option>
                      {puppies.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.breed}, {p.gender})
                        </option>
                      ))}
                    </select>
                  </span>
                  .
                </p>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Anything else you'd like to tell us…"
                  className="tp-letterform__note"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                <div className="tp-letterform__sign">
                  <p className="font-scrawl" style={{ fontSize: '1.4rem' }}>
                    with love, a future puppy parent
                  </p>
                  <button type="submit" disabled={loading} className="btn btn-primary">
                    {loading ? 'Sending letter…' : 'Post my letter'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
