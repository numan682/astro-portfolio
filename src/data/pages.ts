import { scriptBundles } from './scripts';

export type BreadcrumbConfig = {
  title: string;
  current?: string;
  background?: string;
  homeLabel?: string;
  homeHref?: string;
};

export type PageMeta = {
  title: string;
  description: string;
  canonical: string;
  pageType?: string;
  image?: string;
  noindex?: boolean;
};

export type PageConfig = {
  meta: PageMeta;
  scripts: string[];
  breadcrumb?: BreadcrumbConfig;
};

export const pages: Record<string, PageConfig> = {
  home: {
    meta: {
      title: 'Devfolio | Full-Stack Developer Portfolio',
      description:
        'Full-stack developer portfolio featuring product design, engineering case studies, and production-ready builds.',
      canonical: '/'
    },
    scripts: scriptBundles.standard
  },
  about: {
    meta: {
      title: 'About | Devfolio',
      description: 'Background, values, and toolset behind the developer portfolio.',
      canonical: '/about'
    },
    scripts: scriptBundles.withWow,
    breadcrumb: {
      title: 'ABOUT ME'
    }
  },
  blog: {
    meta: {
      title: 'Insights | Devfolio',
      description: 'Engineering notes, product learnings, and technical breakdowns.',
      canonical: '/blog'
    },
    scripts: scriptBundles.withWow,
    breadcrumb: {
      title: 'latest news',
      current: 'our blog'
    }
  },
  blogDetails: {
    meta: {
      title: 'Article | Devfolio',
      description: 'Detailed engineering article and build notes.',
      canonical: '/blog-details',
      pageType: 'article',
      image: '/img/blog/article/1920x1280_img-01.webp'
    },
    scripts: scriptBundles.withWow,
    breadcrumb: {
      title: 'blog details'
    }
  },
  contact: {
    meta: {
      title: 'Contact | Devfolio',
      description: 'Get in touch for development projects, consulting, or collaborations.',
      canonical: '/contact'
    },
    scripts: scriptBundles.withWow,
    breadcrumb: {
      title: 'contact us',
      current: 'contact'
    }
  },
  service: {
    meta: {
      title: 'Services | Devfolio',
      description:
        'End-to-end development services: UI engineering, full-stack apps, and performance optimization.',
      canonical: '/service'
    },
    scripts: scriptBundles.withWow,
    breadcrumb: {
      title: 'our services',
      current: 'our service'
    }
  },
  serviceDetails: {
    meta: {
      title: 'Service Details | Devfolio',
      description: 'Deep dive into a full-stack development engagement.',
      canonical: '/service-details'
    },
    scripts: scriptBundles.withWow,
    breadcrumb: {
      title: 'service details'
    }
  },
  teamDetails: {
    meta: {
      title: 'Profile | Devfolio',
      description: 'Developer profile with background, strengths, and work style.',
      canonical: '/team-details'
    },
    scripts: scriptBundles.withWow,
    breadcrumb: {
      title: 'team details'
    }
  },
  work: {
    meta: {
      title: 'Projects | Devfolio',
      description: 'Selected development projects with measurable outcomes.',
      canonical: '/work'
    },
    scripts: scriptBundles.withWow,
    breadcrumb: {
      title: 'SELECTED WORKS',
      current: 'WORKS'
    }
  },
  workDetails: {
    meta: {
      title: 'Project Details | Devfolio',
      description: 'Case study with scope, approach, and technical decisions.',
      canonical: '/work-details',
      image: '/img/works/2200x1650_prj-details-01.webp'
    },
    scripts: scriptBundles.withWow,
    breadcrumb: {
      title: 'project details'
    }
  },
  workMasonry: {
    meta: {
      title: 'Project Gallery | Devfolio',
      description: 'A visual gallery of recent development work and experiments.',
      canonical: '/work-masonry'
    },
    scripts: scriptBundles.withIsotope,
    breadcrumb: {
      title: 'Masonry Portfolio',
      current: 'WORKS'
    }
  },
  notFound: {
    meta: {
      title: 'Page Not Found | Devfolio',
      description: 'The page you are looking for could not be found.',
      canonical: '/404',
      noindex: true
    },
    scripts: scriptBundles.withWow,
    breadcrumb: {
      title: 'page not found',
      current: '404 page'
    }
  }
};
