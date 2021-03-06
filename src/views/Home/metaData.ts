import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface MetaData {
  hero: {
    header: string
    subHeader: string
    image: string
  }
  tabs: {
    tabOne: {
      header: string
      desc: string
      link: string
      icon: IconProp
    }
    tabTwo: {
      header: string
      desc: string
      link: string
      icon: IconProp
    }
    tabThree: {
      header: string
      desc: string
      link: string
      icon: IconProp
    }
  }
  facts: {
    header: string
    desc: string
    facts: TFactTypes[]
  }
  events: EventSlide[]
  campuses: ICampus[]
}

export const metaData: MetaData = {
  hero: {
    header: 'Unifying, Learning, and Serving',
    subHeader:
      'Welcome to United Lutheran Seminary, a School for Church and World',
    image:
      'https://unitedlutheranseminary.edu/wp-content/uploads/2018/08/United-Lutheran-Seminary-Gettysburg-Philadelphia.jpg'
  },
  tabs: {
    tabOne: {
      header: 'Visit',
      desc:
        'Discerning a call to ministry? Come to ULS and explore where God might be calling you next!',
      link: '/admissions/visit',
      icon: 'globe-americas'
    },
    tabTwo: {
      header: 'Apply',
      desc: 'Ready to apply? View applications and get started here.',
      link: '/admissions/apply',
      icon: 'check-circle'
    },
    tabThree: {
      header: 'Give',
      desc: 'ULS is supported through generous and faithful partners like you.',
      link: '/giving',
      icon: 'hand-holding-heart'
    }
  },
  facts: {
    header: 'ULS by the Numbers',
    desc: '',
    facts: [
      {
        type: 'lowerImg',
        header: '300+',
        subHeader: 'Students',
        color: 'blue',
        image: require('../../assets/svgs/facts/people.svg')
      },
      { type: 'noImg', header: '19', subHeader: 'Faculty', color: 'orange' },
      {
        type: 'noImg',
        header: '28',
        subHeader: 'Denominations represented on campus',
        color: 'blue'
      },
      {
        type: 'centerImg',
        headerOne: '1',
        subHeaderOne: 'Seminary',
        headerTwo: '2',
        subHeaderTwo: 'Campuses',
        color: 'blue',
        image: require('../../assets/svgs/facts/1-to-2.svg')
      },
      {
        type: 'lowerImg',
        header: '6',
        subHeader: 'Degrees Programs',
        color: 'blue',
        image: require('../../assets/svgs/facts/degrees.svg')
      }
    ]
  },
  events: [
    {
      title: 'Sample Campus Event',
      startDate: 'SAT. OCTOBER 21ST',
      endDate: 'SUN. OCTOBER 22ND',
      img: require('../../assets/placeholders/bg.png'),
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue mauris.'
    },
    {
      title: 'Lutherbowl',
      startDate: 'SAT. OCTOBER 21ST',
      endDate: 'SUN. OCTOBER 22ND',
      img: require('../../assets/placeholders/bg.png'),
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue mauris.'
    }
  ],
  campuses: [
    {
      header: 'Gettysburg Campus',
      description:
        'Located within two hours of Baltimore and Washington D.C., the Gettysburg campus of United Lutheran Seminary is situated in the heart of one of our country’s most charming and historically important towns.',
      image: require('../../assets/images/gettysburg.jpg'),
      path: '/gettysburg-campus',
      alignment: 'right'
    },
    {
      header: 'Philadelphia Campus',
      description:
        'Located in the historic Mt. Airy neighborhood, students love not only the picturesque campus, but also the wide-variety of opportunities that are available right in the neighborhood. You can also get right into the heart of Philadelphia and beyond using one of the two train stations or public transportation that are blocks from campus.',
      image: require('../../assets/images/philadelphia.jpg'),
      path: '/philadelphia-campus',
      alignment: 'left'
    }
  ]
}
