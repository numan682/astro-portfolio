export type NavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  children?: NavItem[];
  megaMenu?: MegaColumn[];
};

export type MegaColumn = {
  title: string;
  items: NavItem[];
};

const pagesMegaMenu: MegaColumn[] = [
  {
    title: 'Page List 1',
    items: [{ label: 'About', href: '/about' }]
  },
  {
    title: 'Page List 2',
    items: [
      { label: 'Service', href: '/service' },
      { label: 'Service Details', href: '/service-details' },
      { label: 'Blog', href: '/blog' },
      { label: 'Blog Details', href: '/blog-details' }
    ]
  },
  {
    title: 'Page List 3',
    items: [
      { label: 'Work', href: '/work' },
      { label: 'Work Masonry', href: '/work-masonry' },
      { label: 'Work Details', href: '/work-details' },
      { label: 'Team Details', href: '/team-details' }
    ]
  },
  {
    title: 'Page List 4',
    items: [
      { label: '404 Error', href: '/404' },
      { label: 'Contact Us', href: '/contact' }
    ]
  }
];

const blogMenu: NavItem[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'Blog Details', href: '/blog-details' }
];

const serviceMenu: NavItem[] = [
  { label: 'Service', href: '/service' },
  { label: 'Service Details', href: '/service-details' }
];

export const desktopNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Pages', href: '/work', megaMenu: pagesMegaMenu },
  { label: 'blog', href: '/blog', children: blogMenu },
  { label: 'Contact', href: '/contact' }
];

export const mobileNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Pages', href: '/work', megaMenu: pagesMegaMenu },
  { label: 'Blog', href: '/blog', children: blogMenu },
  { label: 'Service', href: '/service', children: serviceMenu },
  { label: 'Contact', href: '/contact' }
];
