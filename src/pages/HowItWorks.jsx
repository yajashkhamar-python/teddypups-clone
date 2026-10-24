import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteData';
import { PawIcon } from '../components/Header';

export default function HowItWorks() {
  return (
    <div style={{ paddingTop: 'var(--header-h)', backgroundColor: 'var(--honey)', minHeight: '85vh' }}>
      {/* Hero */}
      <div
        style={{
          padding: 'clamp(2.5rem, 5vw, 4.5rem) 0 2.5rem',
          backgroundColor: 'var(--honey-warm)',
          borderBottom: '2.5px solid var(--cocoa)'
        }}
      >
        <div className="gutter" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <p className="font-scrawl" style={{ color: 'var(--accent-rust)', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
            clear & transparent
          </p>
          <h1 className="font-plush" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: 'var(--cocoa)', marginBottom: '1.2rem' }}>
            How it works
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--cocoa-muted)', lineHeight: 1.6 }}>
            Whether you choose a puppy ready today in Downtown Dubai or request a rare teacup import from our partner breeders, we guarantee honesty, safety, and full veterinary compliance.
          </p>
        </div>
      </div>

      <div className="gutter" style={{ padding: '4rem 1rem 5rem' }}>
        {/* Two Ways Section */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 className="font-plush" style={{ fontSize: '2.2rem', color: 'var(--cocoa)' }}>
              Two ways home
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {/* Method 1 */}
            <div className="tp-card-sketch" style={{ padding: '2.5rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--gold)',
                  border: '2px solid var(--cocoa)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  marginBottom: '1rem'
                }}
              >
                WAY 1
              </span>
              <h3 className="font-plush" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>
                Meet your puppy in person
              </h3>
              <p style={{ color: 'var(--cocoa-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                For puppies currently residing in Dubai, you can schedule a private visit at our Downtown Dubai showroom. You'll spend unhurried time interacting with the puppy, inspect their veterinary health card, and complete adoption documentation on site.
              </p>
              <p style={{ fontWeight: 700, color: 'var(--accent-rust)' }}>
                ✓ Same-day collection or evening doorstep delivery in UAE.
              </p>
            </div>

            {/* Method 2 */}
            <div className="tp-card-sketch" style={{ padding: '2.5rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--sky-blue)',
                  border: '2px solid var(--cocoa)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  marginBottom: '1rem'
                }}
              >
                WAY 2
              </span>
              <h3 className="font-plush" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>
                Order upon request
              </h3>
              <p style={{ color: 'var(--cocoa-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Looking for a specific micro teacup size, rare coat shade, or certified Korean lineage? We partner with the world's most prestigious ethical breeders. We arrange pre-shipment veterinary health screening, MOCCAE government import clearances, and dedicated cabin transit.
              </p>
              <p style={{ fontWeight: 700, color: 'var(--accent-rust)' }}>
                ✓ Full video verification & health certificates before reservation.
              </p>
            </div>
          </div>
        </div>

        {/* Our Premium Puppy Promise */}
        <div
          id="delivery"
          className="tp-card-sketch"
          style={{
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            backgroundColor: 'var(--honey-subtle)',
            marginBottom: '4.5rem'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            <p className="font-scrawl" style={{ color: 'var(--accent-rust)', fontSize: '1.5rem' }}>
              our strict standard
            </p>
            <h2 className="font-plush" style={{ fontSize: '2.2rem', color: 'var(--cocoa)' }}>
              Our premium puppy promise
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem'
            }}
          >
            {[
              {
                title: "100% Veterinary Certified",
                desc: "Each puppy receives rigorous multi-point medical screenings, cardiac tests, and full preventative vaccinations before handover."
              },
              {
                title: "Microchipped & Registered",
                desc: "Standard ISO microchip implanted and documented for immediate registration with Dubai Municipality and international registries."
              },
              {
                title: "Legal UAE Import Permits",
                desc: "Full compliance with UAE Ministry of Climate Change and Environment import regulations and customs quarantine clearances."
              },
              {
                title: "Post-Adoption Care",
                desc: "Direct access to our dedicated team via WhatsApp for dietary recommendations, crate acclimation, and wellness support."
              }
            ].map((p, idx) => (
              <div key={idx} style={{ borderLeft: '3px solid var(--gold-dark)', paddingLeft: '1.25rem' }}>
                <h3 className="font-plush" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--cocoa-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery & Collection Details */}
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="font-plush" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Delivery & collection across UAE
          </h2>
          <p style={{ color: 'var(--cocoa-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
            We provide convenient collection at our Downtown Dubai showroom or hand-delivered VIP courier service to your residence in Dubai, Abu Dhabi, Sharjah, and across the Emirates.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/puppies" className="btn btn-primary">
              Browse available puppies
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact our team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
