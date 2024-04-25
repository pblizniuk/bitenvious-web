import { getData } from '@/utils/fetch_page'
import { Metadata } from 'next'
import PageLoad from '@/app/_animations/page_load'
import PostsWidget from '@/app/_widgets/posts'
import PageTitle from '@/app/_components/page_title'
import { categoryHelper } from '@/lib/utils'
import CategoriesMenu from '@/app/_widgets/categories_menu'

type Props = {
  params: {
    slug: string
  }
}

export const generateMetadata = (props: Props): Metadata => {
  const { params } = props
  const { slug } = params
  return {
    title: slug,
    description: `Post detail for ${slug}`,
  }
}

export default async function Category(props: Props) {
  const { params } = props
  const { slug } = params
  const endpoint = `/api/categories?populate=deep,3&filters[$and][0][slug][$eq]=${slug}`
  const { data } = await getData(endpoint)
  const { Name, description, id, posts } = data[0]
  const { categoryGradient } = categoryHelper(id)
  const sortedPosts = posts.data.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())

  return (
    <main>
      <PageTitle pageTitleContent={{ Title: Name || 'Blog', Description: description || 'Industry insights and updates' }} headingClassNames={`bg-gradient-to-r ${categoryGradient} bg-clip-text text-transparent`} />
      <PageLoad offset={100}>
        <PostsWidget postsData={sortedPosts} />
        <CategoriesMenu title='Explore Other Categories' />
      </PageLoad>
    </main>
  )
}
