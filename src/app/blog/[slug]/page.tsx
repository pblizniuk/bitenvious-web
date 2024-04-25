import { getData } from '@/utils/fetch_page'
import { Metadata } from 'next'
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer'
import StrapiImage from '@/app/_components/strapi_image'
import RelatedPosts from '@/app/_components/related_posts'
import PageLoad from '@/app/_animations/page_load'
import Link from 'next/link'
import { categoryHelper } from '@/lib/utils'
import Parallax from '@/app/_animations/parallax'
import Author from '@/app/_components/author'

type Props = {
  params: {
    slug: string
  }
}

export const generateMetadata = (props: Props): Metadata => {
  const { params } = props
  const { slug } = params
  return {
    title: slug,
    description: `Post detail for ${slug}`,
  }
}

export default async function PostDetails(props: Props) {
  const { params } = props
  const { slug } = params
  const endpoint = `/api/posts/${slug}?populate=deep,3`;
  const data = await getData(endpoint)
  const { title, content, heroImage, timeToRead, publishedDate, author, category, id } = data
  const { categoryGradient } = categoryHelper(category?.id)
  const blocksContent: BlocksContent = content
  const formattedPublishedDate = new Date(publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  return (
    <PageLoad offset={100}>
      <main>
        <section className='m-auto flex min-h-[40vh] w-screen overflow-clip'>
          <div className='mx-auto mt-auto mb-[150px] size-full max-w-screen-lg'>
            <div className='text-center'>
              <h1 className='text-2xl font-normal md:text-5xl mt-48'>
                {title}
              </h1>
            </div>
          </div>
        </section>
        <section className="post-showcase">
          <div className='mx-auto max-w-[1340px] overflow-clip max-h-[50vh] md:mt-[-100px] rounded-md drop-shadow-md'>
            <Parallax>
              <StrapiImage
                src={heroImage?.formats?.xxlarge?.url}
                alt={heroImage?.alternativeText || title}
                aria-description={heroImage?.caption || title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
                className='parallax object-contain rounded-md'
              />
            </Parallax>
          </div>
        </section>
        <div className='m-auto max-w-[1340px] sm:grid md:grid-cols-4'>
          <div className='p-8 pt-16 lg:pt-24 relative'>
            <div className='top-32 lg:sticky'>
              {author && (
                <Author {...author} categoryGradient={categoryGradient} />
              )}
              <div className='ml-4'>
                {timeToRead && (
                  <div className='mb-8'>
                    <div>Read time:</div>
                    <div className='mb-2 text-lg font-medium lg:text-xl'>{`${timeToRead} min`}</div>
                  </div>
                )}
                {publishedDate && (
                  <div className='mb-8'>
                    <div>Date:</div>
                    <div className='mb-2 text-lg font-medium lg:text-xl'>{formattedPublishedDate}</div>
                  </div>
                )}
                {category && (
                  <div className='mb-8'>
                    <div>Category:</div>
                    <div className='my-2 text-lg font-medium lg:text-xl'>
                      <Link href={`/blog/category/${category.slug}`}>
                        <span className={`bg-gradient-to-tl ${categoryGradient} py-1 px-4 rounded-sm text-white mr-2`}>
                          {category.Name}
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='pr-8 md:col-span-3'>
            <div className='blog-detail py-16 lg:py-24'>
              <BlocksRenderer content={blocksContent} />
            </div>
          </div>
        </div>
        <section className='related-posts'>
          <RelatedPosts category={category} parentPostId={id} />
        </section>
      </main>
    </PageLoad>
  )
}
