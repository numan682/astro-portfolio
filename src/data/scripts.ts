const coreScripts = [
  '/assets/js/vendor/jquery-3.7.1.min.js',
  '/assets/js/vendor/odometer.min.js',
  '/assets/js/vendor/viewport.jquery.js',
  '/assets/js/vendor/bootstrap.bundle.min.js',
  '/assets/js/vendor/jquery.meanmenu.min.js',
  '/assets/js/vendor/swiper-bundle.min.js',
  '/assets/js/vendor/jquery.magnific-popup.min.js',
  '/assets/js/vendor/gsap.min.js',
  '/assets/js/vendor/ScrollTrigger.min.js',
  '/assets/js/vendor/ScrollToPlugin.min.js',
  '/assets/js/vendor/SplitText.min.js',
  '/assets/js/main.js'
];

export const scriptBundles = {
  standard: [...coreScripts],
  withWow: [
    ...coreScripts.slice(0, 7),
    '/assets/js/vendor/wow.min.js',
    ...coreScripts.slice(7)
  ],
  withIsotope: [
    ...coreScripts.slice(0, 7),
    '/assets/js/vendor/wow.min.js',
    '/assets/js/vendor/isotope.pkgd.min.js',
    '/assets/js/vendor/imagesloaded.pkgd.min.js',
    ...coreScripts.slice(7)
  ]
};

export type ScriptBundle = keyof typeof scriptBundles;
