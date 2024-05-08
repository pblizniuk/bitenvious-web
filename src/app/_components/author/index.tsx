import StrapiImage from "../strapi_image"

type AuthorProps = {
  name: string
  categoryGradient: string
  photo: {
    formats: {
      xsmall: {
        url: string
      }
    }
  }
}

const Author = (props:AuthorProps) => {
  const { name, photo, categoryGradient } = props

  return (
    <div className="relative border mb-8 rounded-md xl:mr-12">
      <div className='flex flex-col content-center items-center mt-8 mb-4'>
        <StrapiImage
          src={photo?.formats?.xsmall?.url}
          alt={name}
          width={110}
          height={110}
          className='bg-white rounded-full border-2 border-white shadow-lg relative z-10'
        />
        <h4 className='mt-4 text-stone-600'>Post by:</h4>
        <p className='text-lg font-medium lg:text-lg font-rock-salt'>{name}</p>
        <div className={`absolute bg-gradient-to-br ${categoryGradient} h-2/5 top-2 left-2 right-2 z-0 rounded-md`}></div>
      </div>
    </div>
  )
}

export default Author