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
import Image from 'next/image'

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
        {/* <section>
          <div className="mx-auto max-w-[1340px] sm:grid lg:grid-cols-2 mb-8 lg:mb-16"><div className="flex flex-row gap-6 md:px-6 md:items-center border-t"><h3 className="hidden md:block text-2xl font-normal md:text-3xl -rotate-180 whitespace-nowrap writing-tb leading-none">Built for Performance</h3><div className="p-8 flex flex-col self-stretch md:border-l md:pt-16"><h2 className="block text-4xl font-normal md:text-5xl mb-8 leading-loose">Developed for Speed</h2><h3 className="md:hidden text-2xl font-normal md:text-3xl mb-8">Built for Performance</h3><p className="mb-8 md:text-lg leading-relaxed">Behind every visually stunning website lies a robust foundation of clean, efficient code that ensures optimal performance and reliability. Our team understands that slow-loading pages or buggy functionality can frustrate users and drive them away, tarnishing your brand reputation and hindering your business objectives. That's why we prioritize writing code that is not only elegant and maintainable but also optimized for speed and efficiency. By adhering to industry best practices and leveraging the latest technologies, we ensure that every website we build not only looks great but also delivers lightning-fast performance and seamless functionality across all devices. Because in today's fast-paced digital landscape, every millisecond counts, and superior code performance is the key to staying ahead of the competition and delighting your audience.

          </p></div></div><div className="flex flex-row gap-6 md:px-6 md:items-center border-t"><h3 className="hidden md:block text-2xl font-normal md:text-3xl -rotate-180 whitespace-nowrap writing-tb leading-none">User Focused Design</h3><div className="p-8 flex flex-col self-stretch md:border-l md:pt-16"><h2 className="block text-4xl font-normal md:text-5xl mb-8 leading-loose">Design Done Right</h2><h3 className="md:hidden text-2xl font-normal md:text-3xl mb-8">User Focused Design</h3><p className="mb-8 md:text-lg leading-relaxed">We understand firsthand the critical importance of great design in capturing and retaining audience attention. Our experience has shown us that exceptional design isn't just about aesthetics; it's about creating intuitive user experiences that resonate with visitors and drive engagement. A well-designed website not only communicates your brand identity effectively but also establishes credibility and trust with your audience. From the layout and navigation to the color scheme and typography, every element plays a crucial role in shaping the user's perception of your brand. That's why we prioritize thoughtful design in everything we do, ensuring that each website we create not only looks visually stunning but also functions seamlessly across devices. Because when design is done right, it becomes a powerful tool for connecting with your audience, driving conversions, and ultimately, achieving your business goals.</p></div></div></div>
        </section> */}
        {/* <section className='projects-details'>
          <div className='mx-auto max-w-[1340px] sm:grid md:grid-cols-4 gap-5 my-12 lg:my-24 relative px-4 md:p-0'>
            <div className='sidebar '>
              <div className="top-32 lg:sticky">
                <h4 className='text-2xl mb-2'>Typography & Colors</h4>
              </div>
            </div>
            <div className='project-detail col-span-3 md:px-12 lg:px-16'>
              <p className='mb-8 md:text-lg leading-relaxed'>
                In crafting the website, we meticulously selected fonts and colors to infuse a sense of whimsy and playfulness, ensuring it resonates with our young and energetic audience. Opting for the quirky and charming font "Gluten" adds a touch of personality and fun to the design, mirroring the spirit of creativity and imagination that defines our brand. Paired with a vibrant color palette featuring cheerful hues of blue, and yellow, with pops of energetic orange, the design exudes a kid-friendly vibe that fosters a sense of joy and excitement. These elements not only enhance visual appeal but also contribute to a delightful and engaging user experience, inviting visitors to explore and interact with the site in a lighthearted and enjoyable manner.
              </p>
              <Image src='/assets/fun&games-fonts-colors.jpg' alt='typography and colors' width='1920' height='1080' />
            </div>
          </div>
        </section> */}
        {dynamicContent.map((block) => blockRenderer(block))}
      </PageLoad>
    </main>
  )
}
