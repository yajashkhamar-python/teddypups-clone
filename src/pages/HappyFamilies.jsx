import React, { useState, useEffect, useRef } from 'react';
import { happyFamilies } from '../data/happyFamilies';

export default function HappyFamilies() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const dialogRef = useRef(null);

  // Keyboard navigation for photo lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextPhoto();
      } else if (e.key === 'ArrowLeft') {
        prevPhoto();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex]);

  const openModal = (idx) => {
    setActivePhotoIndex(idx);
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
    setActivePhotoIndex(null);
  };

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % happyFamilies.length);
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + happyFamilies.length) % happyFamilies.length);
  };

  const currentPhoto = activePhotoIndex !== null ? happyFamilies[activePhotoIndex] : null;

  return (
    <div data-page="families" className="tp-page">
      <section aria-labelledby="families-title" className="tp-memories">
        <div className="gutter mx-auto max-w-[110rem] pb-24 pt-10 md:pt-16">
          {/* Header Banner */}
          <div className="tp-memories__head">
            <div>
              <p className="font-scrawl text-lg text-toffee-ink" data-reveal="true">
                our wall of happy endings
              </p>
              <h1 id="families-title" className="font-plush text-giant tp-memories__title" data-reveal="true">
                Happy families
                <svg viewBox="0 0 48 44" className="tp-memories__heart" aria-hidden="true">
                  <path
                    d="M24 40C10 30 4 22 4 14.5 4 8.7 8.6 4 14.3 4c4.1 0 7.6 2.4 9.7 6 2.1-3.6 5.6-6 9.7-6C39.4 4 44 8.7 44 14.5 44 22 38 30 24 40z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h1>
              <p className="text-lede mt-6 max-w-[50ch] text-cocoa-soft" data-reveal="true">
                Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.
              </p>
              <p className="font-scrawl mt-5 text-lg text-toffee-ink" data-reveal="true">
                64 moments and counting
              </p>
            </div>

            <figure className="tp-memories__note" data-reveal="true">
              <span aria-hidden="true" className="tp-tape tp-tape--center" style={{ '--tape': '#cfe5f6' }}></span>
              <blockquote className="font-plush-text">
                “TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.”
              </blockquote>
              <figcaption className="font-scrawl">
                Sarah M., Dubai, UAE
              </figcaption>
            </figure>
          </div>

          {/* Masonry Polaroid Photo Wall */}
          <div className="mt-16 md:mt-20">
            <div>
              <ul className="tp-wall" aria-label="Photos from TeddyPups families">
                {happyFamilies.map((item, idx) => {
                  const delay = `${(idx % 4) * 60}ms`;
                  return (
                    <li
                      key={item.index}
                      className="tp-wall__item"
                      data-reveal="true"
                      style={{ '--d': delay }}
                    >
                      <button
                        type="button"
                        className="tp-wall__print"
                        aria-label={`Open photo ${item.index} of 64`}
                        onClick={() => openModal(idx)}
                      >
                        <span
                          className="tp-polaroid"
                          style={{
                            '--tilt': item.tilt,
                            '--tape': item.tapeColor,
                            '--i': idx
                          }}
                        >
                          {item.tapeClass === 'tp-tape--tl' ? (
                            <>
                              <span aria-hidden="true" className="tp-tape tp-tape--tl" />
                              <span aria-hidden="true" className="tp-tape tp-tape--tr" />
                            </>
                          ) : (
                            <span aria-hidden="true" className={`tp-tape ${item.tapeClass}`} />
                          )}

                          <span className="tp-polaroid__photo">
                            <img
                              alt={item.caption || item.alt || 'A happy TeddyPups family with their new puppy'}
                              loading={idx < 8 ? 'eager' : 'lazy'}
                              decoding="async"
                              src={item.localSrc}
                              onError={(e) => {
                                // Fallback to full source if local image fails
                                if (e.currentTarget.src !== item.fullSrc) {
                                  e.currentTarget.src = item.fullSrc;
                                }
                              }}
                              style={{
                                color: 'transparent',
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                objectFit: 'cover'
                              }}
                            />
                          </span>

                          <span className="tp-polaroid__caption font-scrawl">
                            {item.caption || ''}
                          </span>
                        </span>

                        {/* Interactive paw print stamp icon */}
                        <svg viewBox="0 0 64 64" className="tp-wall__paw" aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                        </svg>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Photo Viewer Modal Dialog matching reference */}
            <dialog
              ref={dialogRef}
              aria-label="Photo viewer"
              className="m-0 h-dvh max-h-none w-screen max-w-none bg-cocoa/95 p-0 text-milk backdrop:bg-cocoa/70"
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                border: 'none',
                maxWidth: 'none',
                maxHeight: 'none',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(42, 23, 14, 0.96)',
                color: '#fffdf8'
              }}
              onClose={() => setActivePhotoIndex(null)}
              onClick={(e) => {
                if (e.target === dialogRef.current) {
                  closeModal();
                }
              }}
            >
              {currentPhoto && (
                <div className="flex h-full flex-col" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Top Bar */}
                  <div
                    className="flex items-center justify-between gap-4 px-4 py-3"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1rem 1.5rem',
                      borderBottom: '1px solid rgba(255, 253, 248, 0.15)'
                    }}
                  >
                    <p className="font-scrawl text-lg" style={{ margin: 0, fontSize: '1.25rem' }}>
                      {activePhotoIndex + 1} / {happyFamilies.length}
                      {currentPhoto.caption ? ` — ${currentPhoto.caption}` : ''}
                    </p>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="h-11 rounded-full bg-milk px-5 font-semibold text-cocoa"
                      style={{
                        height: '2.75rem',
                        borderRadius: '9999px',
                        backgroundColor: '#fffdf8',
                        color: '#2a170e',
                        padding: '0 1.5rem',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Close
                    </button>
                  </div>

                  {/* Photo Display */}
                  <div
                    className="relative flex-1 overflow-hidden"
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1rem',
                      overflow: 'hidden'
                    }}
                  >
                    <img
                      src={currentPhoto.localSrc}
                      alt={currentPhoto.caption || currentPhoto.alt}
                      style={{
                        maxWidth: '90vw',
                        maxHeight: '72vh',
                        objectFit: 'contain',
                        borderRadius: '0.5rem',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                      }}
                    />
                  </div>

                  {/* Navigation Footer */}
                  <div
                    className="flex justify-center gap-3 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '1rem',
                      padding: '1rem 1.5rem 1.5rem',
                      borderTop: '1px solid rgba(255, 253, 248, 0.15)'
                    }}
                  >
                    <button
                      type="button"
                      onClick={prevPhoto}
                      className="h-12 rounded-full border-2 border-milk px-6 font-semibold"
                      style={{
                        height: '3rem',
                        borderRadius: '9999px',
                        border: '2px solid #fffdf8',
                        color: '#fffdf8',
                        backgroundColor: 'transparent',
                        padding: '0 1.75rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={nextPhoto}
                      className="h-12 rounded-full bg-honey px-6 font-semibold text-cocoa"
                      style={{
                        height: '3rem',
                        borderRadius: '9999px',
                        backgroundColor: '#f7d088',
                        color: '#2a170e',
                        border: 'none',
                        padding: '0 1.75rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </dialog>
          </div>

          {/* Bottom Mascot Illustration */}
          <div className="tp-memories__foot">
            <div className="pup-buddy w-36 md:w-44" data-facing="left" style={{ width: '10rem' }}>
              <svg viewBox="0 0 300 240" style={{ overflow: 'visible' }} role="img" aria-label="Teddy, admiring the wall" focusable="false">
                <g data-p="root" transform="translate(300 0) scale(-1 1)">
                  <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
                  <g data-p="body" transform="translate(0 -2) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" opacity="1">
                    <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="0">
                      <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
                      <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    </g>
                    <g data-p="ff" transform="translate(168 192) rotate(24)">
                      <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
                      <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    </g>
                    <g data-p="tail" transform="rotate(34 84 150)">
                      <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
                      <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    </g>
                    <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="0">
                      <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
                      <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    </g>
                    <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <g data-p="fn" transform="translate(186 194) rotate(24)">
                      <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
                      <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    </g>
                  </g>
                  <g data-p="haunch" opacity="1" transform="translate(0 1.44)">
                    <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                  </g>
                  <g data-p="head" transform="translate(-10 -6) rotate(0 212 100)">
                    <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 174 82)" />
                    <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 250 82)" />
                    <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
                    <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                    <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                    <g data-p="eyes" transform="translate(0 0)">
                      <g data-p="open" opacity="1">
                        <g data-p="blink" transform="translate(0 0) scale(1 1)">
                          <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                          <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                          <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                          <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                          <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                          <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                        </g>
                      </g>
                    </g>
                    <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
                    <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1" />
                  </g>
                </g>
              </svg>
              <span aria-hidden="true" className="pup-bubble" data-show="false"></span>
            </div>
            <p className="font-scrawl text-lg text-cocoa-soft">
              every one of them was a Teddy Pup once
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
