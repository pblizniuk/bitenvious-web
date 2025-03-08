import StrapiImage from '../strapi_image'

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

const Author = (props: AuthorProps) => {
  const { name, photo, categoryGradient } = props

  return (
    <div className="relative mb-8 rounded-md border xl:mr-12">
      <div className="mb-4 mt-8 flex flex-col content-center items-center">
        <StrapiImage
          src={photo?.formats?.xsmall?.url}
          alt={name}
          width={110}
          height={110}
          className="relative z-10 rounded-full border-2 border-white bg-white shadow-lg"
        />
        <h4 className="mt-4 text-stone-600">Post by:</h4>
        <p className="font-rock-salt text-lg font-medium lg:text-lg">{name}</p>
        <div
          className={`absolute bg-gradient-to-br ${categoryGradient} left-2 right-2 top-2 z-0 h-2/5 rounded-md`}
        ></div>
      </div>
    </div>
  )
}

export default Author
