import { getData } from '@/utils/fetch_page'
import Link from 'next/link'
import StrapiImage from '@/app/_components/strapi_image'
import TitleSectionWidget from '@/app/_widgets/title_section'
import { categoryHelper } from '@/lib/utils'

type RelatedPostsProps = {
  category: {
    Name: string,
    id: number
  },
  parentPostId: string
}

const RelatedPosts = async (props: RelatedPostsProps) => {
  const { category: parentCategory, parentPostId } = props
  const categoryName = parentCategory.Name
  const endpoint = `/api/posts?filters[$and][0][category][Name][$eq]=${categoryName}&filters[$and][0][id][$ne]=${parentPostId}&pagination[pageSize]=3&populate=deep,2`
  const { data } = await getData(endpoint)
  const { categoryGradient } = categoryHelper(parentCategory.slug)

if (data.length === 0) { return null }
  return (
    <div className='mx-auto max-w-[1340px] mb-16 lg:mb-32 border-t'>
      <TitleSectionWidget
          title={`More on ${categoryName}`}
        />
      <div className='grid md:grid-cols-3 gap-2 md:gap-8 m-4'>
        {data && data.map((post, i) => {
          const { title, heroImage, publishedDate, category } = post
          const formattedDate = new Date(publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
          const { url } = heroImage.formats.medium
          const postUrl = `/blog/${post.slug}`
          return (
            <Link
              key={i}
              href={postUrl}
              className="group block relative after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br from-black to-transparent after:opacity-80 rounded-md overflow-hidden cursor-pointer shadow-md shadow-stone-300"> {}
              <StrapiImage
                src={url}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                className="transform h-full w-full overflow-hidden group-hover:scale-110 transition-all duration-500 object-cover"
              />
              <div className="absolute inset-0 p-4 md:p-8 text-white flex flex-col z-10">
                <div className="relative">
                  <h3 className="text-md lg:text-xl mb-3">{title}</h3>
                  <p className="text-sm lg:text-lg font-sm font-light">{formattedDate}</p>
                </div>
                <div className="mt-auto">
                  {category && <span key={i} className={`bg-gradient-to-br ${categoryGradient} py-1 px-4 rounded-sm text-white mr-2`}>{category.Name}</span>}
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