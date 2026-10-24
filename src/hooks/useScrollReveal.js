import { useEffect } from 'react';

/**
 * useScrollReveal:
 * Observes all elements matching [data-reveal] and [data-pup-scene] on the page.
 * When they scroll into view, sets data-armed="true" and data-revealed="true",
 * or data-here="true" for scenes, exactly matching the reference site's animation triggers.
 */
export function useScrollReveal(dependencyArray = []) {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.hasAttribute('data-pup-scene')) {
            el.setAttribute('data-here', 'true');
          } else {
            el.setAttribute('data-armed', 'true');
            el.setAttribute('data-revealed', 'true');
          }
          obs.unobserve(el);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Find all reveal targets
    const targets = document.querySelectorAll(
      '[data-reveal], [data-pup-scene], .tp-sketch, .tp-note, .tp-polaroid, .tp-wall__item, .tp-tag, .tp-ticket'
    );

    targets.forEach(t => {
      // Set initial armed state if not already revealed
      if (!t.hasAttribute('data-revealed')) {
        t.setAttribute('data-armed', 'true');
      }
      observer.observe(t);
    });

    return () => {
      observer.disconnect();
    };
  }, dependencyArray);
}
