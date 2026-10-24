import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { puppies } from '../data/puppies';
import { happyMoments, faqList, siteConfig } from '../data/siteData';
import PuppyCard from '../components/PuppyCard';
import { PawIcon } from '../components/Header';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const availablePups = puppies.filter(p => p.status === 'available');

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const heroLineup = [
    {
      id: 'maltipoo-max-male',
      name: 'Max',
      breed: 'Maltipoo',
      style: { '--x': '9%', '--w': '8.6rem', '--peek': '0.62', '--tilt': '-5deg', '--i': 0 },
      image: 'https://puppy.instabizweb.com/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp'
    },
    {
      id: 'korean-teacup-maltipoo-female',
      name: 'Korean Teacup Maltipoo',
      breed: 'Korean Teacup Maltipoo',
      style: { '--x': '22.5%', '--w': '10.4rem', '--peek': '0.8', '--tilt': '3deg', '--i': 1 },
      image: 'https://puppy.instabizweb.com/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg'
    },
    {
      id: 'korean-teacup-poodle-female',
      name: 'Korean Teacup Poodle',
      breed: 'Korean Teacup Poodle',
      style: { '--x': '35%', '--w': '9.2rem', '--peek': '0.7', '--tilt': '-2deg', '--i': 2 },
      image: 'https://puppy.instabizweb.com/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg'
    },
    {
      id: 'maltipoo-cavapoo-male',
      name: 'Maltipoo & Cavapoo',
      breed: 'Maltipoo & Cavapoo',
      style: { '--x': '65%', '--w': '9.4rem', '--peek': '0.74', '--tilt': '3deg', '--i': 3 },
      image: 'https://puppy.instabizweb.com/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg'
    },
    {
      id: 'toy-poodle-male-female',
      name: 'Toy Poodle',
      breed: 'Toy Poodle',
      style: { '--x': '77.5%', '--w': '10.6rem', '--peek': '0.82', '--tilt': '-3deg', '--i': 4 },
      image: 'https://puppy.instabizweb.com/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg'
    },
    {
      id: 'maltipoo-female-2',
      name: 'Maltipoo',
      breed: 'Maltipoo',
      style: { '--x': '91%', '--w': '8.4rem', '--peek': '0.6', '--tilt': '4deg', '--i': 5 },
      image: 'https://puppy.instabizweb.com/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg'
    }
  ];

  return (
    <div className="tp-page" data-page="home">
      {/* SECTION 0: tp-hero with authentic sun, typography, peekers and quilt */}
      <section
        data-pup-scene="true"
        data-tone="light"
        className="tp-scene tp-hero"
        style={{
          '--sky-top': '#fffdf8',
          '--sky-bottom': '#fff1d8',
          '--quilt': '#fff1d8',
          paddingTop: 'calc(var(--header-h) + 2rem)'
        }}
        aria-labelledby="hero-title"
      >
        <span aria-hidden="true" className="tp-hero__sun"></span>
        <div className="tp-hero__copy gutter">
          <p className="tp-hero__note font-scrawl">
            every puppy is family
            <svg viewBox="0 0 220 24" preserveAspectRatio="none" className="tp-hero__squiggle" aria-hidden="true">
              <path d="M4 14c18-10 30 8 48-1s28-9 46 0 30 8 48-1 30-9 48 0 18 2 22 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </p>
          <h1 id="hero-title" className="tp-hero__title font-plush">
            <span className="tp-hero__line">Premium teacup</span>
            <span className="tp-hero__line tp-hero__line--2">puppies in Dubai</span>
          </h1>
          <p className="tp-hero__lede">
            Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.
          </p>
          <div className="tp-hero__actions">
            <Link className="btn btn-primary" to="/puppies">
              View available puppies
            </Link>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Enquire on WhatsApp
            </a>
          </div>

          {/* Quick breed selector pills */}
          <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
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

        {/* Peeking Puppies Lineup */}
        <div className="tp-hero__stage">
          <ul className="tp-lineup" aria-label="Some of the puppies in our showroom">
            {heroLineup.map((pup) => (
              <li key={pup.id} className="tp-lineup__seat" style={pup.style}>
                <Link
                  className="tp-lineup__pup"
                  to={`/puppies/${pup.id}`}
                  aria-label={`Meet ${pup.name}, ${pup.breed}`}
                >
                  <img
                    src={pup.image}
                    alt={pup.name}
                    className="tp-lineup__img"
                    loading="lazy"
                  />
                  <span className="tp-lineup__tag font-scrawl">{pup.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Scalloped quilt divider */}
        <svg className="tp-curtain__edge tp-curtain__edge--bottom" width="100%" height="40" preserveAspectRatio="none">
          <rect width="100%" height="40" fill="url(#tp-curtain-scallop-top)" />
        </svg>
      </section>

      {/* SECTION 1: tp-meet with featured cards */}
      <section data-pup-scene="true" className="tp-scene tp-meet" style={{ padding: 'clamp(3.5rem, 6vw, 5.5rem) 0' }}>
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
            {availablePups.slice(0, 8).map(puppy => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: tp-paths (Two ways to meet your puppy) */}
      <section
        data-pup-scene="true"
        className="tp-scene tp-paths"
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
              <Link to="/puppies?origin=local" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
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
              <Link to="/puppies?origin=imported" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                See imported options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: tp-chat (Your puppy journey) */}
      <section data-pup-scene="true" className="tp-scene tp-chat" style={{ padding: 'clamp(3.5rem, 6vw, 5.5rem) 0' }}>
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

      {/* SECTION 4: tp-passport (Why families trust TeddyPups) */}
      <section
        data-pup-scene="true"
        className="tp-scene tp-passport"
        style={{
          padding: 'clamp(3.5rem, 6vw, 5rem) 0',
          backgroundColor: 'var(--honey-subtle)',
          borderTop: '2px solid var(--cocoa)',
          borderBottom: '2px solid var(--cocoa)'
        }}
      >
        <div className="gutter">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <p className="font-scrawl" style={{ color: 'var(--accent-rust)', fontSize: '1.6rem' }}>
              peace of mind
            </p>
            <h2 className="font-plush" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--cocoa)' }}>
              Why families trust TeddyPups
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem'
            }}
          >
            {[
              {
                icon: "🩺",
                title: "Health Verified",
                desc: "Every puppy comes with complete veterinary vaccination passports, microchips, and genetic health guarantees."
              },
              {
                icon: "🏛️",
                title: "Downtown Dubai Showroom",
                desc: "Meet and bond with puppies in person in our private, hygienic boutique before making any decision."
              },
              {
                icon: "✈️",
                title: "Ethical VIP Imports",
                desc: "Direct flights with cabin pet attendants and 100% legal UAE MOCCAE import approvals."
              },
              {
                icon: "❤️",
                title: "Lifetime Support",
                desc: "Our Dubai puppy team remains available 7 days a week on WhatsApp for nutrition, care, and training advice."
              }
            ].map((item, idx) => (
              <div key={idx} className="tp-card-sketch" style={{ padding: '2rem', textAlign: 'center' }}>
                <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: '1rem' }}>{item.icon}</span>
                <h3 className="font-plush" style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--cocoa-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: tp-dusk (Happy families & puppies) */}
      <section data-pup-scene="true" className="tp-scene tp-dusk" style={{ padding: 'clamp(3.5rem, 6vw, 5.5rem) 0' }}>
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

      {/* SECTION 6: tp-night (Questions, answered) */}
      <section data-pup-scene="true" className="tp-scene tp-night" style={{ padding: 'clamp(3.5rem, 6vw, 5.5rem) 0', backgroundColor: 'var(--honey-warm)' }}>
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

      {/* SECTION 7: tp-home (Ready to meet your new best friend?) */}
      <section
        data-pup-scene="true"
        className="tp-scene tp-home"
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
