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
        className="group block relative mb-4 md:mb-8 lg:mb-16 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br from-black to-transparent after:opacity-80 rounded-md overflow-hidden cursor-pointer shadow-md shadow-stone-300">
        <StrapiImage
          src={url}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          loading="lazy"
          className="block w-full transform overflow-hidden group-hover:scale-110 transition-all duration-[5000ms]"
        />
        <div className="absolute inset-0 p-4 md:p-8 text-white flex flex-col z-10">{/* ease-in-view transition-all translate-y-12  [&.visible]:translate-y-0 out-expo duration-500 */}
          <div className="relative">
            <h3 className="text-lg md:text-xl lg:text-4xl mb-3 leading-tight">{title}</h3>
            {/* <p className="text-sm md:text-xl mb-3">{formattedDate}</p> */}
          </div>
          <div className="mt-auto">
            {category.Name && <span className={`bg-gradient-to-br ${categoryGradient} py-1 px-4 rounded-sm text-white text-sm md:text-xl mr-2`}>{category.Name}</span>}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Post