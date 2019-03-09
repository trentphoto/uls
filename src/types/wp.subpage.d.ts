// Generated by https://quicktype.io

declare interface WPSubPage {
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
  subpages: {
    [key: string]: WPSubPage
  }
}

declare interface Links {
  self: About[]
  collection: About[]
  about: About[]
  author: Author[]
  replies: Author[]
  'version-history': VersionHistory[]
  'predecessor-version': PredecessorVersion[]
  up: Author[]
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

declare interface ThirdAcf {
  header: string
  sub_header: string
  background_image: string | false
  background_image_overlay: boolean
  textdark: boolean
}

// declare interface BackgroundImage {
//   ID: number
//   id: number
//   title: string
//   filename: string
//   filesize: number
//   url: string
//   link: string
//   alt: string
//   author: string
//   description: string
//   caption: string
//   name: string
//   status: string
//   uploaded_to: number
//   date: string
//   modified: string
//   menu_order: number
//   mime_type: string
//   type: string
//   subtype: string
//   icon: string
//   width: number
//   height: number
//   sizes: Sizes
// }

// declare interface Sizes {
//   thumbnail: string
//   'thumbnail-width': number
//   'thumbnail-height': number
//   medium: string
//   'medium-width': number
//   'medium-height': number
//   medium_large: string
//   'medium_large-width': number
//   'medium_large-height': number
//   large: string
//   'large-width': number
//   'large-height': number
//   'post-thumbnail': string
//   'post-thumbnail-width': number
//   'post-thumbnail-height': number
// }

declare interface Content {
  rendered: string
  protected: boolean
}

declare interface GUID {
  rendered: string
}
