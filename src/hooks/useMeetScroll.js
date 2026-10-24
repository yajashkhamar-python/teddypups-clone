import { useEffect } from 'react';

/**
 * useMeetScroll:
 * Implements the authentic scroll-pinned, scroll-driven door carousel and
 * descending dog animation for the "Meet the pups" (.tp-meet) section.
 *
 * Mechanics verified directly on https://puppy.instabizweb.com/:
 * 1. Pinned distance: If window.innerWidth >= 1024, .tp-meet is pinned via data-pinned="true",
 *    and its parent wrapper [data-pin-range] is given a scroll runway:
 *    height: calc(${scrollDistance}px + 100vh).
 * 2. As the user scrolls down through the pin runway:
 *    - Normalized progress t = clamp((scrollY - sectionTop) / scrollDistance, 0, 1).
 *    - The track translates horizontally from right to left: transform: translateX(-t * maxTranslateX px).
 *    - The floor pattern background updates in sync: --floor-x: (-t * maxTranslateX)px.
 *    - The puppy doors open smoothly as they cross the viewpoint threshold (e.offsetLeft + currentX < 0.36 * window.innerWidth).
 * 3. Vertical Dog/Mascot descent:
 *    - The dog (.tp-meet__teddy) moves vertically downward from the upper stage boundary into its final
 *      settled resting position on the wooden floor as scrolling progresses.
 * 4. Bidirectional: Scrolling back up reverses the sequence smoothly without jumping.
 * 5. On mobile (< 1024px): Standard responsive grid layout is naturally maintained.
 */
export function useMeetScroll() {
  useEffect(() => {
    const meetSection = document.querySelector('.tp-meet');
    if (!meetSection) return;

    const pinRange = meetSection.querySelector('[data-pin-range]');
    const track = meetSection.querySelector('.tp-meet__track');
    const stage = meetSection.querySelector('.tp-meet__stage');
    const floor = meetSection.querySelector('.tp-meet__floor');
    const teddy = meetSection.querySelector('.tp-meet__teddy');
    if (!pinRange || !track) return;

    let rafId = null;
    let isDesktop = window.innerWidth >= 1024;
    let maxTranslate = 0;
    let pinDistance = 0;

    const measure = () => {
      isDesktop = window.innerWidth >= 1024;
      if (!isDesktop) {
        meetSection.removeAttribute('data-pinned');
        pinRange.style.removeProperty('--pinned');
        pinRange.style.removeProperty('height');
        track.style.removeProperty('transform');
        if (teddy) teddy.style.removeProperty('transform');
        if (floor) floor.style.removeProperty('--floor-x');
        return;
      }

      meetSection.setAttribute('data-pinned', 'true');
      pinRange.style.setProperty('--pinned', '1');

      // Calculate track total width and horizontal translation distance
      const trackScrollWidth = track.scrollWidth;
      const viewWidth = window.innerWidth;
      maxTranslate = Math.max(0, trackScrollWidth - viewWidth * 0.7);

      // The reference provides ~3200px scroll travel for 15 doors
      pinDistance = Math.max(maxTranslate * 0.85, 2800);
      pinRange.style.height = `calc(${pinDistance}px + 100vh)`;

      // Compute dynamic door width in stage
      const stageHeader = meetSection.querySelector('.tp-meet__head');
      const headerH = stageHeader ? stageHeader.offsetHeight : 80;
      const floorH = floor ? floor.offsetHeight : 96;
      const availableH = window.innerHeight - headerH - floorH - 120;
      const doorW = Math.max(130, Math.min(256, Math.floor(availableH / 1.35)));
      meetSection.style.setProperty('--door-w', `${doorW}px`);

      updateScroll();
    };

    const updateScroll = () => {
      if (!isDesktop || !maxTranslate || !pinDistance) return;

      const rect = pinRange.getBoundingClientRect();
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / pinDistance));

      // 1. Horizontal track movement from right to left
      const currentX = -(progress * maxTranslate);
      track.style.transform = `translate3d(${currentX.toFixed(2)}px, 0, 0)`;

      // 2. Floor pattern parallax sync
      if (floor) {
        floor.style.setProperty('--floor-x', `${currentX.toFixed(1)}px`);
      }

      // 3. Vertical descent of the dog/mascot
      // In the reference, the dog descends from the top of the hall down to the floor
      if (teddy) {
        // Starts above, moves down smoothly and settles as progress reaches 0.35
        const dogProgress = Math.min(1, progress / 0.35);
        // Easing smooth cubic out
        const dogEase = 1 - Math.pow(1 - dogProgress, 3);
        const startOffsetY = -180; // above in the hall
        const currentDogY = startOffsetY + dogEase * (-startOffsetY);
        teddy.style.transform = `translate3d(0, ${currentDogY.toFixed(2)}px, 0)`;
      }

      // 4. Individual door opening as doors cross the viewpoint threshold
      const openThreshold = window.innerWidth * 0.42;
      const doors = track.querySelectorAll('.tp-door');
      doors.forEach((door) => {
        const doorLeft = door.offsetLeft + currentX;
        const shouldOpen = doorLeft < openThreshold;
        if (door.getAttribute('data-open') !== String(shouldOpen)) {
          door.setAttribute('data-open', String(shouldOpen));
        }
      });
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScroll);
    };

    const resizeObserver = new ResizeObserver(() => {
      measure();
    });

    measure();
    resizeObserver.observe(meetSection);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      meetSection.removeAttribute('data-pinned');
      pinRange.style.removeProperty('--pinned');
      pinRange.style.removeProperty('height');
      track.style.removeProperty('transform');
      if (teddy) teddy.style.removeProperty('transform');
      if (floor) floor.style.removeProperty('--floor-x');
    };
  }, []);
}
