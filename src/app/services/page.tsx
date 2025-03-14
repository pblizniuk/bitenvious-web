import { getData } from '@/utils/fetch_page'
import PageTitle from '@/app/_components/page_title'
import PageLoad from '../_animations/page_load'
import { blockRenderer } from '@/utils/block_renderer'

export const metadata = {
  title: 'Professional Web Design & Digital Marketing Services | BitEnvious',
  description:
    'Explore top-tier web design, digital marketing, and strategic consulting services at BitEnvious. Boost your brand with our expert solutions tailored for success in Knoxville and beyond.',
}

export default async function Services() {
  // get page data from cms
  const endpoint = '/api/services-page?populate=deep,4'

  // model data for page
  const data = await getData(endpoint)
  const { title = '', description = '', blocks } = data
  const pageTitleContent = {
    Title: title,
    Description: description,
  }

  return (
    <main>
      <PageTitle
        pageTitleContent={pageTitleContent}
        headingClassNames="bg-gradient-to-r from-lime-600 to-lime-500 bg-clip-text text-transparent"
      />
      <PageLoad offset={50}>
        {blocks.map((block) => blockRenderer(block))}
      </PageLoad>
    </main>
  )
}
