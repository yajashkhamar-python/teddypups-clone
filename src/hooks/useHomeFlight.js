import { useEffect } from 'react';

/**
 * useHomeFlight hook controls the Section 2 ("Imported for you") airplane animation.
 * As the user scrolls through Section 2, the plane moves along the bezier curve
 * `M40 250 C 170 40, 470 20, 620 168`, rotates to match the tangent direction,
 * fades in smoothly from opacity 0 to 1 as it takes off from Korea,
 * stops when scroll stops, and reverses when scrolling upwards.
 */
export function useHomeFlight() {
  useEffect(() => {
    const flightEl = document.querySelector('.tp-flight');
    if (!flightEl) return;

    const routePath = flightEl.querySelector('.tp-flight__route');
    const planeG = flightEl.querySelector('svg > g');
    if (!routePath || !planeG) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updatePlane = (progress) => {
      const totalLen = routePath.getTotalLength();
      const l = Math.min(totalLen, Math.max(0, progress * totalLen));
      const pt = routePath.getPointAtLength(l);
      const nextPt = routePath.getPointAtLength(Math.min(totalLen, l + 1));
      const prevPt = routePath.getPointAtLength(Math.max(0, l - 1));
      const angle = (180 * Math.atan2(nextPt.y - prevPt.y, nextPt.x - prevPt.x)) / Math.PI;

      planeG.setAttribute('transform', `translate(${pt.x.toFixed(1)} ${pt.y.toFixed(1)}) rotate(${angle.toFixed(1)})`);

      // Opacity fades in between progress 0.05 and 0.20
      const opacity = Math.min(1, Math.max(0, (progress - 0.05) / 0.15));
      planeG.style.opacity = String(opacity);
    };

    if (prefersReducedMotion) {
      updatePlane(0.5);
      return;
    }

    let rafId = null;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!flightEl || !routePath || !planeG) return;

        const rect = flightEl.getBoundingClientRect();
        const winH = window.innerHeight;

        // Container enters viewport bottom when rect.top == winH * 0.95
        // Reaches completion when rect.bottom == winH * 0.05
        const startY = winH * 0.92;
        const endY = -rect.height * 0.2;
        const totalDistance = startY - endY;
        const currentDistance = startY - rect.top;

        const progress = Math.min(1, Math.max(0, currentDistance / totalDistance));
        updatePlane(progress);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}
