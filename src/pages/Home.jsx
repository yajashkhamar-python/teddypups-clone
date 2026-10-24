import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { puppies } from '../data/puppies';
import { happyMoments, faqList, siteConfig } from '../data/siteData';
import PuppyCard from '../components/PuppyCard';
import { PawIcon } from '../components/Header';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const availablePups = puppies.filter(p => p.status === 'available').slice(0, 8);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="tp-page-home" style={{ paddingTop: 'var(--header-h)' }}>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(180deg, var(--sky-top) 0%, var(--sky-bottom) 100%)',
          paddingTop: 'clamp(2.5rem, 6vw, 5rem)',
          paddingBottom: 'clamp(3rem, 7vw, 6rem)',
          borderBottom: '2.5px solid var(--cocoa)',
          position: 'relative'
        }}
      >
        <div className="gutter" style={{ textAlign: 'center' }}>
          <p className="font-scrawl" style={{ color: 'var(--accent-rust)', marginBottom: '0.75rem' }}>
            welcome to your puppy journey
          </p>
          <h1
            className="font-plush"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 4.4rem)',
              color: 'var(--cocoa)',
              lineHeight: 1.1,
              maxWidth: '850px',
              margin: '0 auto 1.5rem'
            }}
          >
            Premium teacup puppies in Dubai
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
              color: 'var(--cocoa-muted)',
              maxWidth: '650px',
              margin: '0 auto 2.2rem',
              lineHeight: 1.6
            }}
          >
            Meet local puppies in our private Downtown Dubai showroom or bring home a rare breed imported directly from verified ethical international breeders.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}
          >
            <Link to="/puppies?origin=local" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}>
              Meet local puppies
            </Link>
            <Link to="/puppies?origin=imported" className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}>
              See imported puppies
            </Link>
          </div>

          {/* Quick breed selector pills */}
          <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'All Breeds', link: '/puppies' },
              { label: 'Maltipoo', link: '/puppies?breed=maltipoo' },
              { label: 'Pomeranian', link: '/puppies?breed=pomeranian' },
              { label: 'Poodle', link: '/puppies?breed=poodle' },
              { label: 'Cavapoo', link: '/puppies?breed=cavapoo' },
              { label: 'Shih Tzu', link: '/puppies?breed=shih-tzu' }
            ].map(b => (
              <Link
                key={b.label}
                to={b.link}
                className="tp-badge"
                style={{
                  fontSize: '0.9rem',
                  padding: '0.45rem 1.1rem',
                  textDecoration: 'none',
                  backgroundColor: 'var(--milk)'
                }}
              >
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the pups Section */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0', backgroundColor: 'var(--honey)' }}>
        <div className="gutter">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '2.5rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <p className="font-scrawl" style={{ color: 'var(--accent-rust)', fontSize: '1.5rem' }}>
                fluffy bundles of joy
              </p>
              <h2 className="font-plush" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--cocoa)' }}>
                Meet the pups
              </h2>
            </div>
            <Link to="/puppies" className="btn btn-secondary">
              View all 20 puppies →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '2rem'
            }}
          >
            {availablePups.map(puppy => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
          </div>
        </div>
      </section>

      {/* Two ways to meet your puppy */}
      <section
        style={{
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
          backgroundColor: 'var(--honey-warm)',
          borderTop: '2.5px solid var(--cocoa)',
          borderBottom: '2.5px solid var(--cocoa)'
        }}
      >
        <div className="gutter">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <p className="font-scrawl" style={{ color: 'var(--accent-rust)', fontSize: '1.6rem' }}>
              transparent & trusted
            </p>
            <h2 className="font-plush" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--cocoa)' }}>
              Two ways to meet your puppy
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Box 1: Downtown Showroom */}
            <div className="tp-card-sketch" style={{ padding: '2.2rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--gold)',
                  border: '2px solid var(--cocoa)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  fontSize: '1.5rem'
                }}
              >
                🏢
              </div>
              <h3 className="font-plush" style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>
                Puppies in Dubai
              </h3>
              <p style={{ color: 'var(--cocoa-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Visit our comfortable Downtown Dubai showroom by appointment. Bond with the puppies in a peaceful environment, verify their health passport, and take your puppy home the very same day.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <PawIcon /> Private viewing in Downtown Dubai
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <PawIcon /> Complete medical health check report
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <PawIcon /> Same-day pickup or UAE doorstep delivery
                </li>
              </ul>
              <Link to="/puppies?origin=local" className="btn btn-primary" style={{ width: '100%' }}>
                Browse local puppies
              </Link>
            </div>

            {/* Box 2: Imported Upon Request */}
            <div className="tp-card-sketch" style={{ padding: '2.2rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--sky-blue)',
                  border: '2px solid var(--cocoa)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  fontSize: '1.5rem'
                }}
              >
                ✈️
              </div>
              <h3 className="font-plush" style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>
                Imported for you
              </h3>
              <p style={{ color: 'var(--cocoa-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Looking for an ultra-compact Korean teacup bloodline or rare color? We manage direct VIP courier transit from certified breeders, handling all UAE MOCCAE veterinary import permits.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <PawIcon /> Pre-arrival HD video & vet inspections
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <PawIcon /> 100% compliant UAE customs & vet clearance
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <PawIcon /> Climate-controlled pet companion transit
                </li>
              </ul>
              <Link to="/puppies?origin=imported" className="btn btn-secondary" style={{ width: '100%' }}>
                See imported options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Your puppy journey (3 Steps) */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 5.5rem) 0', backgroundColor: 'var(--honey)' }}>
        <div className="gutter">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <p className="font-scrawl" style={{ color: 'var(--accent-rust)', fontSize: '1.6rem' }}>
              simple, loving process
            </p>
            <h2 className="font-plush" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--cocoa)' }}>
              Your puppy journey
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {[
              {
                step: "01",
                title: "Choose your breed",
                desc: "Explore our teacup Maltipoos, Pomeranians, Toy Poodles, and Cavapoos to select your ideal match."
              },
              {
                step: "02",
                title: "Get photos & details",
                desc: "Receive clear 4K videos, parent pedigree records, exact weights, and full medical certificates."
              },
              {
                step: "03",
                title: "Secure & safe delivery",
                desc: "Meet at our Downtown Dubai showroom or receive white-glove hand delivery straight to your UAE home."
              }
            ].map(s => (
              <div
                key={s.step}
                className="tp-card-sketch"
                style={{ padding: '2rem', textAlign: 'center' }}
              >
                <span
                  className="font-plush"
                  style={{
                    display: 'inline-block',
                    width: '46px',
                    height: '46px',
                    lineHeight: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--gold)',
                    border: '2px solid var(--cocoa)',
                    marginBottom: '1.25rem',
                    fontSize: '1.1rem'
                  }}
                >
                  {s.step}
                </span>
                <h3 className="font-plush" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--cocoa-muted)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Families Preview */}
      <section
        style={{
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
          backgroundColor: 'var(--honey-subtle)',
          borderTop: '2.5px solid var(--cocoa)',
          borderBottom: '2.5px solid var(--cocoa)'
        }}
      >
        <div className="gutter">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <p className="font-scrawl" style={{ color: 'var(--accent-rust)', fontSize: '1.6rem' }}>
              64 moments and counting
            </p>
            <h2 className="font-plush" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--cocoa)' }}>
              Happy families & puppies
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '2.5rem'
            }}
          >
            {happyMoments.slice(0, 3).map(m => (
              <div key={m.id} className="tp-card-sketch">
                <img
                  src={m.image}
                  alt={m.title}
                  style={{
                    width: '100%',
                    aspectRatio: '4 / 3',
                    objectFit: 'cover',
                    borderBottom: '2px solid var(--cocoa)'
                  }}
                  loading="lazy"
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3 className="font-plush" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                    {m.title} {m.emoji}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--cocoa-muted)', fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.5 }}>
                    "{m.quote}"
                  </p>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-rust)' }}>
                    — {m.family}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/happy-families" className="btn btn-primary" style={{ padding: '0.85rem 2.2rem' }}>
              View our wall of happy endings →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 5.5rem) 0', backgroundColor: 'var(--honey)' }}>
        <div className="gutter" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-scrawl" style={{ color: 'var(--accent-rust)', fontSize: '1.6rem' }}>
              got questions?
            </p>
            <h2 className="font-plush" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--cocoa)' }}>
              Questions, answered
            </h2>
          </div>

          <div>
            {faqList.slice(0, 5).map((faq, idx) => (
              <div key={idx} className="tp-accordion-item">
                <button
                  type="button"
                  className="tp-accordion-trigger"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={activeFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 700 }}>
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="tp-accordion-content">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/faq" className="btn btn-secondary">
              See all frequently asked questions →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          padding: 'clamp(3.5rem, 6vw, 5rem) 0',
          backgroundColor: 'var(--gold)',
          borderTop: '2.5px solid var(--cocoa)',
          textAlign: 'center'
        }}
      >
        <div className="gutter">
          <h2
            className="font-plush"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', color: 'var(--cocoa)', marginBottom: '1rem' }}
          >
            Ready to meet your new best friend?
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--cocoa-light)',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: 1.6
            }}
          >
            Send us a message on WhatsApp or visit our Downtown Dubai showroom today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '0.9rem 2.2rem' }}
            >
              WhatsApp us now
            </a>
            <Link to="/contact" className="btn btn-dark" style={{ padding: '0.9rem 2.2rem' }}>
              Schedule a visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
