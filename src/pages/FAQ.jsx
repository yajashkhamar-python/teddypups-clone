import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqList, siteConfig } from '../data/siteData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
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
            everything you need to know
          </p>
          <h1 className="font-plush" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: 'var(--cocoa)', marginBottom: '1.2rem' }}>
            Questions & answers
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--cocoa-muted)', lineHeight: 1.6 }}>
            Here are answers to the most common questions our families ask about adoption, health warranties, showroom visits, and deliveries.
          </p>
        </div>
      </div>

      {/* FAQ List */}
      <div className="gutter" style={{ padding: '4rem 1rem 5rem', maxWidth: '860px' }}>
        <div>
          {faqList.map((item, index) => (
            <div key={index} className="tp-accordion-item">
              <button
                type="button"
                className="tp-accordion-trigger"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.q}</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="tp-accordion-content">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div
          className="tp-card-sketch"
          style={{
            marginTop: '4rem',
            padding: '2.5rem',
            textAlign: 'center',
            backgroundColor: 'var(--honey-subtle)'
          }}
        >
          <h2 className="font-plush" style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>
            Have a question not listed here?
          </h2>
          <p style={{ color: 'var(--cocoa-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Our team is always happy to answer specific inquiries about current litter availability, weights, or grooming tips.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Ask on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Send us an inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
