import React, { Component } from 'react'
import { Text, Header, Buttons } from '..'

import './events.css'

interface SlideProps {
  data: EventSlide
}

interface SliderProps {
  slides: EventSlide[]
}

interface SliderState {
  currentIndex: number
}

const SlideContent = ({ data }: SlideProps) => (
  <div className="content">
    <Header type="h2">{data.title}</Header>
    <Text size="medium" color="white">
      {`${data.startDate} - ${data.endDate}`}
    </Text>
    <div className="divider" />
    <Text size="small" color="white" className="desc">
      {data.desc}
    </Text>
  </div>
)

export default class UpcomingSlider extends Component<
  SliderProps,
  SliderState
> {
  state = {
    currentIndex: 0
  }

  countUp = () => {
    const { currentIndex } = this.state
    if (currentIndex + 1 > this.props.slides.length - 1) {
      this.setState({ currentIndex: 0 })
    } else {
      this.setState({ currentIndex: currentIndex + 1 })
    }
  }

  countDown = () => {
    const { currentIndex } = this.state
    if (currentIndex - 1 < 0) {
      this.setState({ currentIndex: this.props.slides.length - 1 })
    } else {
      this.setState({ currentIndex: currentIndex - 1 })
    }
  }

  render() {
    const { slides } = this.props
    const { currentIndex } = this.state
    console.log(slides[currentIndex])
    return (
      <div className="upcoming-slider page-wrapper">
        <div className="slider">
          <div className="left col">
            {slides[currentIndex].img && (
              <img src={slides[currentIndex].img} alt="" className="main" />
            )}
          </div>
          <div className="right col">
            <div className="container">
              <Text
                style="italic"
                color="white"
                className="upcoming-tag"
                size="extra-small"
              >
                Upcoming Events
              </Text>
              <SlideContent data={slides[currentIndex]} />
              <Buttons.Outline size="medium">View All Events</Buttons.Outline>
              <Text size="extra-small" color="white" className="counter">
                {`${currentIndex + 1} / ${slides.length}`}
              </Text>
            </div>
            <img
              src={require('../../assets/svgs/arrow.svg')}
              alt="Arrow"
              onClick={this.countDown}
              className="arrow left"
            />
            <img
              src={require('../../assets/svgs/arrow.svg')}
              alt="Arrow"
              onClick={this.countUp}
              className="arrow right"
            />
          </div>
        </div>
      </div>
    )
  }
}
