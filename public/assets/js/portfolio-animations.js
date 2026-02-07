(() => {
  if (!window.gsap) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const { gsap } = window;
  if (window.ScrollTrigger) {
    gsap.registerPlugin(window.ScrollTrigger);
  }
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const floatElements = (selector, options = {}) => {
    const nodes = document.querySelectorAll(selector);
    if (!nodes.length) return;
    nodes.forEach((el, index) => {
      gsap.to(el, {
        y: options.y ?? -14,
        x: options.x ?? 6,
        duration: (options.duration ?? 4) + index * 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2,
      });
    });
  };

  const animateHero = (rootSelector) => {
    const root = document.querySelector(rootSelector);
    if (!root) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(root.querySelectorAll('.hero-title'), {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.05,
    })
      .from(
        root.querySelectorAll('.hero-lead'),
        {
          y: 24,
          opacity: 0,
          duration: 0.6,
        },
        '-=0.5'
      )
      .from(
        root.querySelectorAll(
          '.hero-info, .hero-sub-title, .welcome-text, .hero-zero__badge, .hero-zero__chips'
        ),
        {
          y: 16,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
        },
        '-=0.45'
      )
      .from(
        root.querySelectorAll('.hero-cta'),
        {
          y: 14,
          opacity: 0,
          duration: 0.5,
        },
        '-=0.3'
      );
  };

  const animateStoryHero = () => {
    const root = document.querySelector('.story-hero');
    if (!root) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(root.querySelectorAll('.story-hero__tag, .story-hero__title, .story-hero__lead'), {
      y: 30,
      opacity: 0,
      duration: 0.75,
      stagger: 0.08,
    })
      .from(
        root.querySelectorAll('.story-hero__actions, .story-hero__meta'),
        {
          y: 24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
        },
        '-=0.4'
      )
      .from(
        root.querySelectorAll('.story-hero__frame, .story-hero__float'),
        {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
        },
        '-=0.5'
      );
  };


  const initMagneticButtons = (selector) => {
    if (!supportsHover) return;
    const buttons = document.querySelectorAll(selector);
    if (!buttons.length) return;

    buttons.forEach((button) => {
      const quickX = gsap.quickTo(button, 'x', { duration: 0.35, ease: 'power3.out' });
      const quickY = gsap.quickTo(button, 'y', { duration: 0.35, ease: 'power3.out' });

      button.addEventListener('mousemove', (event) => {
        const rect = button.getBoundingClientRect();
        const relX = (event.clientX - rect.left) / rect.width - 0.5;
        const relY = (event.clientY - rect.top) / rect.height - 0.5;
        quickX(relX * 12);
        quickY(relY * 10);
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        });
      });
    });
  };

  const initMouseParallax = (rootSelector, items) => {
    if (!supportsHover) return;
    const root = document.querySelector(rootSelector);
    if (!root) return;

    const entries = items
      .map((item) => {
        const el = root.querySelector(item.selector);
        if (!el) return null;
        return {
          el,
          x: item.x ?? 10,
          y: item.y ?? 8,
          rotate: item.rotate ?? 0,
          quickX: gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' }),
          quickY: gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' }),
          quickR: item.rotate
            ? gsap.quickTo(el, 'rotate', { duration: 0.6, ease: 'power3.out' })
            : null,
        };
      })
      .filter(Boolean);

    if (!entries.length) return;

    root.addEventListener('mousemove', (event) => {
      const rect = root.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;

      entries.forEach((entry) => {
        entry.quickX(relX * entry.x);
        entry.quickY(relY * entry.y);
        if (entry.quickR) {
          entry.quickR(relX * entry.rotate);
        }
      });
    });

    root.addEventListener('mouseleave', () => {
      entries.forEach((entry) => {
        gsap.to(entry.el, {
          x: 0,
          y: 0,
          rotate: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    });
  };

  animateHero('.hero-zero');
  animateHero('.hero-one');
  animateHero('.hero-two');
  animateHero('.hero-three');
  animateStoryHero();

  floatElements(
    '.hero-zero__panel, .hero-zero__float, .hero-two__shape1 img, .hero-two__shape2 img, .hero-two__shape3 img, .story-hero__frame, .story-hero__float'
  );
  floatElements('.hero-zero__ring, .hero-glow, .story-hero__orb', { y: -18, x: 10, duration: 6 });
  initMagneticButtons(
    '.hero-cta .btn-primary, .hero-cta .btn-secondary, .story-hero__actions .btn-primary, .story-hero__actions .btn-secondary'
  );

  initMouseParallax('.hero-zero', [
    { selector: '.hero-zero__float--one', x: 18, y: 14, rotate: 2.2 },
    { selector: '.hero-zero__float--two', x: 16, y: 12, rotate: -2 },
    { selector: '.hero-zero__float--three', x: 14, y: 10, rotate: 1.6 },
    { selector: '.hero-zero__panel--main', x: 22, y: 16, rotate: 2.4 },
    { selector: '.hero-zero__panel--alt', x: 18, y: 12, rotate: 2 },
    { selector: '.hero-zero__panel--accent', x: 14, y: 10, rotate: 1.6 },
    { selector: '.hero-zero__ring', x: 12, y: 8 },
  ]);

  initMouseParallax('.hero-two', [
    { selector: '.hero-two__shape1 img', x: 18, y: 14 },
    { selector: '.hero-two__shape2 img', x: 14, y: 12 },
    { selector: '.hero-two__shape3 img', x: 20, y: 16 },
    { selector: '.hero-two__slider .slide-image.active img', x: 10, y: 8, rotate: 1.5 },
    { selector: '.hero-glow', x: 26, y: 22 },
  ]);

  initMouseParallax('.hero-three', [
    { selector: '.hero-three .hero-title', x: 6, y: 4 },
    { selector: '.hero-three .hero-lead', x: 6, y: 4 },
    { selector: '.hero-glow', x: 24, y: 20 },
  ]);

  initMouseParallax('.story-hero', [
    { selector: '.story-hero__frame--one', x: 18, y: 14, rotate: 2 },
    { selector: '.story-hero__frame--two', x: 16, y: 12, rotate: -1.6 },
    { selector: '.story-hero__frame--three', x: 14, y: 10, rotate: 1.4 },
    { selector: '.story-hero__float--one', x: 20, y: 16, rotate: 2.4 },
    { selector: '.story-hero__float--two', x: 18, y: 14, rotate: -2 },
    { selector: '.story-hero__float--three', x: 16, y: 12, rotate: 1.6 },
    { selector: '.story-hero__orb', x: 26, y: 20 },
  ]);


  if (window.ScrollTrigger) {
    const scrollEase = 'none';
    const heroTrigger = {
      trigger: '.hero-zero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    };

    gsap.to('.hero-zero__panel--main', {
      y: -80,
      rotation: -6,
      ease: scrollEase,
      scrollTrigger: heroTrigger,
    });

    gsap.to('.hero-zero__panel--alt', {
      y: 60,
      rotation: 8,
      ease: scrollEase,
      scrollTrigger: heroTrigger,
    });

    gsap.to('.hero-zero__panel--accent', {
      y: -40,
      rotation: 10,
      ease: scrollEase,
      scrollTrigger: heroTrigger,
    });

    gsap.to('.hero-zero__float', {
      y: -50,
      ease: scrollEase,
      scrollTrigger: heroTrigger,
    });

    gsap.to('.hero-zero__ring', {
      rotation: 60,
      ease: scrollEase,
      scrollTrigger: heroTrigger,
    });
  }
})();
