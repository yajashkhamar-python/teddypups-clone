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
      objectPosition: '53.8% 44.3%',
      image: '/pup0.webp'
    },
    {
      id: 'korean-teacup-maltipoo-female',
      name: 'Korean Teacup Maltipoo',
      breed: 'Korean Teacup Maltipoo',
      style: { '--x': '22.5%', '--w': '10.4rem', '--peek': '0.8', '--tilt': '3deg', '--i': 1 },
      objectPosition: '52.5% 42.6%',
      image: '/pup1.jpg'
    },
    {
      id: 'korean-teacup-poodle-female',
      name: 'Korean Teacup Poodle',
      breed: 'Korean Teacup Poodle',
      style: { '--x': '35%', '--w': '9.2rem', '--peek': '0.7', '--tilt': '-2deg', '--i': 2 },
      objectPosition: '54.5% 45.7%',
      image: '/pup2.jpg'
    },
    {
      id: 'maltipoo-cavapoo-male',
      name: 'Maltipoo & Cavapoo',
      breed: 'Maltipoo & Cavapoo',
      style: { '--x': '65%', '--w': '9.4rem', '--peek': '0.74', '--tilt': '3deg', '--i': 3 },
      objectPosition: '44.7% 29.5%',
      image: '/pup3.jpg'
    },
    {
      id: 'toy-poodle-male-female',
      name: 'Toy Poodle',
      breed: 'Toy Poodle',
      style: { '--x': '77.5%', '--w': '10.6rem', '--peek': '0.82', '--tilt': '-3deg', '--i': 4 },
      objectPosition: '65.4% 44.7%',
      image: '/pup4.jpg'
    },
    {
      id: 'maltipoo-female-2',
      name: 'Maltipoo',
      breed: 'Maltipoo',
      style: { '--x': '91%', '--w': '8.4rem', '--peek': '0.6', '--tilt': '4deg', '--i': 5 },
      objectPosition: '64.6% 42.3%',
      image: '/pup5.jpg'
    }
  ];

  return (
    <div className="tp-page" data-page="home">
      {/* SECTION 0: tp-hero matching reference exactly */}
      <section
        data-pup-scene="true"
        data-tone="light"
        className="tp-scene tp-hero"
        style={{
          '--sky-top': '#fffdf8',
          '--sky-bottom': '#fff1d8',
          '--quilt': '#fff1d8'
        }}
        aria-labelledby="hero-title"
      >
        <span aria-hidden="true" className="tp-hero__sun"></span>
        <div className="tp-hero__copy gutter">
          <p className="tp-hero__note font-scrawl">
            every puppy is family
            <svg viewBox="0 0 220 24" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-toffee" aria-hidden="true">
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
              className="btn btn-ghost"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>

        {/* Hero Stage with Lineup & Central Teddy Illustration */}
        <div className="tp-hero__stage">
          <ul className="tp-lineup" aria-label="Some of the puppies in our showroom">
            {heroLineup.map((pup) => (
              <li key={pup.id} className="tp-lineup__seat" style={pup.style}>
                <Link
                  className="tp-lineup__pup"
                  data-pup-friend="true"
                  aria-label={`Meet ${pup.name}, ${pup.breed}`}
                  to={`/puppies/${pup.id}`}
                >
                  <span className="tp-lineup__photo">
                    <img
                      alt={`${pup.name}, puppy`}
                      loading="eager"
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: 'cover',
                        objectPosition: pup.objectPosition
                      }}
                      src={pup.image}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <ul aria-hidden="true" className="tp-lineup tp-lineup--tags">
            {heroLineup.map((pup) => (
              <li key={pup.id} className="tp-lineup__seat" style={pup.style}>
                <span className="tp-lineup__ghost">
                  <span className="tp-lineup__name font-scrawl">{pup.name}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Central Teddy Illustration Peeking over Quilt */}
          <div
            data-pup-stop="true"
            data-pose="peek"
            data-facing="right"
            data-act="peekaboo"
            data-behind="true"
            data-lane="true"
            className="pup-stop tp-hero__teddy"
          >
            <div className="pup-buddy" data-facing="right">
              <svg viewBox="0 0 300 240" style={{ overflow: 'visible' }} role="img" aria-label="Teddy, the TeddyPups puppy, peeking over the quilt" focusable="false">
                <g data-p="root">
                  <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0" transform="translate(0 0) scale(1 1)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
                  <g data-p="head" transform="translate(0 4) rotate(0 212 100)">
                    <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(-6 174 82)" />
                    <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(6 250 82)" />
                    <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
                    <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                    <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                    <g data-p="eyes">
                      <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                      <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                      <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                      <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                      <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                      <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                    </g>
                    <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
                    <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" />
                  </g>
                  {/* Paws on Ledge */}
                  <g data-p="ledge">
                    <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                  </g>
                </g>
              </svg>
            </div>
          </div>

          {/* Scalloped Quilt Base */}
          <div aria-hidden="true" className="tp-quilt">
            <svg className="tp-quilt__edge" width="100%" height="40" preserveAspectRatio="none">
              <defs>
                <pattern id="tp-scallop" width="76" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40V27A38 25 0 0 1 76 27V40Z" style={{ fill: 'var(--quilt)' }} />
                  <path d="M0 27A38 25 0 0 1 76 27" fill="none" stroke="#2a170e" strokeWidth="3" />
                  <path d="M11 33A27 19 0 0 1 65 33" fill="none" stroke="#2a170e" strokeWidth="1.6" strokeDasharray="3.5 5.5" strokeLinecap="round" opacity=".42" />
                </pattern>
              </defs>
              <rect width="100%" height="40" fill="url(#tp-scallop)" />
            </svg>
          </div>
        </div>
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
              <p className="font-scrawl" style={{ color: 'var(--color-toffee-ink)', fontSize: '1.5rem' }}>
                fluffy bundles of joy
              </p>
              <h2 className="font-plush" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', color: 'var(--color-cocoa)' }}>
                Meet the pups
              </h2>
            </div>
            <Link to="/puppies" className="btn btn-ghost">
              View all 20 puppies →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2.2rem'
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
          padding: 'clamp(4rem, 7vw, 6rem) 0',
          backgroundColor: 'var(--color-honey-soft)',
          borderTop: '3px solid var(--color-cocoa)',
          borderBottom: '3px solid var(--color-cocoa)'
        }}
      >
        <div className="gutter">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <p className="font-scrawl" style={{ color: 'var(--color-toffee-ink)', fontSize: '1.6rem' }}>
              transparent & trusted
            </p>
            <h2 className="font-plush" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', color: 'var(--color-cocoa)' }}>
              Two ways to meet your puppy
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {/* Box 1: Downtown Showroom */}
            <div className="tp-board" style={{ padding: '2.5rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-honey)',
                  border: '3px solid var(--color-cocoa)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  fontSize: '1.6rem'
                }}
              >
                🏢
              </div>
              <h3 className="font-plush" style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>
                Puppies in Dubai
              </h3>
              <p style={{ color: 'var(--color-cocoa-soft)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Visit our comfortable Downtown Dubai showroom by appointment. Bond with the puppies in a peaceful environment, verify their health passport, and take your puppy home the very same day.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 650 }}>
                  <PawIcon className="size-4 text-toffee" /> Private viewing in Downtown Dubai
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 650 }}>
                  <PawIcon className="size-4 text-toffee" /> Complete medical health check report
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 650 }}>
                  <PawIcon className="size-4 text-toffee" /> Same-day pickup or UAE doorstep delivery
                </li>
              </ul>
              <Link to="/puppies?origin=local" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Browse local puppies
              </Link>
            </div>

            {/* Box 2: Imported Upon Request */}
            <div className="tp-board" style={{ padding: '2.5rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-sky)',
                  border: '3px solid var(--color-cocoa)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  fontSize: '1.6rem'
                }}
              >
                ✈️
              </div>
              <h3 className="font-plush" style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>
                Imported for you
              </h3>
              <p style={{ color: 'var(--color-cocoa-soft)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Looking for an ultra-compact Korean teacup bloodline or rare color? We manage direct VIP courier transit from certified breeders, handling all UAE MOCCAE veterinary import permits.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 650 }}>
                  <PawIcon className="size-4 text-toffee" /> Pre-arrival HD video & vet inspections
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 650 }}>
                  <PawIcon className="size-4 text-toffee" /> 100% compliant UAE customs & vet clearance
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 650 }}>
                  <PawIcon className="size-4 text-toffee" /> Climate-controlled pet companion transit
                </li>
              </ul>
              <Link to="/puppies?origin=imported" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
                See imported options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: tp-chat (Your puppy journey) */}
      <section data-pup-scene="true" className="tp-scene tp-chat" style={{ padding: 'clamp(4rem, 7vw, 6rem) 0' }}>
        <div className="gutter">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <p className="font-scrawl" style={{ color: 'var(--color-toffee-ink)', fontSize: '1.6rem' }}>
              simple, loving process
            </p>
            <h2 className="font-plush" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', color: 'var(--color-cocoa)' }}>
              Your puppy journey
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem'
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
                className="tp-board"
                style={{ padding: '2.2rem', textAlign: 'center' }}
              >
                <span
                  className="font-plush"
                  style={{
                    display: 'inline-block',
                    width: '52px',
                    height: '52px',
                    lineHeight: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-honey)',
                    border: '3px solid var(--color-cocoa)',
                    marginBottom: '1.25rem',
                    fontSize: '1.2rem'
                  }}
                >
                  {s.step}
                </span>
                <h3 className="font-plush" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--color-cocoa-soft)', lineHeight: 1.6 }}>{s.desc}</p>
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
          padding: 'clamp(4rem, 7vw, 6rem) 0',
          backgroundColor: '#fffdf8',
          borderTop: '3px solid var(--color-cocoa)',
          borderBottom: '3px solid var(--color-cocoa)'
        }}
      >
        <div className="gutter">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <p className="font-scrawl" style={{ color: 'var(--color-toffee-ink)', fontSize: '1.6rem' }}>
              peace of mind
            </p>
            <h2 className="font-plush" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', color: 'var(--color-cocoa)' }}>
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
              <div key={idx} className="tp-board" style={{ padding: '2rem', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{item.icon}</span>
                <h3 className="font-plush" style={{ fontSize: '1.35rem', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-cocoa-soft)', lineHeight: 1.6, fontSize: '0.98rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: tp-dusk (Happy families & puppies) */}
      <section data-pup-scene="true" className="tp-scene tp-dusk" style={{ padding: 'clamp(4rem, 7vw, 6rem) 0' }}>
        <div className="gutter">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <p className="font-scrawl" style={{ color: 'var(--color-toffee-ink)', fontSize: '1.6rem' }}>
              64 moments and counting
            </p>
            <h2 className="font-plush" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', color: 'var(--color-cocoa)' }}>
              Happy families & puppies
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              marginBottom: '3rem'
            }}
          >
            {happyMoments.slice(0, 3).map(m => (
              <div key={m.id} className="tp-board" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src={m.image}
                  alt={m.title}
                  style={{
                    width: '100%',
                    aspectRatio: '4 / 3',
                    objectFit: 'cover',
                    borderBottom: '3px solid var(--color-cocoa)'
                  }}
                  loading="lazy"
                />
                <div style={{ padding: '1.75rem' }}>
                  <h3 className="font-plush" style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                    {m.title} {m.emoji}
                  </h3>
                  <p style={{ fontSize: '0.98rem', color: 'var(--color-cocoa-soft)', fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.5 }}>
                    "{m.quote}"
                  </p>
                  <p style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-toffee-deep)' }}>
                    — {m.family}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/happy-families" className="btn btn-primary" style={{ padding: '0.9rem 2.4rem' }}>
              View our wall of happy endings →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: tp-night (Questions, answered) */}
      <section data-pup-scene="true" className="tp-scene tp-night" style={{ padding: 'clamp(4rem, 7vw, 6rem) 0', backgroundColor: 'var(--color-honey-soft)' }}>
        <div className="gutter" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-scrawl" style={{ color: 'var(--color-toffee-ink)', fontSize: '1.6rem' }}>
              got questions?
            </p>
            <h2 className="font-plush" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', color: 'var(--color-cocoa)' }}>
              Questions, answered
            </h2>
          </div>

          <div>
            {faqList.slice(0, 5).map((faq, idx) => (
              <div key={idx} className="tp-board" style={{ marginBottom: '1rem', padding: '1.25rem 1.6rem' }}>
                <button
                  type="button"
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--color-cocoa)',
                    cursor: 'pointer',
                    gap: '1rem',
                    fontFamily: 'inherit'
                  }}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={activeFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1.5px dashed rgba(42, 23, 14, 0.2)', color: 'var(--color-cocoa-soft)', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/faq" className="btn btn-ghost">
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
          padding: 'clamp(4rem, 7vw, 6rem) 0',
          backgroundColor: 'var(--color-honey)',
          borderTop: '3px solid var(--color-cocoa)',
          textAlign: 'center'
        }}
      >
        <div className="gutter">
          <h2
            className="font-plush"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)', color: 'var(--color-cocoa)', marginBottom: '1.2rem' }}
          >
            Ready to meet your new best friend?
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--color-cocoa)',
              maxWidth: '620px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6
            }}
          >
            Send us a message on WhatsApp or visit our Downtown Dubai showroom today.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '1rem 2.5rem' }}
            >
              WhatsApp us now
            </a>
            <Link to="/contact" className="btn btn-ghost" style={{ padding: '1rem 2.5rem' }}>
              Schedule a visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
