import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { puppies, breedFilters, originFilters } from '../data/puppies';
import PuppyCard from '../components/PuppyCard';
import { PawIcon } from '../components/Header';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Puppies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedBreed = searchParams.get('breed') || 'all';
  const selectedOrigin = searchParams.get('origin') || 'all';

  useScrollReveal([selectedBreed, selectedOrigin]);

  const setFilter = (key, val) => {
    const next = new URLSearchParams(searchParams);
    if (val === 'all') {
      next.delete(key);
    } else {
      next.set(key, val);
    }
    setSearchParams(next);
  };

  const filteredPups = useMemo(() => {
    return puppies.filter(p => {
      const matchBreed = selectedBreed === 'all' || p.breedCategory === selectedBreed;
      const matchOrigin = selectedOrigin === 'all' || p.origin === selectedOrigin;
      return matchBreed && matchOrigin;
    });
  }, [selectedBreed, selectedOrigin]);

  const availableList = filteredPups.filter(p => p.status === 'available');
  const goneHomeList = filteredPups.filter(p => p.status === 'gone-home');

  return (
    <div style={{ paddingTop: 'var(--header-h)', minHeight: '80vh', backgroundColor: 'var(--honey)' }}>
      {/* Page Header */}
      <div
        style={{
          padding: 'clamp(2.5rem, 5vw, 4rem) 0 2rem',
          backgroundColor: 'var(--honey-subtle)',
          borderBottom: '2px solid var(--cocoa)'
        }}
      >
        <div className="gutter">
          <p className="font-scrawl" style={{ color: 'var(--accent-rust)', fontSize: '1.5rem', marginBottom: '0.4rem' }}>
            our teacup puppies
          </p>
          <h1 className="font-plush" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: 'var(--cocoa)', marginBottom: '1.5rem' }}>
            Available puppies
          </h1>

          {/* Filters Bar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Breed Filter Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 700, fontSize: '0.9rem', marginRight: '0.3rem' }}>Breed:</span>
              {breedFilters.map(bf => (
                <button
                  key={bf.value}
                  type="button"
                  onClick={() => setFilter('breed', bf.value)}
                  className="tp-sticker-chip"
                  style={{
                    backgroundColor: selectedBreed === bf.value ? 'var(--color-honey)' : 'var(--color-milk)',
                    borderColor: 'var(--color-cocoa)',
                    cursor: 'pointer'
                  }}
                >
                  {bf.label}
                </button>
              ))}
            </div>

            {/* Origin Filter Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 700, fontSize: '0.9rem', marginRight: '0.3rem' }}>Origin:</span>
              {originFilters.map(of => (
                <button
                  key={of.value}
                  type="button"
                  onClick={() => setFilter('origin', of.value)}
                  className="tp-sticker-chip"
                  style={{
                    backgroundColor: selectedOrigin === of.value ? 'var(--color-honey)' : 'var(--color-milk)',
                    borderColor: 'var(--color-cocoa)',
                    cursor: 'pointer'
                  }}
                >
                  {of.label}
                </button>
              ))}
              {(selectedBreed !== 'all' || selectedOrigin !== 'all') && (
                <button
                  type="button"
                  onClick={() => setSearchParams({})}
                  style={{
                    background: 'none',
                    border: 'none',
                    textDecoration: 'underline',
                    color: 'var(--accent-rust)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    marginLeft: '0.5rem'
                  }}
                >
                  Reset filters
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Available Puppies Section */}
      <div className="gutter" style={{ padding: '3.5rem 1rem 4rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 className="font-plush" style={{ fontSize: '1.8rem', color: 'var(--cocoa)' }}>
            Ready for loving homes ({availableList.length})
          </h2>
        </div>

        {availableList.length === 0 ? (
          <div
            className="tp-card-sketch"
            style={{ padding: '3rem', textAlign: 'center', margin: '2rem 0' }}
          >
            <p className="font-scrawl" style={{ fontSize: '1.8rem', color: 'var(--accent-rust)' }}>
              no puppies match this filter right now
            </p>
            <p style={{ color: 'var(--cocoa-muted)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              Try selecting another breed or reset your filter preferences.
            </p>
            <button
              type="button"
              onClick={() => setSearchParams({})}
              className="btn btn-primary"
            >
              Show all puppies
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2.2rem'
            }}
          >
            {availableList.map((puppy, idx) => (
              <PuppyCard key={puppy.id} puppy={puppy} index={idx} />
            ))}
          </div>
        )}

        {/* Already Gone Home Section */}
        {goneHomeList.length > 0 && (
          <div style={{ marginTop: '5rem', borderTop: '2px dashed var(--cocoa)', paddingTop: '3.5rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <p className="font-scrawl" style={{ color: 'var(--accent-rust)', fontSize: '1.5rem' }}>
                forever families
              </p>
              <h2 className="font-plush" style={{ fontSize: '1.8rem', color: 'var(--cocoa)' }}>
                Already gone home ({goneHomeList.length})
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2.2rem',
                opacity: 0.95
              }}
            >
              {goneHomeList.map((puppy, idx) => (
                <PuppyCard key={puppy.id} puppy={puppy} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
