import Link from 'next/link'
import StrapiImage from '@/app/_components/strapi_image'
import { categoryHelper } from '@/lib/utils'

const Post = ({ post }) => {
  const { title, heroImage, publishedDate, category } = post
  //const formattedDate = new Date(publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  const { url } = heroImage.formats.medium
  const postUrl = `/blog/${post.slug}`
  const { categoryGradient } = categoryHelper(category?.slug)

  return (
    <div>
      <Link
        href={postUrl}
        className="group relative mb-4 block cursor-pointer overflow-hidden rounded-md from-black to-transparent shadow-md shadow-stone-300 after:absolute after:inset-0 after:bg-gradient-to-br after:opacity-80 after:content-[''] md:mb-8 lg:mb-16"
      >
        <StrapiImage
          src={url}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          loading="lazy"
          className="block w-full transform overflow-hidden transition-all duration-[5000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 z-10 flex flex-col p-4 text-white md:p-8">
          {/* ease-in-view transition-all translate-y-12  [&.visible]:translate-y-0 out-expo duration-500 */}
          <div className="relative">
            <h3 className="mb-3 text-lg leading-tight md:text-xl lg:text-4xl">
              {title}
            </h3>
            {/* <p className="text-sm md:text-xl mb-3">{formattedDate}</p> */}
          </div>
          <div className="mt-auto">
            {category.Name && (
              <span
                className={`bg-gradient-to-br ${categoryGradient} mr-2 rounded-sm px-4 py-1 text-sm text-white md:text-xl`}
              >
                {category.Name}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Post
