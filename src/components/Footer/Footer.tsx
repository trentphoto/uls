import React from 'react'
import './footer.css'
import { Text } from '..'
import { Link } from 'react-router-dom'
import { metaData, ILinkSection, ILink } from './metaData'
import { guid } from '../../utils/generateID'

const Footer = () => {
  return (
    <footer>
      <UpperContainer />
      <LowerContainer data={metaData.linkSections} />
      <img
        src={require('../../assets/images/footer.jpg')}
        alt="footer bg"
        className="footer-bg"
      />
      <div className="bottom-bar">
        <Text size="extra-small" color="white">
          Copyright © 2018 United Lutheran Seminary
        </Text>
      </div>
    </footer>
  )
}

const UpperContainer = () => (
  <div className="upper-container">
    <div className="page-wrapper flexed">
      <div className="left col">
        <div className="logo">
          <img src={require('../../assets/svgs/logo-mid.svg')} alt="logo" />
          <div className="content">
            <div className="l-header">United Lutheran Seminary</div>
            <div className="l-text">Gettysburg + Philadelphia</div>
          </div>
        </div>
        <Text size="small" color="black">
          United Lutheran Seminary is the newest graduate and professional
          school in theological education with the deepest roots.
        </Text>
        <div className="contact">
          <a href="tel:717-338-3000" className="method phone">
            717-338-3000
          </a>
          <a href="mailto:info@ULS.edu" className="method email">
            info@ULS.edu
          </a>
        </div>
      </div>
      <div className="right col">
        <div className="location">
          <Text size="medium" weight="bold" color="black">
            Gettysburg Campus
          </Text>
          <Text size="small" color="grey">
            61 Seminary Ridge, Gettysburg, PA 17325
          </Text>
        </div>
        <div className="location">
          <Text size="medium" weight="bold" color="black">
            Philadelphia Campus
          </Text>
          <Text size="small" color="grey">
            7301 Germantown Ave, Philadelphia, PA 19119
          </Text>
        </div>
      </div>
    </div>
  </div>
)

const LowerContainer = ({ data }: { data: ILinkSection[] }) => (
  <div className="lower-container page-wrapper">
    <div className="links">
      {data.map((section: ILinkSection) => (
        <section key={guid()}>
          <Text size="medium" color="black" weight="bold">
            {section.header}
          </Text>
          {section.links.map((link: ILink) => (
            <Link key={guid()} to={link.path}>
              {link.title}
            </Link>
          ))}
        </section>
      ))}
    </div>
  </div>
)

export default Footer
