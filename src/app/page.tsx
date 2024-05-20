import { getData } from '../utils/fetch_page'
import PageLoad from '@/app/_animations/page_load'
import HomePageHero from '@/app/_components/home_page_hero'
import { blockRenderer } from '@/utils/block_renderer'
import FeaturedProject from '@/app/_widgets/featured_project'

export default async function Home() {
  const endpoint = '/api/homepage?populate=deep,6'
  const data = await getData(endpoint)

  const {
    Title,
    Description,
    HeroImage: { url },
    blocks
  } = data

  return (
    <main>
      <section className='section-hero'>
        <HomePageHero Title={Title} Description={Description} url={url} />
      </section>
      <PageLoad offset={100}>
      {blocks.map((block) => blockRenderer(block))}
      </PageLoad>
    </main>
  )
}
