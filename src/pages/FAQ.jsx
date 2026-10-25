import React, { useState, useMemo } from 'react';
import { faqList, siteConfig } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const NOTE_STYLES = [
  { tilt: '-1.6deg', pin: 'var(--color-toffee)' },
  { tilt: '1.2deg', pin: 'var(--color-sky-deep)' },
  { tilt: '-0.8deg', pin: '#d9a13c' },
  { tilt: '1.8deg', pin: '#c45a6a' },
  { tilt: '-1.2deg', pin: 'var(--color-toffee)' },
  { tilt: '0.7deg', pin: 'var(--color-sky-deep)' },
  { tilt: '-1.9deg', pin: '#d9a13c' },
  { tilt: '1.4deg', pin: '#c45a6a' },
  { tilt: '-1.6deg', pin: 'var(--color-toffee)' }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState('');

  useScrollReveal([search]);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const filteredFaqs = useMemo(() => {
    if (!search.trim()) return faqList.map((item, idx) => ({ ...item, originalIndex: idx }));
    const q = search.toLowerCase();
    return faqList
      .map((item, idx) => ({ ...item, originalIndex: idx }))
      .filter(item => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q));
  }, [search]);

  return (
    <div className="tp-page" data-page="faq">
      <section
        data-pup-scene="true"
        data-tone="dark"
        className="tp-scene tp-faqroom overflow-hidden"
        style={{ '--sky-top': '#a95e32', '--sky-bottom': '#331c11' }}
        aria-labelledby="faq-title"
      >
        <div className="gutter relative mx-auto max-w-[110rem] pb-24 pt-10 md:pt-16">
          <header className="max-w-4xl">
            <h1 id="faq-title" className="font-plush text-giant">
              Questions &amp; answers
            </h1>
            <p className="text-lede mt-6 max-w-[52ch] text-[var(--ink-soft)]">
              Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7.
            </p>
          </header>

          <div className="mt-12 md:mt-16">
            <div className="tp-notes" data-open={openIndex !== null ? 'true' : undefined}>
              {/* Sidebar search */}
              <aside className="tp-notes__side" aria-label="Find a question">
                <label htmlFor="faq-search" className="font-scrawl tp-notes__label">
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

                <p className="tp-notes__count" aria-live="polite">
                  {filteredFaqs.length} note{filteredFaqs.length === 1 ? '' : 's'} on the board
                </p>

                <div className="tp-notes__teddy">
                  <span aria-hidden="true" className="tp-notes__bubble font-plush">
                    <span className="tp-notes__q">?</span>
                    <span className="tp-notes__a">!</span>
                  </span>
                  <div className="pup-buddy" data-facing="right" data-live="">
                    <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, reading the notes" focusable="false" style={{ overflow: 'visible' }}>
                      <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
                        <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: 'fill-box', transformOrigin: 'center center' }}></ellipse>
                        <g data-p="body" transform="translate(0 -1.91) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" opacity="1">
                          <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="0">
                            <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352"></path>
                            <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none"></path>
                            <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none"></path>
                          </g>
                          <g data-p="ff" transform="translate(168 192) rotate(24)">
                            <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352"></path>
                            <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none"></path>
                            <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none"></path>
                          </g>
                          <g data-p="tail" transform="rotate(24.88 84 150)">
                            <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none"></path>
                            <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round"></path>
                            <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round"></path>
                          </g>
                          <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="0">
                            <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b"></path>
                            <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none"></path>
                            <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none"></path>
                          </g>
                          <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round"></path>
                          <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round"></path>
                          <g data-p="fn" transform="translate(186 194) rotate(24)">
                            <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b"></path>
                            <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none"></path>
                            <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none"></path>
                          </g>
                        </g>
                        <g data-p="haunch" opacity="1" transform="translate(0 1.44)">
                          <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round"></path>
                          <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round"></path>
                          <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none"></path>
                        </g>
                        <g data-p="head" transform="translate(-10 -5.87) rotate(-9.99 212 100)">
                          <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"></path>
                          <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round"></path>
                          <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 174 82)"></path>
                          <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 250 82)"></path>
                          <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round"></path>
                          <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"></path>
                          <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4"></path>
                          <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85"></circle>
                          <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85"></circle>
                          <g data-p="eyes" transform="translate(0 0)">
                            <g data-p="open" opacity="1">
                              <g data-p="blink" transform="translate(0 0) scale(1 1)">
                                <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e"></ellipse>
                                <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e"></ellipse>
                                <circle cx="196.6" cy="94.6" r="2.7" fill="#fff"></circle>
                                <circle cx="232.6" cy="94.6" r="2.7" fill="#fff"></circle>
                                <circle cx="192" cy="101.2" r="1.2" fill="#fff"></circle>
                                <circle cx="228" cy="101.2" r="1.2" fill="#fff"></circle>
                              </g>
                            </g>
                          </g>
                          <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0"></path>
                          <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0"></path>
                          <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e"></path>
                          <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none"></path>
                          <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1"></path>
                          <g data-p="mouth" opacity="0">
                            <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round"></path>
                            <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c"></path>
                          </g>
                        </g>
                        <g data-p="ledge" opacity="0">
                          <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round"></path>
                          <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none"></path>
                        </g>
                      </g>
                    </svg>
                    <span aria-hidden="true" className="pup-bubble" data-show="false"></span>
                  </div>
                </div>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp tp-notes__ask"
                >
                  Ask your own question
                </a>
              </aside>

              {/* Sticky Board with Notes */}
              <div className="tp-notes__board">
                <ul className="tp-notes__list">
                  {filteredFaqs.map((item, index) => {
                    const isOpen = openIndex === item.originalIndex;
                    const styleInfo = NOTE_STYLES[item.originalIndex % NOTE_STYLES.length];
                    return (
                      <li
                        key={item.originalIndex}
                        className="tp-note"
                        data-reveal="true"
                        data-unfolded={isOpen ? 'true' : undefined}
                        style={{
                          '--tilt': styleInfo.tilt,
                          '--pin': styleInfo.pin,
                          '--i': index
                        }}
                      >
                        <span aria-hidden="true" className="tp-note__pin"></span>
                        <h2 className="tp-note__q" style={{ margin: 0 }}>
                          <button
                            type="button"
                            onClick={() => toggle(item.originalIndex)}
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
                  {filteredFaqs.length === 0 && (
                    <li className="tp-note tp-note--empty">
                      <p className="font-plush-text text-center text-lg text-cocoa">
                        No questions found matching &ldquo;{search}&rdquo;. Try another search or ask us directly on WhatsApp!
                      </p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
