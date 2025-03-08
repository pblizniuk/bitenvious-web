import InfoSectionWidget from '@/app/_widgets/info_section'
import CTAWidget from '@/app/_widgets/cta'
import Testimonials from '@/app/_widgets/testimonials'
import Carousel from '@/app/_components/carousel'
import ProductScroll from '@/app/_widgets/product_scroll'
import TitleSectionWidget from '@/app/_widgets/title_section'
import TwoColumnInfoWidget from '@/app/_widgets/two_column_info'
import WhoWeAreWidget from '@/app/_widgets/who_we_are'
import CoreTeamWidget from '@/app/_widgets/core_team'
import TwoColumnAdvanced from '@/app/_widgets/two_column_advanced'
import ProjectsWidget from '@/app/_widgets/projects'
import BlogTeaser from '@/app/_widgets/blog_teaser'
import FeaturedProject from '@/app/_widgets/featured_project'

export function blockRenderer(block: any) {
  switch (block.__component) {
    case 'page-elements.info-section':
      return <InfoSectionWidget {...block} />
    case 'page-elements.cta-section':
      return <CTAWidget {...block} />
    case 'page-elements.testimonials-component':
      return <Testimonials {...block} />
    case 'page-elements.image-carousel':
      return <Carousel {...block} />
    case 'page-elements.product-scroll':
      return <ProductScroll {...block} />
    case 'page-elements.title-section':
      return <TitleSectionWidget {...block} />
    case 'page-elements.two-column-info-section':
      return <TwoColumnInfoWidget {...block} />
    case 'page-elements.who-we-are':
      return <WhoWeAreWidget {...block} />
    case 'page-elements.core-team':
      return <CoreTeamWidget {...block} />
    case 'page-elements.two-column-advanced':
      return <TwoColumnAdvanced {...block} />
    case 'page-elements.projects':
      return <ProjectsWidget {...block} />
    case 'page-elements.blog-teaser':
      return <BlogTeaser {...block} />
    case 'page-elements.featured-project':
      return <FeaturedProject {...block} />
    default:
      return null
  }
}
