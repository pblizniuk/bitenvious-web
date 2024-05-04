
import { getData } from '@/utils/fetch_page'
import PageTitle from '@/app/_components/page_title'
import TitleSectionWidget from '@/app/_widgets/title_section'
import CTAWidget from '@/app/_widgets/cta'
import PostsWidget from '@/app/_widgets/posts'
import PageLoad from '../_animations/page_load'
import CategoriesMenu from '@/app/_widgets/categories_menu'

export const metadata = {
  title: 'Blog | BitEnvious',
  description: 'Bits and pieces from the team at BitEnvious',
}

export default async function Blog() {
  const endpoint = '/api/posts?populate[heroImage][fields][0]=formats&fields[0]=title&fields[2]=slug&pagination[pageSize]=20&pagination[page]=1&publicationState=live&locale[0]=en&fields[1]=publishedDate&populate[category][fields][0]=Name&populate[category][fields][1]=slug&sort=publishedDate:DESC'
  const { data: postsData } = await getData(endpoint)
  const pageTitleContent = {
    Title: 'Blog',
    Description: 'Industry insights and updates',
  }

  const ctaContent = {
    Title: 'Are you ready to take your idea to the next level?',
    ButtonText: 'Connect with Our Team',
    ButtonLink: '/contact',
  }

  return (
    <main>
      <PageTitle pageTitleContent={pageTitleContent} headingClassNames='bg-gradient-to-r from-gray-200 to-stone-400 bg-clip-text text-transparent' />
      <PageLoad offset={50}>
        <TitleSectionWidget
          title="A <span class='font-rock-salt'>Bit</span> of Inspiration & Expertise"
          description="Discover the latest trends in web development, design, and digital marketing on our blog. Learn how to grow your business and achieve your goals with expert tips, tutorials, and case studies. Whether you want to work with us, or you're just looking for inspiration, there's something for everyone. Dive in and let us know what you think!"
          classNames='lg:text-lg font-normal'
        />
        <CategoriesMenu />
        <PostsWidget postsData={postsData} />
        <section className='callout'>
          <CTAWidget {...ctaContent} />
        </section>
      </PageLoad>
    </main>
  )
}
