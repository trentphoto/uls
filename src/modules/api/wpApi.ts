import axios from 'axios'
import { wpApiBase } from '../../config'

const wpApiEndpoints = {
  getAllPosts: async () => {
    try {
      const result = await axios.get(
        `${wpApiBase}/posts?per_page=100&categories=2`
      )
      return result.data as WPPost[]
    } catch (error) {
      throw error.response.data
    }
  },
  getAllPages: async () => {
    try {
      const result = await axios.get(`${wpApiBase}/pages?per_page=100`)
      return result.data as WPPage[]
    } catch (error) {
      throw error.response.data
    }
  },
  getPage: async (slug: string) => {
    try {
      console.log(slug)
      const result = await axios.get(`${wpApiBase}/pages?slug=${slug}`)

      return result.data[0] as WPPage
    } catch (error) {
      throw error.response.data
    }
  },
  getSubPages: async (id: number) => {
    try {
      const result = await axios.get(`${wpApiBase}/pages?parent=${id}`)
      return result.data as WPSubPage[]
    } catch (error) {
      throw error.response.data
    }
  }
}

export default wpApiEndpoints
