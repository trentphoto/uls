import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface HoverComponent {
  hideSecondaryLinks?: boolean
  secondaryLinks: SecondaryLink[]
  primaryLinks: PrimaryLink[]
}

export interface SecondaryLink {
  path: string
  label: string
}

export interface PrimaryLink {
  path: string
  label: string
  icon: IconProp
  description: string
}

/**
 * ABOUT METADATA
 */
const aboutMeta: HoverComponent = {
  primaryLinks: [
    {
      path: '/about/campuses',
      label: 'Campuses',
      icon: 'school',
      description:
        "We're one seminary with two campuses — Gettysburg and Philadelphia."
    },
    {
      path: '/about/history',
      label: 'History',
      icon: 'landmark',
      description:
        'Learn about our rich history of world-class theological education beginning in 1826.'
    },
    {
      path: '/about/departments',
      label: 'Departments',
      icon: 'folder-open',
      description:
        'Find individual departments here, such as IT, Communications, or Human Resources.'
    },
    {
      path: '/about/welcome-equity',
      label: 'Welcome & Equity',
      icon: 'book-open',
      description:
        'We strive to be a welcoming community for all people - no exceptions.'
    }
  ],
  secondaryLinks: [
    {
      path: '/about/campuses',
      label: 'Campuses'
    },
    {
      path: '/about/history',
      label: 'History'
    },
    {
      path: '/about/welcome-equity',
      label: 'Welcome & Equity'
    },
    {
      path: '/about/board-of-trustees',
      label: 'Board of Trustees'
    },
    {
      path: '/about/president',
      label: 'President'
    },
    {
      path: '/about/departments',
      label: 'Departments'
    }
  ]
}

/**
 * ADMISSIONS METADATA
 */
const admissionsMeta: HoverComponent = {
  primaryLinks: [
    {
      path: '/admissions/visit',
      label: 'Visit',
      icon: 'globe-americas',
      description:
        'Come take a tour of one or both of our beautiful, historic campuses.'
    },
    {
      path: '/admissions/apply',
      label: 'Apply',
      icon: 'check-circle',
      description: 'Take the next step in your calling in ministry.'
    },
    {
      path: '/admissions/financial-aid',
      label: 'Financial Aid',
      icon: 'dollar-sign',
      description:
        'Learn about the different kinds of financial aid available to students.'
    },
    {
      path: '/admissions/weekend',
      label: 'The Weekend',
      icon: 'seedling',
      description:
        'The Weekend is our discernment retreat where you can experience seminary life yourself!'
    }
  ],
  secondaryLinks: [
    {
      path: '/admissions/visit',
      label: 'Visit'
    },
    {
      path: '/admissions/apply',
      label: 'Apply'
    },
    {
      path: '/admissions/financial-aid',
      label: 'Financial Aid'
    },
    {
      path: '/admissions/weekend',
      label: 'The Weekend'
    },
    {
      path: '/admissions/faq',
      label: 'FAQ'
    }
  ]
}

/**
 * ACADEMICS METADATA
 */
const academicsMeta: HoverComponent = {
  primaryLinks: [
    {
      path: '/academics/degree-programs',
      label: 'Degree Programs',
      icon: 'graduation-cap',
      description:
        'Explore our degree programs that will equip you in your calling.'
    },
    {
      path: '/academics/certificate-programs',
      label: 'Certificate Programs',
      icon: 'certificate',
      description:
        'In-depth study in areas such as theology, bible, history and practice of ministry, urban ministry, and more.'
    },
    {
      path: '/academics/lifelong-learning',
      label: 'Lifelong Learning',
      icon: 'chalkboard-teacher',
      description:
        'Further your theological education with events, lectures, partnerships, and more.'
    },
    {
      path: '/academics/institutes',
      label: 'Institutes',
      icon: 'building',
      description:
        'Urban Theological Institute, Asian Theological Summer Institute, Town & Country Church Institute, and more.'
    }
  ],
  secondaryLinks: [
    {
      path: '/academics/degree-programs',
      label: 'Degree Programs'
    },
    {
      path: '/academics/certificate-programs',
      label: 'Certificate Programs'
    },
    {
      path: '/academics/lifelong-learning',
      label: 'Lifelong Learning'
    },
    {
      path: '/academics/institutes',
      label: 'Institutes'
    },
    {
      path: '/academics/accreditation',
      label: 'Accreditation'
    },
    {
      path: '/academics/catalog',
      label: 'Academic Catalog'
    }
  ]
}

/**
 * COMMUNITY LIFE METADATA
 */
const communityMeta: HoverComponent = {
  hideSecondaryLinks: true,
  primaryLinks: [
    {
      path: '/community-life/united-media',
      label: 'United Media',
      icon: 'video',
      description: 'Stories and news from around the ULS community.'
    },
    {
      path: '/community-life/calendar-of-events',
      label: 'Calendar of Events',
      icon: 'calendar-day',
      description: 'Upcoming ULS events.'
    },
    {
      path: '/community-life/community',
      label: 'Community Updates',
      icon: 'users',
      description:
        'Prayer requests and happenings in the life of our community.'
    }
  ],
  secondaryLinks: [
    {
      path: '/community-life/united-media',
      label: 'United Media'
    },
    {
      path: '/community-life/calendar-of-events',
      label: 'Calendar of Events'
    },
    {
      path: '/community-life/community',
      label: 'Community Updates'
    }
  ]
}

export const HoverData: { [key: string]: HoverComponent } = {
  about: aboutMeta,
  admissions: admissionsMeta,
  academics: academicsMeta,
  communityLife: communityMeta
}
