import { getData } from '@/utils/fetch_page'
import { Metadata } from 'next'
import StrapiImage from '@/app/_components/strapi_image'
import RelatedPosts from '@/app/_components/related_posts'
import PageLoad from '@/app/_animations/page_load'
import Link from 'next/link'
import { categoryHelper } from '@/lib/utils'
import Parallax from '@/app/_animations/parallax'
import Author from '@/app/_components/author'
import BlocksRendererClient from '@/app/_components/block_renderer_client'
import SocialShare from '@/app/_components/social_share'
import { getStrapiURL } from '@/lib/utils'

type Props = {
  params: {
    slug: string
  }
}

export const generateMetadata = async (props: Props) => {
  const { params } = props
  const { slug } = params
  const endpoint = `/api/posts/${slug}?populate=deep,3`;
  const data = await getData(endpoint)
  const { title, heroImage, publishedDate, author, category } = data

  return {
    title: `${title} | BitEnvious Blog`,
    description: `Post detail for ${title}`,
    openGraph: {
      title: `${title} | BitEnvious Blog`,
      description: `Post detail for ${title}`,
      type: 'article',
      url: `https://www.bitenvio.us/blog/${slug}`,
      images: [
        {
          url: `${getStrapiURL()}${heroImage?.formats?.xxlarge?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.xxlarge?.url}`,
          width: heroImage?.formats?.xxlarge?.width,
          height: heroImage?.formats?.xxlarge?.height,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.xlarge?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.xlarge?.url}`,
          width: heroImage?.formats?.xlarge?.width,
          height: heroImage?.formats?.xlarge?.height,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.large?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.large?.url}`,
          width: heroImage?.formats?.large?.width,
          height: heroImage?.formats?.large?.height,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.medium?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.medium?.url}`,
          width: heroImage?.formats?.medium?.width,
          height: heroImage?.formats?.medium?.height,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.small?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.small?.url}`,
          width: heroImage?.formats?.small?.width,
          height: heroImage?.formats?.small?.height,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.xsmall?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.xsmall?.url}`,
          width: heroImage?.formats?.xsmall?.width,
          height: heroImage?.formats?.xsmall?.height,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.thumbnail?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.thumbnail?.url}`,
          width: heroImage?.formats?.thumbnail?.width,
          height: heroImage?.formats?.thumbnail?.height,
        },
      ],
      article: {
        publishedTime: publishedDate,
        authors: [author?.Name],
        section: category?.Name,
        tags: [category?.Name],
      },
    }
  }
}

export default async function PostDetails(props: Props) {
  const { params } = props
  const { slug } = params
  const endpoint = `/api/posts/${slug}?populate=deep,3`;
  const data = await getData(endpoint)
  const { title, content, heroImage, timeToRead, publishedDate, author, category, id } = data
  const { categoryGradient } = categoryHelper(category?.slug)
  const formattedPublishedDate = new Date(publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  return (
    <PageLoad offset={100}>
      <main>
        <section className='m-auto flex md:min-h-[40vh] w-screen overflow-clip'>
          <div className='mx-auto mt-auto mb-8 md:mb-[150px] size-full max-w-screen-lg px-4'>
            <div className='text-center'>
              <h1 className='text-2xl font-normal md:text-5xl mt-32 md:mt-48'>
                {title}
              </h1>
            </div>
          </div>
        </section>
        <section className="post-showcase">
          <div className='mx-auto max-w-[1340px] overflow-clip max-h-80 md:max-h-[50vh] md:mt-[-100px] rounded-md drop-shadow-md'>
            <Parallax>
              <StrapiImage
                src={heroImage?.formats?.xxlarge?.url ? heroImage?.formats?.xxlarge?.url : heroImage?.formats?.xlarge?.url}
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
        <div className='m-auto max-w-[1340px] sm:grid md:grid-cols-3 lg:grid-cols-4'>
          <div className='my-8 p-8 md:pt-16 lg:pt-24 relative'>
            <div className='top-32 lg:sticky'>
              {author && (
                <Author {...author} categoryGradient={categoryGradient} />
              )}
              <div>
                <div className='flex gap-8 md:block'>
                  {timeToRead && (
                    <div className='mb-2 md:mb-8'>
                      <div>Read time:</div>
                      <div className='md:mb-2 text-md font-medium lg:text-xl'>{`${timeToRead} min`}</div>
                    </div>
                  )}
                  {publishedDate && (
                    <div className='mb-2 md:mb-8'>
                      <div>Date:</div>
                      <div className='md:mb-2 text-md font-medium lg:text-xl'>{formattedPublishedDate}</div>
                    </div>
                  )}
                  {category && (
                    <div className='mb-2 md:mb-8'>
                      <div>Category:</div>
                      <div className='my-2 text-lg font-medium lg:text-xl'>
                        <Link href={`/blog/category/${category.slug}`}>
                          <span className={`bg-gradient-to-tl ${categoryGradient} py-1 px-4 rounded-sm text-white mr-2 whitespace-nowrap`}>
                            {category.Name}
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <SocialShare />
              </div>
            </div>
          </div>
          <div className='px-8 md:col-span-2 lg:col-span-3'>
            <div className='blog-detail block-renderer md:py-16 lg:py-24'>
              <BlocksRendererClient content={content} />
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
