import { MetadataRoute } from 'next'
import { getData } from '@/utils/fetch_page'

export const revalidate = 604800 // 1 week
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsEndpoint = '/api/posts?fields[0]=slug&pagination[pageSize]=200&pagination[page]=1&publicationState=live'
  const { data: postsData } = await getData(postsEndpoint)
  const categoriesEndpoint = `/api/categories?fields[0]=slug`
  const { data: categoryData } = await getData(categoriesEndpoint)
  const projectsEndpoint = '/api/projects?fields[0]=slug'
  const {data: projectsData} = await getData(projectsEndpoint)

  const posts = postsData.map((post) => {
    return {
      url: `${process.env.NEXT_WEBSITE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'monthly',
    }
  })

  const categories = categoryData.map((category) => {
    return {
      url: `${process.env.NEXT_WEBSITE_URL}/blog/category/${category.slug}`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'monthly',
    }
  })

  const projects = projectsData.map((project) => {
    return {
      url: `${process.env.NEXT_WEBSITE_URL}/projects/${project.slug}`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'monthly',
    }
  })

  const siteURL = process.env.NEXT_WEBSITE_URL || 'https://bitenvio.us'
  return [
    {
      url: `${siteURL}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteURL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteURL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteURL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteURL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteURL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...posts,
    ...categories,
    ...projects
  ]
}