import { getData } from '@/utils/fetch_page'
import Link from 'next/link'
import StrapiImage from '@/app/_components/strapi_image'
import TitleSectionWidget from '@/app/_widgets/title_section'
import { categoryHelper } from '@/lib/utils'
import ScrollInView from '@/app/_animations/scroll_in_view'

type BlogTeaserProps = {
  title: string
}

const BlogTeaser = async (props: BlogTeaserProps) => {
  const { title } = props
  const endpoint = `/api/posts?pagination[pageSize]=3&sort=publishedDate:DESC&populate=deep,2`
  const { data } = await getData(endpoint)

  if (data.length === 0) {
    return null
  }
  return (
    <div className="mx-auto mb-16 max-w-[1340px] border-t lg:mb-32">
      <ScrollInView>
        <TitleSectionWidget title={title || 'From our Blog'} />
      </ScrollInView>
      <div className="m-4 grid gap-2 md:grid-cols-3 md:gap-8">
        {data &&
          data.map((post, i) => {
            const { title, heroImage, publishedDate, category } = post
            // const formattedDate = new Date(publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            const { url } = heroImage.formats.medium
            const postUrl = `/blog/${post.slug}`
            const { categoryGradient } = categoryHelper(category.slug)
            return (
              <div key={i}>
                <ScrollInView>
                  <Link
                    key={i}
                    href={postUrl}
                    className="group relative block cursor-pointer overflow-hidden rounded-md from-black to-transparent shadow-md shadow-stone-300 after:absolute after:inset-0 after:bg-gradient-to-br after:opacity-80 after:content-[''] md:h-[350px]"
                  >
                    {' '}
                    {}
                    <StrapiImage
                      src={url}
                      alt={title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      loading="lazy"
                      className="h-full w-full transform overflow-hidden object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 z-10 flex flex-col p-4 text-white md:p-8">
                      <div className="relative">
                        <h3 className="text-md mb-3 lg:text-2xl">{title}</h3>
                        {/* <p className="text-sm lg:text-lg font-sm font-light">{formattedDate}</p> */}
                      </div>
                      <div className="mt-auto">
                        {category && (
                          <span
                            key={i}
                            className={`bg-gradient-to-br ${categoryGradient} mr-2 whitespace-nowrap rounded-sm px-4 py-1 text-white`}
                          >
                            {category.Name}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </ScrollInView>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default BlogTeaser
