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
    }
    tabTwo: {
      header: string
      desc: string
    }
    tabThree: {
      header: string
      desc: string
    }
  }
  articles: IArticle[]
  facts: {
    header: string
    desc: string
    facts: TFactTypes[]
  }
}

export const metaData: MetaData = {
  hero: {
    header: 'Unifying, Learning, and Serving',
    subHeader:
      'Welcome to United Lutheran Seminary, a School for Church and World',
    image: require('../../assets/images/home-bg.jpg')
  },
  tabs: {
    tabOne: {
      header: 'Visit',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    tabTwo: {
      header: 'Apply',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    tabThree: {
      header: 'Give',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    }
  },
  articles: [
    {
      title:
        'Joint Statement from United Lutheran Seminary Board of Trustees and Dr. Theresa F. Latini',
      image: require('../../assets/placeholders/blog/blog-1.jpg'),
      date: 'October 21st, 2018',
      url: ''
    },
    {
      title: 'New Faculty and Staff Welcome and Congratulations',
      image: require('../../assets/placeholders/blog/blog-2.jpg'),
      date: 'October 21st, 2018',
      url: ''
    },
    {
      title: 'United Lutheran Seminary Receives $30 Million Anonymous Gift',
      image: require('../../assets/placeholders/blog/blog-3.jpg'),
      date: 'October 21st, 2018',
      url: ''
    }
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
  }
}
