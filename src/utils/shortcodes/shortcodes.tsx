import * as React from 'react'
import { Link } from 'react-router-dom'

interface ReactRouterShortCode {
  original: string
  params: { path: string; label: string }
  code: 'link'
}

interface Props {
  data: ReactRouterShortCode
}

export const ReactRouterShortCode = ({ data }: Props) => {
  return <Link to={data.params.path}>{data.params.label}</Link>
}
