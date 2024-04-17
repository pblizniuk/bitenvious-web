import { getData } from '@/hooks/fetch_page'
import PageTitle from '@/app/_components/page_title'
import PageLoad from '../_animations/page_load'
import { blockRenderer } from '@/hooks/block_renderer'

export const metadata = {
  title: 'About Us',
  description: 'About us page',
}

export default async function About() {
  // get page data from cms
  const endpoint = '/api/about?populate=deep,3'

  // model data for page
  const data = await getData(endpoint)
  const { title = '', description = '', AboutPageContent } = data
  const pageTitleContent = {
    Title: title,
    Description: description
  }

  return (
    <main>
      <PageTitle pageTitleContent={pageTitleContent} headingClassNames='bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent' />;
      <PageLoad offset={50}>
        {AboutPageContent.map((block) => blockRenderer(block))}
      </PageLoad>
    </main>
  )
}
