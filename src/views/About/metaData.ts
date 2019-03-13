import { guid } from '../../utils/generateID'

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
  departments: IDepartment[]
  president: {
    header: string
    subHeader: string
    desc: string
    image: string
    path: string
  }
  tradition: {
    header: string
    path: string
    image: string
  }
}

export const metaData: MetaData = {
  hero: {
    header: 'About United Lutheran Seminary',
    subHeader:
      'United Lutheran Seminary is a welcoming and diverse learning community equipping people to proclaim the living Gospel for a changing church and world.',
    image: require('../../assets/images/about-bg.jpg')
  },
  content: {
    header: 'Unifying, Learning and Serving',
    text:
      'Unifying, Learning, Serving: United Lutheran Seminary is a welcoming and diverse learning community equipping people to proclaim the living Gospel for a changing church and world. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nec erat molestie, fermentum elit eget, molestie nibh.Donec egestas sed mi sit amet tempus.Integer dui nunc, mattis ac suscipit sed, pulvinar non ligula.Ut ut diam eget tellus tempus elementum.Donec sollicitudin pharetra diam.Nunc in ligula mollis, auctor magna quis, pharetra lorem.Integer eget turpis consequat, dictum tellus vel, bibendum quam.Aliquam commodo, elit in dictum gravida, elit erat egestas quam, vel mollis eros velit sed ipsum.Sed non pretium sem, vel ullamcorper quam.Praesent eu eros laoreet, sodales tortor vel, facilisis velit.Donec sed lorem ullamcorper, finibus sapien vitae, volutpat enim.Donec auctor malesuada tincidunt.Sed non commodo libero. <br/><br/>Donec tempor semper quam vitae interdum.Suspendisse sit amet felis vestibulum, aliquet ligula eget, condimentum risus.Vivamus bibendum mauris non ipsum fermentum eleifend.Morbi tristique imperdiet massa, eu tincidunt tellus rutrum quis.Aliquam sapien mi, lacinia vel lacinia id, varius non orci.Suspendisse vel rutrum metus.Donec vitae tristique mi.Nulla facilisi.Aliquam condimentum massa in tellus ullamcorper posuere.'
  },
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
  ],
  departments: [
    {
      title: 'Registrar',
      desc:
        'The ULS library provides joint library services to seminary students at Lutheran Theological Southern Seminary through the Eastern Cluster of Lutheran Seminaries.',
      path: '/registrar',
      image: require('../../assets/placeholders/departments/library.jpg'),
      id: guid()
    },
    {
      title: 'Comms',
      desc:
        'The ULS library provides joint library services to seminary students at Lutheran Theological Southern Seminary through the Eastern Cluster of Lutheran Seminaries.',
      path: '/communications',
      image: require('../../assets/placeholders/departments/library.jpg'),
      id: guid()
    },
    {
      title: 'IT',
      desc:
        'The ULS library provides joint library services to seminary students at Lutheran Theological Southern Seminary through the Eastern Cluster of Lutheran Seminaries.',
      path: '/it',
      image: require('../../assets/placeholders/departments/library.jpg'),
      id: guid()
    },
    {
      title: 'Library',
      desc:
        'The ULS library provides joint library services to seminary students at Lutheran Theological Southern Seminary through the Eastern Cluster of Lutheran Seminaries.',
      path: '/library',
      image: require('../../assets/placeholders/departments/library.jpg'),
      id: guid()
    },
    {
      title: 'HR',
      desc:
        'The ULS library provides joint library services to seminary students at Lutheran Theological Southern Seminary through the Eastern Cluster of Lutheran Seminaries.',
      path: '/hr',
      image: require('../../assets/placeholders/departments/library.jpg'),
      id: guid()
    }
  ],
  president: {
    header: 'Dr. Richard Green',
    subHeader: 'INTERIM PRESIDENT, UNITED LUTHERAN SEMINARY',
    desc:
      'Dr. Richard Green has enjoyed an accomplished career in higher education, both as a teacher and administrator. Most recently, he served as interim president of Lincoln University, Pennsylvania’s oldest degree-granting historically black college/university (HBCU), with a student enrollment of 2,100.',
    image: require('../../assets/placeholders/president.jpg'),
    path: '/president'
  },
  tradition: {
    header: '192 Years of Tradition',
    path: '/tradition',
    image: require('../../assets/images/about-bg.jpg')
  }
}
