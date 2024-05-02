import Icon from '@/app/_components/icons'
import { getData } from '@/utils/fetch_page'
import { categoryHelper } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  title?: string
}

const CategoriesMenu = async (props:Props) => {
  const { title = 'Browse by Category' } = props
  const endpoint = '/api/categories'
  const { data } = await getData(endpoint)

  return (
    <div className='container mx-auto max-w-[1440px] my-12 lg:mb-24 px-4'>
      <h2 className='mb-6 text-2xl font-normal md:text-5xl text-center'>{title}</h2>
      <div className='grid md:grid-cols-5 gap-4'>
        {data && data.map((category, i) => {
          const { Name, slug, description } = category
          const { categoryIcon, categoryColor } = categoryHelper(category.slug)
          return (
            <Link href={`/blog/category/${slug}`} key={i} className="category-item p-4 border rounded-md flex">
                <div className="category-item-inner flex md:block justify-center items-center gap-2">
                  <div className="category-item-icon inline-block">
                    <Icon name={categoryIcon} size='24' className={`h-12 w-12 md:h-24 md:w-24 md:mb-8 ${categoryColor}`} strokeWidth='.3' />
                  </div>
                  <div className='md:flex md:flex-col md:mt-auto'>
                    <h3 className="text-lg md:text-xl">{Name}</h3>
                    <h4 className="">{description}</h4>
                  </div>
                </div>
              </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CategoriesMenu