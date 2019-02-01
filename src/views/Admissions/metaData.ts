interface metaData {
  hero: {
    header: string
    subheader: string
    image: string
  }
  facts: {
    header: string
    desc: string
    facts: TFactTypes[]
  }
}

export const metaData: metaData = {
  hero: {
    header: 'A Seminary for the 21st Century.',
    subheader: 'Full-tuition scholarships. Flexible learning options.',
    image:
      'https://unitedlutheranseminary.edu/wp-content/uploads/2019/02/United-Lutheran-Seminary.jpg'
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
  }
}
