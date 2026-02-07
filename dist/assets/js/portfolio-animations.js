(() => {
  if (!window.gsap) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const { gsap } = window;

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
        root.querySelectorAll('.hero-info, .hero-sub-title, .welcome-text'),
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

  animateHero('.hero-one');
  animateHero('.hero-two');
  animateHero('.hero-three');

  floatElements('.hero-one__main-thumb img, .hero-two__shape1 img, .hero-two__shape2 img, .hero-two__shape3 img');
  floatElements('.hero-glow', { y: -18, x: 10, duration: 6 });
})();
