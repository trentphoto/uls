import React from 'react'
import { Header, Text } from '..'

interface FloatingTabProps {
  tabOne: TabProps
  tabTwo: TabProps
  tabThree: TabProps
}

interface TabProps {
  header: string
  desc: string
}

const FloatingTabs = ({ tabOne, tabTwo, tabThree }: FloatingTabProps) => {
  return (
    <div className="page-wrapper floating-tabs">
      <div className="content-container">
        <Tab {...tabOne} />
        <Tab {...tabTwo} />
        <Tab {...tabThree} />
      </div>
    </div>
  )
}

const Tab = ({ header, desc }: TabProps) => (
  <div className="tab">
    <img src={require('../../assets/svgs/location.svg')} alt="Marker" />
    <div className="content">
      <Header type="h4">{header}</Header>
      <Text size="small" color="grey">
        {desc}
      </Text>
    </div>
  </div>
)

export default FloatingTabs
