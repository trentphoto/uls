export interface ILink {
  title: string
  path: string
}

export interface ILinkSection {
  header: string
  links: ILink[]
}

export interface FooterMeta {
  linkSections: ILinkSection[]
}

export const metaData = {
  linkSections: [
    {
      header: 'Navigate',
      links: [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'About',
          path: '/about'
        },
        {
          title: 'Calendar',
          path: '/calendar'
        },
        {
          title: 'News & Events',
          path: '/news-and-events'
        },
        {
          title: 'Trustees',
          path: '/trustees'
        }
      ]
    },
    {
      header: 'Resources',
      links: [
        {
          title: 'Alumni',
          path: '/alumni'
        },
        {
          title: 'Media and IT',
          path: '/media-and-it'
        },
        {
          title: 'Presidential News',
          path: '/presidential-news'
        },
        {
          title: 'MyULS',
          path: '/my-uls'
        },
        {
          title: 'Webmail',
          path: '/webmail'
        },
        {
          title: 'Library',
          path: '/library'
        }
      ]
    },
    {
      header: 'Connect',
      links: [
        {
          title: 'Admissions',
          path: '/admissions'
        },
        {
          title: 'Academics',
          path: '/academics'
        },
        {
          title: 'Donate',
          path: '/donate'
        },
        {
          title: 'Faculty & Staff',
          path: '/faculty-and-staff'
        },
        {
          title: 'Jobs',
          path: '/jobs'
        },
        {
          title: 'Visit',
          path: '/visit'
        }
      ]
    },
    {
      header: 'Involvement',
      links: [
        {
          title: 'Urban Theological Institute',
          path: '/urban-theological-institute'
        },
        {
          title: 'Town & Country Church Institute',
          path: '/town-and-country-church-institute'
        },
        {
          title: 'Seminary Ridge Museum',
          path: '/seminary-ridge-museum'
        },
        {
          title: 'Canvas',
          path: '/canvas'
        },
        {
          title: 'Music, Gettysburg!',
          path: '/music-gettysburg'
        },
        {
          title: 'Seminary Ridge Review',
          path: '/seminary-ridge-review'
        }
      ]
    }
  ]
}
