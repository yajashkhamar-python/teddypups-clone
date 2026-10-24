import React from 'react';
import { Link } from 'react-router-dom';

export default function PuppyCard({ puppy }) {
  const isAvailable = puppy.status === 'available';

  return (
    <Link
      to={`/puppies/${puppy.id}`}
      className="tp-card"
      style={{
        transform: `rotate(${puppy.tilt || '0deg'})`,
        backgroundColor: 'var(--milk)'
      }}
      aria-label={`${puppy.name}, ${puppy.breed}, ${puppy.gender}, ${puppy.age}, ${puppy.status}`}
    >
      <div className="tp-card__media">
        <img
          src={puppy.image}
          alt={puppy.name}
          className="tp-card__img"
          loading="lazy"
        />
        <div className="tp-card__badges">
          <span className={`tp-badge ${isAvailable ? 'tp-badge--available' : 'tp-badge--adopted'}`}>
            {isAvailable ? 'Available' : 'Gone Home'}
          </span>
          {puppy.hasVideo && (
            <span className="tp-badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
              ▶ Video
            </span>
          )}
        </div>
      </div>

      <div className="tp-card__content">
        <h3 className="tp-card__title">
          <span>{puppy.name}</span>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--cocoa-muted)' }}>
            {puppy.origin === 'local' ? '📍 Dubai' : '✈️ Imported'}
          </span>
        </h3>
        <p className="tp-card__subtitle">
          {puppy.breed} · {puppy.gender} · {puppy.age}
        </p>
      </div>
    </Link>
  );
}
