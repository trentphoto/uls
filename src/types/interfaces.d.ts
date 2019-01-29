declare interface IDepartment {
  title: string
  desc: string
  path: string
  image: string
  id: string
}
declare interface ICampus {
  alignment: 'left' | 'right'
  header: string
  description: string
  path: string
  image: string
}

declare interface IArticle {
  image: string
  date: string
  title: string
  url: string
}

declare interface EventSlide {
  title: string
  img: string
  startDate: string
  endDate: string
  desc: string
}

declare interface Fact {
  color: FactColor
}

declare interface FactTwoHeaders extends Fact {
  type: 'centerImg'
  headerOne: string
  subHeaderOne: string
  headerTwo: string
  subHeaderTwo: string
  image: string
}

declare interface FactLowerImage extends Fact {
  type: 'lowerImg'
  header: string
  subHeader: string
  image: string
}

declare interface FactNoImage extends Fact {
  type: 'noImg'
  header: string
  subHeader: string
}
