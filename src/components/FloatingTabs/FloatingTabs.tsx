import React from 'react'
import { Header, Text } from '..'
import './floating-tabs.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface FloatingTabProps {
  tabOne: TabProps
  tabTwo: TabProps
  tabThree: TabProps
}

interface TabProps {
  header: string
  desc: string
  link: string
  icon: IconProp
}

const FloatingTabs = ({ tabOne, tabTwo, tabThree }: FloatingTabProps) => {
  return (
    <div className="page-wrapper floating-tabs">
      <div className="content-container">
        <Tab {...tabOne} />
        <div className="divider" />
        <Tab {...tabTwo} />
        <div className="divider" />
        <Tab {...tabThree} />
      </div>
    </div>
  )
}

const Tab = ({ header, desc, link, icon }: TabProps) => (
  <Link to={link} className="tab">
    {/* <img src={require('../../assets/svgs/location.svg')} alt="Marker" /> */}
    <FontAwesomeIcon icon={icon} size="lg" className="icon" />
    <div className="content">
      <Header type="h4" colored>
        {header}
      </Header>
      <Text size="small" color="grey">
        {desc}
      </Text>
    </div>
  </Link>
)

export default FloatingTabs
