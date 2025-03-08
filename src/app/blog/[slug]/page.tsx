import { getData, getDataNoCache } from '@/utils/fetch_page'
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
  const endpoint = `/api/posts/${slug}?populate=deep,3`
  const data = await getData(endpoint)
  const { title, heroImage, publishedDate, author, category } = data

  return {
    title: `${title} | Strategic Web Design & Digital Marketing in Knoxville, TN | BitEnvious`,
    description: `Post detail for ${title}`,
    openGraph: {
      title: `${title} | BitEnvious Blog`,
      description: `Post detail for ${title}`,
      type: 'article',
      url: `https://bitenvio.us/blog/${slug}`,
      images: [
        {
          url: `${getStrapiURL()}${heroImage?.formats?.xxlarge?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.xxlarge?.url}`,
          width: heroImage?.formats?.xxlarge?.width,
          height: heroImage?.formats?.xxlarge?.height,
          type: 'image',
          alt: `Post detail for ${title}`,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.xlarge?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.xlarge?.url}`,
          width: heroImage?.formats?.xlarge?.width,
          height: heroImage?.formats?.xlarge?.height,
          type: 'image',
          alt: `Post detail for ${title}`,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.large?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.large?.url}`,
          width: heroImage?.formats?.large?.width,
          height: heroImage?.formats?.large?.height,
          type: 'image',
          alt: `Post detail for ${title}`,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.medium?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.medium?.url}`,
          width: heroImage?.formats?.medium?.width,
          height: heroImage?.formats?.medium?.height,
          type: 'image/jpeg',
          alt: `Post detail for ${title}`,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.small?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.small?.url}`,
          width: heroImage?.formats?.small?.width,
          height: heroImage?.formats?.small?.height,
          type: 'image/jpeg',
          alt: `Post detail for ${title}`,
        },
        {
          url: `${getStrapiURL()}${heroImage?.formats?.thumbnail?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.formats?.thumbnail?.url}`,
          width: heroImage?.formats?.thumbnail?.width,
          height: heroImage?.formats?.thumbnail?.height,
          type: 'image/jpeg',
          alt: `Post detail for ${title}`,
        },
        {
          url: `${getStrapiURL()}${heroImage?.url}`,
          secure_url: `${getStrapiURL()}${heroImage?.url}`,
          width: heroImage?.width,
          height: heroImage?.height,
          type: 'image/jpeg',
          alt: `Post detail for ${title}`,
        },
      ],
      article: {
        publishedTime: publishedDate,
        authors: [author?.Name],
        section: category?.Name,
        tags: [category?.Name],
      },
    },
  }
}

export default async function PostDetails(props: Props) {
  const { params } = props
  const { slug } = params
  const endpoint = `/api/posts/${slug}?populate=deep,3`
  const data = await getDataNoCache(endpoint)
  const {
    title,
    content,
    heroImage,
    timeToRead,
    publishedDate,
    author,
    category,
    id,
  } = data
  const { categoryGradient } = categoryHelper(category?.slug)
  const formattedPublishedDate = new Date(publishedDate).toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'short', day: 'numeric' },
  )
  return (
    <PageLoad offset={100}>
      <main>
        <section className="m-auto flex w-screen overflow-clip md:min-h-[40vh]">
          <div className="mx-auto mb-8 mt-auto size-full max-w-screen-lg px-4 md:mb-[150px]">
            <div className="text-center">
              <h1 className="mt-32 text-2xl font-normal md:mt-48 md:text-5xl">
                {title}
              </h1>
            </div>
          </div>
        </section>
        <section className="post-showcase">
          <div className="mx-auto max-h-80 max-w-[1340px] overflow-clip rounded-md drop-shadow-md md:mt-[-100px] md:max-h-[50vh]">
            <Parallax>
              <StrapiImage
                src={
                  heroImage?.formats?.xxlarge?.url
                    ? heroImage?.formats?.xxlarge?.url
                    : heroImage?.formats?.xlarge?.url
                }
                alt={heroImage?.alternativeText || title}
                aria-description={heroImage?.caption || title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
                className="parallax rounded-md object-contain"
              />
            </Parallax>
          </div>
        </section>
        <div className="m-auto max-w-[1340px] sm:grid md:grid-cols-3 lg:grid-cols-4">
          <div className="relative my-8 p-8 md:pt-16 lg:pt-24">
            <div className="top-32 lg:sticky">
              {author && (
                <Author {...author} categoryGradient={categoryGradient} />
              )}
              <div>
                <div className="grid grid-cols-2 gap-2 md:block">
                  {timeToRead && (
                    <div className="mb-2 md:mb-8">
                      <div>Read time:</div>
                      <div className="text-md font-medium md:mb-2 lg:text-xl">{`${timeToRead} min`}</div>
                    </div>
                  )}
                  {publishedDate && (
                    <div className="mb-2 md:mb-8">
                      <div>Last updated on:</div>
                      <div className="text-md font-medium md:mb-2 lg:text-xl">
                        {formattedPublishedDate}
                      </div>
                    </div>
                  )}
                  {category && (
                    <div className="col-span-2 mb-2 md:mb-8">
                      <div>Category:</div>
                      <div className="my-2 text-lg font-medium lg:text-xl">
                        <Link href={`/blog/category/${category.slug}`}>
                          <span
                            className={`bg-gradient-to-tl ${categoryGradient} mr-2 whitespace-nowrap rounded-sm px-4 py-1 text-white`}
                          >
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
          <div className="px-8 md:col-span-2 lg:col-span-3">
            <div className="blog-detail block-renderer md:py-16 lg:py-24">
              <BlocksRendererClient content={content} />
            </div>
          </div>
        </div>
        <section className="related-posts">
          <RelatedPosts category={category} parentPostId={id} />
        </section>
      </main>
    </PageLoad>
  )
}
