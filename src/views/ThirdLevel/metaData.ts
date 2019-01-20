import { ILink } from '../../components/Footer/metaData'

interface MetaData {
  hero: {
    header: string
    subHeader: string
    image: string
  }
  content: {
    header: string
    text: string
  }
  facts: {
    header: string
    desc: string
    facts: TFactTypes[]
  }
  campuses: ICampus[]
  sidebar: ILink[]
}

export const metaData: MetaData = {
  hero: {
    header: 'Sample Third Level',
    subHeader:
      'United Lutheran Seminary is a welcoming and diverse learning community equipping people to proclaim the living Gospel for a changing church and world.',
    image: require('../../assets/images/about-bg.jpg')
  },
  content: {
    header: 'Unifying, Learning and Serving',
    text:
      'Unifying, Learning, Serving: United Lutheran Seminary is a welcoming and diverse learning community equipping people to proclaim the living Gospel for a changing church and world. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nec erat molestie, fermentum elit eget, molestie nibh.Donec egestas sed mi sit amet tempus.Integer dui nunc, mattis ac suscipit sed, pulvinar non ligula.Ut ut diam eget tellus tempus elementum.Donec sollicitudin pharetra diam.Nunc in ligula mollis, auctor magna quis, pharetra lorem.Integer eget turpis consequat, dictum tellus vel, bibendum quam.Aliquam commodo, elit in dictum gravida, elit erat egestas quam, vel mollis eros velit sed ipsum.Sed non pretium sem, vel ullamcorper quam.Praesent eu eros laoreet, sodales tortor vel, facilisis velit.Donec sed lorem ullamcorper, finibus sapien vitae, volutpat enim.Donec auctor malesuada tincidunt.Sed non commodo libero. <br/><br/>Donec tempor semper quam vitae interdum.Suspendisse sit amet felis vestibulum, aliquet ligula eget, condimentum risus.Vivamus bibendum mauris non ipsum fermentum eleifend.Morbi tristique imperdiet massa, eu tincidunt tellus rutrum quis.Aliquam sapien mi, lacinia vel lacinia id, varius non orci.Suspendisse vel rutrum metus.Donec vitae tristique mi.Nulla facilisi.Aliquam condimentum massa in tellus ullamcorper posuere.'
  },
  sidebar: [
    { title: 'departments', path: '/about/departments' },
    { title: 'campuses', path: '/about/campuses' },
    { title: 'faculty & staff', path: '/about/faculty-and-staff' },
    { title: 'president', path: '/about/president' },
    { title: 'board', path: '/about/board' },
    { title: 'ric', path: '/about/ric' },
    { title: 'history', path: '/about/history' }
  ],
  facts: {
    header: 'Some Facts',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices ante viverra orci accumsan interdum. Mauris eu leo id orci porta consectetur quis sit amet tortor. Sed in cursus ex, et ultricies purus.',
    facts: [
      {
        type: 'lowerImg',
        header: '325',
        subHeader: 'Students',
        color: 'blue',
        image: require('../../assets/svgs/facts/people.svg')
      },
      { type: 'noImg', header: '21', subHeader: 'Faculty', color: 'orange' },
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
        header: '7',
        subHeader: 'Degrees',
        color: 'blue',
        image: require('../../assets/svgs/facts/degrees.svg')
      }
    ]
  },
  campuses: [
    {
      header: 'Gettysburg Campus',
      description:
        'Located within two hours of Baltimore and Washington D.C., the Gettysburg campus of United Lutheran Seminary is situated in the heart of one of our country’s most charming and historically important towns.',
      image: require('../../assets/images/gettysburg.jpg'),
      path: '/gettsyburg',
      alignment: 'right'
    },
    {
      header: 'Philadelphia Campus',
      description:
        'Located in the historic Mt. Airy neighborhood, students love not only the picturesque campus, but also the wide-variety of opportunities that are available right in the neighborhood. You can also get right into the heart of Philadelphia and beyond using one of the two train stations or public transportation that are blocks from campus.',
      image: require('../../assets/images/philadelphia.jpg'),
      path: '/philadelphia',
      alignment: 'left'
    }
  ]
}
