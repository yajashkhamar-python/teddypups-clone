import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { faqList, siteConfig } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState('');

  useScrollReveal([search]);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const filteredFaqs = useMemo(() => {
    if (!search.trim()) return faqList;
    const q = search.toLowerCase();
    return faqList.filter(item => 
      item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="tp-page" data-page="faq" style={{ paddingTop: 'var(--header-h)', backgroundColor: '#fffdf8', minHeight: '85vh' }}>
      <section data-pup-scene="true" data-tone="dark" className="tp-scene tp-faqroom overflow-hidden" style={{ '--sky-top': '#a95e32', '--sky-bottom': '#331c11', padding: 'clamp(2.5rem, 5vw, 4.5rem) 0 5rem' }} aria-labelledby="faq-title">
        <div className="gutter relative mx-auto max-w-[110rem]">
          <header className="max-w-4xl" style={{ marginBottom: '3rem' }}>
            <h1 id="faq-title" className="font-plush text-giant" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4rem)', color: 'var(--color-cocoa)', marginBottom: '1rem' }}>
              Questions & answers
            </h1>
            <p className="text-lede" style={{ fontSize: '1.2rem', color: 'var(--color-cocoa-soft)', maxWidth: '54ch' }}>
              Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7.
            </p>
          </header>

          <div className="tp-notes">
            {/* Sidebar search */}
            <aside className="tp-notes__side" aria-label="Find a question">
              <label htmlFor="faq-search" className="font-scrawl tp-notes__label" style={{ fontSize: '1.25rem', color: 'var(--color-toffee-ink)' }}>
                sniff out a question
              </label>
              <div className="tp-notes__search">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="tp-notes__lens">
                  <circle cx="10.5" cy="10.5" r="6.5"></circle>
                  <path d="m15.5 15.5 5 5"></path>
                </svg>
                <input
                  id="faq-search"
                  type="search"
                  placeholder="delivery, Korea, vaccinated…"
                  autoComplete="off"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <p className="tp-notes__count" aria-live="polite" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-cocoa-soft)' }}>
                {filteredFaqs.length} note{filteredFaqs.length === 1 ? '' : 's'} on the board
              </p>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp tp-notes__ask"
                style={{ marginTop: '1.5rem' }}
              >
                Ask your own question
              </a>
            </aside>

            {/* Sticky Board with Notes */}
            <div className="tp-notes__board">
              <ul className="tp-notes__list">
                {filteredFaqs.map((item, index) => {
                  const isOpen = openIndex === index;
                  const tilt = index % 2 === 0 ? '-1.6deg' : '1.2deg';
                  const pin = index % 2 === 0 ? 'var(--color-toffee)' : 'var(--color-sky-deep)';
                  return (
                    <li
                      key={index}
                      className="tp-note"
                      data-reveal="true"
                      data-unfolded={isOpen ? "true" : undefined}
                      style={{
                        '--tilt': tilt,
                        '--pin': pin,
                        '--i': index
                      }}
                    >
                      <span aria-hidden="true" className="tp-note__pin"></span>
                      <h2 className="tp-note__q" style={{ margin: 0 }}>
                        <button
                          type="button"
                          onClick={() => toggle(index)}
                          aria-expanded={isOpen}
                        >
                          <span className="font-plush-text">{item.q}</span>
                          <span aria-hidden="true" className="tp-note__chevron"></span>
                        </button>
                      </h2>
                      <div className="tp-note__answer">
                        <div className="tp-note__flap">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
