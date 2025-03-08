import Link from 'next/link'
import StrapiImage from '@/app/_components/strapi_image'
import ScrollInView from '@/app/_animations/scroll_in_view'

const Project = ({ project }) => {
  const {
    title,
    slug,
    servicesProvided,
    technologiesUsed,
    teaserImage,
    introGradientColor,
  } = project
  const technologies = technologiesUsed?.split(', ')
  return (
    <ScrollInView>
      <div className="project-tile group mb-16">
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
        <div className="product-info">
          <Link href={`/projects/${slug}`}>
            <h3 className="mb-4 text-xl font-normal leading-loose md:text-3xl">
              {title}
            </h3>
          </Link>
          <div className="mb-4 text-lg md:text-xl">{servicesProvided}</div>
          <div className="mt-8">
            {technologies.length &&
              technologies.map((technology, i) => (
                <span
                  key={i}
                  className="mb-2 mr-2 inline-block rounded-full border border-stone-500 bg-opacity-60 px-4 py-1 text-stone-500"
                >
                  {technology}
                </span>
              ))}
          </div>
        </div>
      </div>
    </ScrollInView>
  )
}

export default Project
