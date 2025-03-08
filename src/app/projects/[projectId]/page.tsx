import { getData } from '@/utils/fetch_page'
import { Metadata } from 'next'
import clsx from 'clsx'
import StrapiImage from '@/app/_components/strapi_image'
import Link from 'next/link'
import Parallax from '@/app/_animations/parallax'
import PageLoad from '@/app/_animations/page_load'
import { blockRenderer } from '@/utils/block_renderer'
import BlocksRendererClient from '@/app/_components/block_renderer_client'
import { getStrapiURL } from '@/lib/utils'

type Props = {
  params: {
    projectId: string
  }
}

export const generateMetadata = async (props: Props) => {
  const { params } = props
  const { projectId } = params
  const endpoint = `/api/projects/${projectId}?populate=deep,3`
  const data = await getData(endpoint)
  const { title, subTitle, heroImage, slug } = data

  return {
    title: `${title} | BitEnvious`,
    description: `Project: ${subTitle}`,
    openGraph: {
      title: `${title} | BitEnvious`,
      description: `Project detail for ${title}`,
      type: 'article',
      url: `https://bitenvio.us/projects/${slug}`,
      images: [
        {
          url: `${getStrapiURL()}${heroImage?.formats?.xxlarge?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.xxlarge?.url}`,
          width: heroImage?.formats?.xxlarge?.width,
          height: heroImage?.formats?.xxlarge?.height,
          type: 'image',
          alt: `${subTitle}| BitEnvious`,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.xlarge?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.xlarge?.url}`,
          width: heroImage?.formats?.xlarge?.width,
          height: heroImage?.formats?.xlarge?.height,
          type: 'image',
          alt: `${subTitle}| BitEnvious`,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.large?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.large?.url}`,
          width: heroImage?.formats?.large?.width,
          height: heroImage?.formats?.large?.height,
          type: 'image',
          alt: `${subTitle}| BitEnvious`,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.medium?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.medium?.url}`,
          width: heroImage?.formats?.medium?.width,
          height: heroImage?.formats?.medium?.height,
          type: 'image/jpeg',
          alt: `${subTitle}| BitEnvious`,
        },
      ],
    },
  }
}

export default async function ProjectDetails(props: Props) {
  const { params } = props
  const { projectId } = params
  const endpoint = `/api/projects/${projectId}?populate=deep,3`
  const data = await getData(endpoint)
  const {
    title,
    subTitle,
    projectInfo,
    clientName,
    projectUrl,
    servicesProvided,
    technologiesUsed,
    projectYear,
    heroImage,
    introGradientColor,
    dynamicContent,
  } = data
  const services = servicesProvided?.split(',') || []

  const formattedprojectYear = new Date(projectYear).toLocaleDateString(
    'en-US',
    { year: 'numeric' },
  )
  const classes = clsx(
    'text-xl font-thin text-white md:mt-4 md:block md:text-3xl',
  )

  return (
    <main>
      <section
        className={`m-auto flex h-[80vh] w-screen overflow-clip bg-gradient-to-br ${introGradientColor ?? ''}`}
      >
        <div className="mx-auto mt-32 size-full max-w-screen-2xl">
          <PageLoad offset={50}>
            <div className="flex p-8 md:p-12 md:pb-0 lg:px-16 lg:pt-20">
              <div className="mt-auto max-w-3xl">
                <h1 className="text-2xl font-normal text-white md:text-5xl">
                  {title}
                </h1>
                <p className={classes}>{subTitle}</p>
              </div>
            </div>
          </PageLoad>
          <div className="col-span-2 w-[300vw] -translate-x-1/2 pt-24 md:w-full md:translate-x-0">
            <PageLoad offset={-40}>
              <Parallax>
                <StrapiImage
                  src={heroImage?.formats?.xxlarge?.url}
                  alt={title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  loading="lazy"
                  className="object-contain drop-shadow-md"
                />
              </Parallax>
            </PageLoad>
          </div>
        </div>
      </section>
      <PageLoad offset={50}>
        <section className="projects-intro">
          <div className="relative mx-auto my-12 max-w-[1340px] gap-5 px-4 md:grid md:grid-cols-4 md:p-0 lg:my-24">
            <div className="sidebar mb-16 pl-4">
              <div className="top-32 grid grid-cols-2 gap-3 md:block lg:sticky">
                <div>
                  <h4 className="mb-2 text-2xl">Client</h4>
                  <p className="mb-4">{clientName}</p>
                </div>
                <div>
                  <h4 className="mb-2 text-2xl">Services</h4>
                  <ul className="mb-4">
                    {services &&
                      services.map((service: string, i) => (
                        <li key={i}>{service}</li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-2xl">Project Year</h4>
                  <p className="mb-4">{formattedprojectYear}</p>
                </div>
                <div>
                  <h4 className="mb-2 text-2xl">Technologies</h4>
                  <p className="mb-4">{technologiesUsed}</p>
                </div>
                {projectUrl && (
                  <div className="col-span-2 mb-4 mt-8 text-center md:text-left">
                    <Link
                      href={projectUrl}
                      target="_blank"
                      className="inline-block rounded-full border border-stone-900 bg-stone-900 px-6 py-2 text-lg font-semibold  text-white shadow transition-all duration-500"
                    >
                      View Live
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="project-detail col-span-3 md:px-12 lg:px-16">
              <BlocksRendererClient content={projectInfo} />
            </div>
          </div>
        </section>
        {dynamicContent.map((block) => blockRenderer(block))}
      </PageLoad>
    </main>
  )
}
