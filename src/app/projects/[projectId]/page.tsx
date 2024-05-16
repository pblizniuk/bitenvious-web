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
  const endpoint = `/api/projects/${projectId}?populate=deep,3`;
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
        }
      ]
    }
  }
}

export default async function ProjectDetails(props: Props) {
  const { params } = props
  const { projectId } = params
  const endpoint = `/api/projects/${projectId}?populate=deep,3`;
  const data = await getData(endpoint)
  const { title, subTitle, projectInfo, clientName, projectUrl, servicesProvided, technologiesUsed, projectYear, heroImage, introGradientColor, dynamicContent } = data
  const services = servicesProvided?.split(',') || []

  const formattedprojectYear = new Date(projectYear).toLocaleDateString('en-US', { year: 'numeric' })
  const classes = clsx('text-xl font-thin text-white md:mt-4 md:block md:text-3xl')

  return (
    <main>
      <section className={`m-auto flex h-[80vh] w-screen bg-gradient-to-br overflow-clip ${introGradientColor ?? ''}`}>
        <div className='mx-auto mt-32 size-full max-w-screen-2xl'>
          <PageLoad offset={50}>
            <div className='flex p-8 md:p-12 md:pb-0 lg:pt-20 lg:px-16'>
              <div className='mt-auto max-w-3xl'>
                <h1 className='text-2xl font-normal md:text-5xl text-white'>
                  {title}
                </h1>
                <p className={classes}>
                  {subTitle}
                </p>
              </div>
            </div>
          </PageLoad>
          <div className='col-span-2 pt-24 w-[300vw] md:w-full -translate-x-1/2 md:translate-x-0'>
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
                  className='object-contain drop-shadow-md'
                />
              </Parallax>
            </PageLoad>
          </div>
        </div>
      </section>
      <PageLoad offset={50}>
        <section className='projects-intro'>
          <div className='mx-auto max-w-[1340px] md:grid md:grid-cols-4 gap-5 my-12 lg:my-24 relative px-4 md:p-0'>
            <div className='sidebar mb-16 pl-4'>
              <div className="top-32 lg:sticky grid grid-cols-2 gap-3 md:block">
                <div>
                  <h4 className='text-2xl mb-2'>Client</h4>
                  <p className='mb-4'>{clientName}</p>
                </div>
                <div>
                <h4 className='text-2xl mb-2'>Services</h4>
                  <ul className='mb-4'>
                    {services && services.map((service: string, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className='text-2xl mb-2'>Project Year</h4>
                  <p className='mb-4'>{formattedprojectYear}</p>
                </div>
                <div>
                  <h4 className='text-2xl mb-2'>Technologies</h4>
                  <p className='mb-4'>{technologiesUsed}</p>
                </div>
                {projectUrl && (
                  <div className='mt-8 mb-4 col-span-2 text-center md:text-left'>
                    <Link href={projectUrl} target='_blank' className='inline-block rounded-full border px-6 py-2 text-white shadow transition-all duration-500  border-stone-900 bg-stone-900 font-semibold text-lg'>View Live</Link>
                  </div>
                )}
              </div>
            </div>
            <div className='project-detail col-span-3 md:px-12 lg:px-16'>
              <BlocksRendererClient content={projectInfo} />
            </div>
          </div>
        </section>
        {dynamicContent.map((block) => blockRenderer(block))}
      </PageLoad>
    </main>
  )
}
