import ScrollInView from '@/app/_animations/scroll_in_view'
import { getDataNoCache } from '@/utils/fetch_page'
import StrapiImage from '@/app/_components/strapi_image'
import Link from 'next/link'
import TitleSectionWidget from '@/app/_widgets/title_section'

const FeaturedProject = async (Props) => {
  const { title: sectionTitle } = Props
  const endpoint =
    '/api/projects?fields[2]=technologiesUsed&fields[3]=servicesProvided&populate[teaserImage][fields][0]=formats&fields[0]=title&fields[1]=slug&fields[4]=introGradientColor&sort=projectYear:DESC'
  const { data } = await getDataNoCache(endpoint)
  const {
    title,
    slug,
    servicesProvided,
    technologiesUsed,
    teaserImage,
    introGradientColor,
  } = data?.[0]
  const technologies = technologiesUsed?.split(', ') || []
  const services = servicesProvided?.split(', ') || []

  return (
    <ScrollInView>
      <section className="featured_project">
        <TitleSectionWidget title={sectionTitle} />
        <div className="m-auto max-w-[1340px] gap-8 border-b p-4 sm:grid md:grid-cols-3 lg:gap-16">
          <div>
            <div className="mb-3 text-xl font-normal lg:text-3xl">{title}</div>
            <ul className="pretty-list mb-4">
              {services &&
                services.map((service: string, i) => (
                  <li key={i}>{service}</li>
                ))}
              {technologies &&
                technologies.map((technology: string, i) => (
                  <li key={i}>{technology}</li>
                ))}
            </ul>
            <Link
              className="mb-auto hidden rounded-full border-2 border-gray-900 bg-gray-900 px-6 py-3 text-xl font-semibold text-white shadow md:inline-block"
              href="/projects"
            >
              See All Projects
            </Link>
          </div>
          <div className="project-tile group col-span-2">
            <Link
              href={`/projects/${slug}`}
              className={`relative block  after:absolute after:inset-0 after:bg-gradient-to-br after:content-[""] ${introGradientColor} mb-8 cursor-pointer overflow-hidden rounded-md shadow-md shadow-stone-300 after:opacity-0 after:transition-all after:duration-1000 group-hover:after:opacity-70`}
            >
              <StrapiImage
                src={teaserImage?.formats?.medium?.url}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
                className="relative block rounded-md object-contain drop-shadow-md transition-all duration-[5000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-24 w-24 opacity-0 transition-all duration-500 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
            <Link
              className="mb-auto inline-block rounded-full border-2 border-gray-900 bg-gray-900 px-6 py-3 text-xl font-semibold text-white shadow md:hidden"
              href="/projects"
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
