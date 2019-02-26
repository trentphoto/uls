export interface ILink {
  id: string
  title: string
  path: string
  subpages?: ILink[]
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
          id: 'id',
          title: 'Home',
          path: '/'
        },
        {
          id: 'id',
          title: 'About',
          path: '/about'
        },
        {
          id: 'id',
          title: 'Calendar',
          path: '/calendar'
        },
        {
          id: 'id',
          title: 'News & Events',
          path: '/news-and-events'
        },
        {
          id: 'id',
          title: 'Trustees',
          path: '/trustees'
        }
      ]
    },
    {
      header: 'Resources',
      links: [
        {
          id: 'id',
          title: 'Alumni',
          path: '/alumni'
        },
        {
          id: 'id',
          title: 'Media and IT',
          path: '/media-and-it'
        },
        {
          id: 'id',
          title: 'Presidential News',
          path: '/presidential-news'
        },
        {
          id: 'id',
          title: 'MyULS',
          path: '/my-uls'
        },
        {
          id: 'id',
          title: 'Webmail',
          path: '/webmail'
        },
        {
          id: 'id',
          title: 'Library',
          path: '/library'
        }
      ]
    },
    {
      header: 'Connect',
      links: [
        {
          id: 'id',
          title: 'Admissions',
          path: '/admissions'
        },
        {
          id: 'id',
          title: 'Academics',
          path: '/academics'
        },
        {
          id: 'id',
          title: 'Donate',
          path: '/donate'
        },
        {
          id: 'id',
          title: 'Faculty & Staff',
          path: '/faculty-and-staff'
        },
        {
          id: 'id',
          title: 'Jobs',
          path: '/jobs'
        },
        {
          id: 'id',
          title: 'Visit',
          path: '/visit'
        }
      ]
    },
    {
      header: 'Involvement',
      links: [
        {
          id: 'id',
          title: 'Urban Theological Institute',
          path: '/urban-theological-institute'
        },
        {
          id: 'id',
          title: 'Town & Country Church Institute',
          path: '/town-and-country-church-institute'
        },
        {
          id: 'id',
          title: 'Seminary Ridge Museum',
          path: '/seminary-ridge-museum'
        },
        {
          id: 'id',
          title: 'Canvas',
          path: '/canvas'
        },
        {
          id: 'id',
          title: 'Music, Gettysburg!',
          path: '/music-gettysburg'
        },
        {
          id: 'id',
          title: 'Seminary Ridge Review',
          path: '/seminary-ridge-review'
        }
      ]
    }
  ]
}
