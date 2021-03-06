// Generated by https://quicktype.io

declare interface WPPage {
  id: number
  date: string
  date_gmt: string
  guid: GUID
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: GUID
  content: Content
  excerpt: Content
  author: number
  featured_media: number
  parent: number
  menu_order: number
  comment_status: string
  ping_status: string
  template: string
  meta: any[]
  acf: ThirdAcf
  _links: Links
}

declare interface Links {
  self: About[]
  collection: About[]
  about: About[]
  author: Author[]
  replies: Author[]
  'version-history': VersionHistory[]
  'predecessor-version': PredecessorVersion[]
  'wp:attachment': About[]
  curies: Cury[]
}

declare interface About {
  href: string
}

declare interface Author {
  embeddable: boolean
  href: string
}

declare interface Cury {
  name: string
  href: string
  templated: boolean
}

declare interface PredecessorVersion {
  id: number
  href: string
}

declare interface VersionHistory {
  count: number
  href: string
}

declare interface Content {
  rendered: string
  protected: boolean
}

declare interface GUID {
  rendered: string
}
