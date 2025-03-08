import PageTitle from '@/app/_components/page_title'
import { getData } from '@/utils/fetch_page'
import ProjectsWidget from '@/app/_widgets/projects'
import PageLoad from '../_animations/page_load'
import { blockRenderer } from '@/utils/block_renderer'

export const metadata = {
  title: 'Projects Showcase | BitEnvious',
  description:
    'Web development project portfolio - see some of our success stories and let us help you realize your vision. | BitEnvious',
}

export default async function Projects() {
  const endpoint = '/api/projects-page?populate=deep,3'
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
        headingClassNames="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
      />
      <PageLoad offset={50}>
        {blocks.map((block) => blockRenderer(block))}
      </PageLoad>
    </main>
  )
}
