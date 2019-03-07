import React from 'react'
import { Text, Header, Buttons } from '..'
import { withRouter, RouteComponentProps } from 'react-router'
import { guid } from '../../utils/generateID'
import moment from 'moment'

const arrow = require('../../assets/svgs/arrow-gray.svg')
const placeholder = require('../../assets/placeholders/blog/blog-2.jpg')

interface Props extends RouteComponentProps {
  data: { [key: string]: WPPost }
}

interface State {
  currentSlide: number
  slides: WPPost[]
}

class ArticleSlider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      currentSlide: 0,
      slides: this.renderArticles().slice(0, 5)
    }
  }

  updateCurrentSlide = (value: number) => {
    this.setState({ currentSlide: value })
  }

  renderArticles = () => {
    const { data } = this.props
    const array: WPPost[] = []
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        array.push(data[key])
      }
    }
    return array
  }

  countUp = () => {
    const { currentSlide } = this.state
    if (currentSlide + 1 > this.state.slides.length - 1) {
      this.setState({ currentSlide: 0 })
    } else {
      this.setState({ currentSlide: currentSlide + 1 })
    }
  }

  countDown = () => {
    const { currentSlide } = this.state
    if (currentSlide - 1 < 0) {
      this.setState({ currentSlide: this.state.slides.length - 1 })
    } else {
      this.setState({ currentSlide: currentSlide - 1 })
    }
  }

  render() {
    const { slides, currentSlide } = this.state
    const slide = slides[currentSlide]
    return (
      <div className="articles-slider">
        <div className="slide">
          {slide.acf.thumbnail_image ? (
            <img
              src={slide.acf.thumbnail_image.sizes.large}
              alt={slide.acf.thumbnail_image.name}
            />
          ) : (
            <img src={placeholder} alt="Placeholder" />
          )}
          <div className="content">
            <Text
              className="tag"
              weight="bold"
              size="extra-small"
              color="black"
            >
              FEATURE ARTICLE
            </Text>
            <div className="divider" />
            <Header colored type="h3">
              {slide.title.rendered}
            </Header>
            <Text className="author" size="small" color="grey" style="italic">
              {`${moment(slide.date).format('MMMM Do YYYY')} - ${slide.author}`}
            </Text>
            <Buttons.NoOutline
              onClick={() =>
                this.props.history.push(`/united-media/${slide.slug}`)
              }
            >
              Read More
            </Buttons.NoOutline>
          </div>
        </div>
        <div className="controller">
          <div onClick={this.countDown} className="arrow left">
            <img src={arrow} alt="Left Arrow" />
          </div>
          {slides.map((slide: WPPost, index: number) => (
            <Pager
              key={guid()}
              current={currentSlide}
              value={index}
              setCurrentSlide={this.updateCurrentSlide}
            />
          ))}
          <div onClick={this.countUp} className="arrow right">
            <img src={arrow} alt="Right Arrow" />
          </div>
        </div>
      </div>
    )
  }
}

interface PageProps {
  value: number
  current: number
  setCurrentSlide: (value: number) => void
}

const Pager = ({ current, value, setCurrentSlide }: PageProps) => (
  <div
    onClick={() => setCurrentSlide(value)}
    className={current === value ? 'pager current' : 'pager'}
  >
    {value + 1}
  </div>
)

export default withRouter(ArticleSlider)
