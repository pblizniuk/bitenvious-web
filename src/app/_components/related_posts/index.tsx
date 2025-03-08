import { getData } from '@/utils/fetch_page'
import Link from 'next/link'
import StrapiImage from '@/app/_components/strapi_image'
import TitleSectionWidget from '@/app/_widgets/title_section'
import { categoryHelper } from '@/lib/utils'

type RelatedPostsProps = {
  category: {
    Name: string
    slug: string
    id: number
  }
  parentPostId: string
}

const RelatedPosts = async (props: RelatedPostsProps) => {
  const { category: parentCategory, parentPostId } = props
  const categoryName = parentCategory.Name
  const endpoint = `/api/posts?filters[$and][0][category][Name][$eq]=${categoryName}&filters[$and][0][id][$ne]=${parentPostId}&pagination[pageSize]=3&populate=deep,2`
  const { data } = await getData(endpoint)
  const { categoryGradient } = categoryHelper(parentCategory.slug)

  if (data.length === 0) {
    return null
  }
  return (
    <div className="mx-auto mb-16 max-w-[1340px] border-t lg:mb-32">
      <TitleSectionWidget title={`More on ${categoryName}`} />
      <div className="m-4 grid gap-2 md:grid-cols-3 md:gap-8">
        {data &&
          data.map((post, i) => {
            const { title, heroImage, publishedDate, category } = post
            // const formattedDate = new Date(publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            const { url } = heroImage.formats.medium
            const postUrl = `/blog/${post.slug}`
            return (
              <Link
                key={i}
                href={postUrl}
                className="group relative block max-h-[350px] cursor-pointer overflow-hidden rounded-md from-black to-transparent shadow-md shadow-stone-300 after:absolute after:inset-0 after:bg-gradient-to-br after:opacity-80 after:content-['']"
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
            )
          })}
      </div>
    </div>
  )
}

export default RelatedPosts
