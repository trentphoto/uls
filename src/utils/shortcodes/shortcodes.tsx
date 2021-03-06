import * as React from 'react'
import { Link } from 'react-router-dom'
import renderHTML from 'react-render-html'

interface RRProps {
  data: {
    original: string
    params: { path: string; label: string }
    code: 'link'
  }
}

interface ButtonProps {
  data: {
    original: string
    params: { path: string; label: string }
    code: 'button'
  }
}

export const InlineLinkShortCode = ({ data }: RRProps) => {
  window.scrollTo(0, 0)
  return <Link to={data.params.path}>{renderHTML(data.params.label)}</Link>
}

export const ButtonShortCode = ({ data }: ButtonProps) => {
  window.scrollTo(0, 0)
  return (
    <Link className="wp-block-button__link" to={data.params.path}>
      {renderHTML(data.params.label)}
    </Link>
  )
}
