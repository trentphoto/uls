import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface HoverComponent {
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
  icon: any
  description: string
}

/**
 * ABOUT METADATA
 */
const aboutMeta: HoverComponent = {
  primaryLinks: [
    {
      path: '/about/campuses',
      label: 'Locations',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    },
    {
      path: '/about/campuses',
      label: 'History',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    },
    {
      path: '/about/campuses',
      label: 'Departments',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    },
    {
      path: '/about/campuses',
      label: 'Welcome & Equity',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    }
  ],
  secondaryLinks: [
    {
      path: '/about/campuses',
      label: 'Locations'
    },
    {
      path: '/about/campuses',
      label: 'History'
    },
    {
      path: '/about/campuses',
      label: 'Welcome & Equity'
    },
    {
      path: '/about/campuses',
      label: 'Board of Trustees'
    },
    {
      path: '/about/campuses',
      label: 'President'
    },
    {
      path: '/about/campuses',
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
      path: '/about/campuses',
      label: 'Admissions',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    },
    {
      path: '/about/campuses',
      label: 'History',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    },
    {
      path: '/about/campuses',
      label: 'Departments',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    },
    {
      path: '/about/campuses',
      label: 'Welcome & Equity',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    }
  ],
  secondaryLinks: [
    {
      path: '/about/campuses',
      label: 'Locations'
    },
    {
      path: '/about/campuses',
      label: 'History'
    },
    {
      path: '/about/campuses',
      label: 'Welcome & Equity'
    },
    {
      path: '/about/campuses',
      label: 'Board of Trustees'
    },
    {
      path: '/about/campuses',
      label: 'President'
    },
    {
      path: '/about/campuses',
      label: 'Departments'
    }
  ]
}

/**
 * ACADEMICS METADATA
 */
const academicsMeta: HoverComponent = {
  primaryLinks: [
    {
      path: '/about/campuses',
      label: 'Academics',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    },
    {
      path: '/about/campuses',
      label: 'History',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    },
    {
      path: '/about/campuses',
      label: 'Departments',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    },
    {
      path: '/about/campuses',
      label: 'Welcome & Equity',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    }
  ],
  secondaryLinks: [
    {
      path: '/about/campuses',
      label: 'Locations'
    },
    {
      path: '/about/campuses',
      label: 'History'
    },
    {
      path: '/about/campuses',
      label: 'Welcome & Equity'
    },
    {
      path: '/about/campuses',
      label: 'Board of Trustees'
    },
    {
      path: '/about/campuses',
      label: 'President'
    },
    {
      path: '/about/campuses',
      label: 'Departments'
    }
  ]
}

/**
 * COMMUNITY LIFE METADATA
 */
const communityMeta: HoverComponent = {
  primaryLinks: [
    {
      path: '/about/campuses',
      label: 'Community',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    },
    {
      path: '/about/campuses',
      label: 'History',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    },
    {
      path: '/about/campuses',
      label: 'Departments',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    },
    {
      path: '/about/campuses',
      label: 'Welcome & Equity',
      icon: <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />,
      description:
        "We're one seminary with three locations: Gettysburg, Philadelphia, and our unique Distributed Learning program."
    }
  ],
  secondaryLinks: [
    {
      path: '/united-media',
      label: 'Unitied Media'
    },
    {
      path: '/about/campuses',
      label: 'History'
    },
    {
      path: '/about/campuses',
      label: 'Welcome & Equity'
    },
    {
      path: '/about/campuses',
      label: 'Board of Trustees'
    },
    {
      path: '/about/campuses',
      label: 'President'
    },
    {
      path: '/about/campuses',
      label: 'Departments'
    }
  ]
}

export const HoverData: { [key: string]: HoverComponent } = {
  about: aboutMeta,
  admissions: admissionsMeta,
  academics: academicsMeta,
  communityLife: communityMeta
}
