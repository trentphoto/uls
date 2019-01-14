import React from 'react'

interface Props {
  data: TFactTypes
}

interface TwoHeaderProps {
  data: FactTwoHeaders
}

interface NoImageProps {
  data: FactNoImage
}

interface LowerImageProps {
  data: FactLowerImage
}

const Fact = ({ data }: Props) => {
  const renderFact = (fact: TFactTypes) => {
    switch (fact.type) {
      case 'centerImg':
        return <ContentTwoHeaders data={fact} />
      case 'noImg':
        return <ContentNoImage data={fact} />
      case 'lowerImg':
        return <ContentLowerImage data={fact} />
      default:
        return null
    }
  }
  return <div className={`${data.color} fact`}>{renderFact(data)}</div>
}

const ContentTwoHeaders = ({ data }: TwoHeaderProps) => (
  <div className="content two-headers">
    <div className="upper">
      <div className="header">{data.headerOne}</div>
      <div className="sub-header">{data.subHeaderOne}</div>
    </div>
    <img src={data.image} alt={data.subHeaderOne} />
    <div className="lower">
      <div className="header">{data.headerTwo}</div>
      <div className="sub-header">{data.subHeaderTwo}</div>
    </div>
  </div>
)

const ContentLowerImage = ({ data }: LowerImageProps) => (
  <div className="content lower-img">
    <div className="header">{data.header}</div>
    <div className="sub-header">{data.subHeader}</div>
    <img src={data.image} alt={data.subHeader} />
  </div>
)

const ContentNoImage = ({ data }: NoImageProps) => (
  <div className="content no-img">
    <div className="header">{data.header}</div>
    <div className="sub-header">{data.subHeader}</div>
  </div>
)

export default Fact
