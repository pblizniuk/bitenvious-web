
import ScrollInView from '@/app/_animations/scroll_in_view'
import { getDataNoCache } from '@/utils/fetch_page'
import StrapiImage from '@/app/_components/strapi_image'
import Link from 'next/link'
import TitleSectionWidget from '@/app/_widgets/title_section'

const FeaturedProject = async (Props) => {
  const { title: sectionTitle } = Props
  const endpoint = '/api/projects?fields[2]=technologiesUsed&fields[3]=servicesProvided&populate[teaserImage][fields][0]=formats&fields[0]=title&fields[1]=slug&fields[4]=introGradientColor&sort=projectYear:DESC'
  const { data } = await getDataNoCache(endpoint)
  const { title, slug, servicesProvided, technologiesUsed, teaserImage, introGradientColor } = data?.[0]
  const technologies = technologiesUsed?.split(', ') || []
  const services = servicesProvided?.split(', ') || []

  return (
    <ScrollInView>
    <section className="featured_project">
    <TitleSectionWidget
        title={sectionTitle}
      />
      <div className='m-auto max-w-[1340px] sm:grid md:grid-cols-3 gap-8 lg:gap-16 p-4 border-b'>
          <div>
          <div className="text-xl font-normal lg:text-3xl mb-3">{title}</div>
          <ul className='mb-4 pretty-list'>
                    {services && services.map((service: string, i) => (
                      <li key={i}>{service}</li>
                    ))}
                    {technologies && technologies.map((technology: string, i) => (
                      <li key={i}>{technology}</li>
                    ))}
                  </ul>
          <Link
            className='hidden md:inline-block rounded-full border-2 px-6 py-3 text-xl font-semibold text-white shadow border-gray-900 bg-gray-900 mb-auto'
            href='/projects'
          >
            See All Projects
          </Link>
          </div>
          <div className='group project-tile col-span-2'>
            <Link href={`/projects/${slug}`} className={`block relative  after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-br ${introGradientColor} after:opacity-0 group-hover:after:opacity-70 rounded-md overflow-hidden cursor-pointer shadow-md shadow-stone-300 after:transition-all after:duration-1000 mb-8`}>
              <StrapiImage
                src={teaserImage?.formats?.medium?.url}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
                className='block object-contain relative drop-shadow-md group-hover:scale-110 transition-all duration-[5000ms] rounded-md'
              />
              <div className="absolute inset-0 flex items-center justify-center z-10 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                </svg>

              </div>
            </Link>
            <Link
              className='inline-block md:hidden rounded-full border-2 px-6 py-3 text-xl font-semibold text-white shadow border-gray-900 bg-gray-900 mb-auto'
              href='/projects'
            >
              See All Projects
            </Link>
          </div>
      </div>
    </section>
    </ScrollInView>
  )
}

export default FeaturedProject