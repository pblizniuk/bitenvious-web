import { getData } from '@/utils/fetch_page'
import { Metadata } from 'next'
import clsx from 'clsx'
import StrapiImage from '@/app/_components/strapi_image'
import Link from 'next/link'
import TwoColumnAdvanced from '@/app/_widgets/two_column_advanced'
import Parallax from '@/app/_animations/parallax'
import PageLoad from '@/app/_animations/page_load'
import { blockRenderer } from '@/utils/block_renderer'
import BlocksRendererClient from '@/app/_components/block_renderer_client'

type Props = {
  params: {
    projectId: string
  }
}

export const generateMetadata = (props: Props): Metadata => {
  const { params } = props
  const { projectId } = params
  return {
    title: projectId,
    description: `Project detail for ${projectId}`,
  }
}

export default async function ProjectDetails(props: Props) {
  const { params } = props
  const { projectId } = params
  const endpoint = `/api/projects/${projectId}?populate=deep,2`;
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
          <div className='flex p-8 md:p-12 lg:px-16'>
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
          <div className='col-span-2 pt-24'>
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
          <div className='mx-auto max-w-[1340px] sm:grid md:grid-cols-4 gap-5 my-12 lg:my-24 relative px-4 md:p-0'>
            <div className='sidebar '>
              <div className="top-32 lg:sticky">
                <h4 className='text-2xl mb-2'>Client</h4>
                <p className='mb-4'>{clientName}</p>
                <h4 className='text-2xl mb-2'>Services</h4>
                <ul className='mb-4'>
                  {services && services.map((service: string, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
                <h4 className='text-2xl mb-2'>Project Year</h4>
                <p className='mb-4'>{formattedprojectYear}</p>
                <h4 className='text-2xl mb-2'>Technologies</h4>
                <p className='mb-4'>{technologiesUsed}</p>

                <p className='mt-8 mb-4'><Link href={projectUrl} target='_blank' className='inline-block rounded-full border px-6 py-2 text-white shadow transition-all duration-500  border-stone-900 bg-stone-900 font-semibold text-lg'>View Live</Link></p>
              </div>
            </div>
            <div className='project-detail col-span-3 md:px-12 lg:px-16'>
              <BlocksRendererClient content={projectInfo} />
            </div>
          </div>
        </section>
        {dynamicContent.map((block) => blockRenderer(block))}
        {/* <section className='projects-intro'>
          <TwoColumnAdvanced />
        </section> */}
      </PageLoad>
    </main>
  )
}
