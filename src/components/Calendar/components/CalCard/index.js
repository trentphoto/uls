/* eslint-disable */
import React, { Component } from 'react'

class CalCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.startDate = new Date(props.startDate)
    this.endDate = new Date(props.endDate)
  }

  log = (e, a) => {
    e.preventDefault()
    console.log(a)
  }
  renderCampus = () => {
    switch (this.props.campus.toLowerCase()) {
      case 'both':
        return 'Both Campuses'
      case 'gettysburg':
        return 'Gettysburg Campus'
      case 'philadelphia':
        return 'Philadelphia Campus'
    }
  }

  render() {
    return (
      <a
        className={'cal-card ' + this.props.className}
        onMouseEnter={this.props.handleCardHover}
        onMouseLeave={this.props.handleCardMouseLeave}
        href={this.props.link}
      >
        <div className="cal-card__img-wrap">
          <img
            className={
              this.props.flipped
                ? 'cal-card__img cal-card__img_flipped'
                : 'cal-card__img'
            }
            src={this.props.bgurl}
          />
        </div>
        <div className="cal-card__overlay" />
        <span className="cal-card__datetime">{this.props.dateTime}</span>
        <span className="cal-card__title">{this.props.title}</span>
        <div className="cal-card__info">
          <span className="cal-card__campus">{this.renderCampus()}</span>
          <span className="cal-card__desc">{this.props.excerpt}</span>
        </div>
      </a>
    )
  }
}

export default CalCard
