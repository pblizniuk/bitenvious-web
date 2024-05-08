import Link from 'next/link'
import StrapiImage from '@/app/_components/strapi_image'
import ScrollInView from '@/app/_animations/scroll_in_view'

const Project = ({ project }) => {
  const { title, slug, servicesProvided, technologiesUsed, teaserImage, introGradientColor } = project
  const technologies = technologiesUsed?.split(', ')
  return (
    <ScrollInView>
      <div className='group project-tile mb-16'>
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
        <div className="product-info">
          <Link href={`/projects/${slug}`}>
            <h3 className='text-xl font-normal md:text-3xl mb-4 leading-loose'>{title}</h3>
          </Link>
          <div className='text-lg md:text-xl mb-4'>{servicesProvided}</div>
          <div className='mt-8'>{technologies.length && technologies.map((technology, i) => (
            <span key={i} className="inline-block border border-stone-500 bg-opacity-60 py-1 px-4 rounded-full text-stone-500 mr-2 mb-2">
              {technology}
            </span>
          ))}</div>
        </div>
      </div>
    </ScrollInView>
  )
}

export default Project