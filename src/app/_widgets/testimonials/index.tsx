import { getData } from '@/utils/fetch_page'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ScrollInView from '@/app/_animations/scroll_in_view'

type Props = {
  title: string
  subTitle: string
}

const rating = () => (
  <div className="rating grid grid-cols-7 w-32 mb-8 justify-center items-center">
    <div className='col-span-2 leading-none'>5.0</div>
    {[...Array(5)].map((_, i) => (
      <FontAwesomeIcon icon={faStar} className="fas fa-star text-orange-400 w-4" key={i} />
    ))}
  </div>
)

const Testimonials = async (props: Props) => {
  const { title, subTitle } = props
  const endpoint = '/api/testimonials?sort=updatedAt:DESC'
  const { data } = await getData(endpoint)
  const leftSide = data.filter((testimonial, i) => i % 2 === 0)
  const rightSide = data.filter((testimonial, i) => i % 2 !== 0)

  return (
    <div className="text-white bg-gradient-to-br from-stone-800 to-stone-900 py-12 lg:py-24 mt-12 lg:mt-24">
      <div className="container mx-auto flex max-w-[1440px] flex-col items-center px-4 text-center">
        <ScrollInView>
          <h2 className='mb-6 text-2xl font-normal md:text-5xl '>
            {title}
          </h2>
          <p className='max-w-4xl text-xl font-light lg:text-2xl'>
            {subTitle}
          </p>
        </ScrollInView>
        <div className='testimonials-wrapper grid md:grid-cols-2 gap-x-8 mt-8'>
          <div className="left">
            {leftSide?.length && leftSide.map((testimonial, index) => {
              const { title, testimonialContent, companyName, clientName, clientTitle } = testimonial
              return (
                <ScrollInView>
                  <div key={index} className="testimonial p-6 bg-stone-800 mt-8 rounded-md text-left">
                    <div className="testimonial-content">
                      <div className="client">
                        <div className="client-company mb-6 text-lg font-semibold">{title}</div>
                      </div>
                      <p className="mb-6 text-lg font-light">
                        &quot;{testimonialContent}&quot;
                      </p>
                      {rating()}
                      <div className="md:flex gap-3 items-center">
                        <p className="text-lg font-light">{clientName}</p>
                        <p className="text-sm">{clientTitle}, {companyName}</p>
                      </div>
                    </div>
                  </div>
                </ScrollInView>
              )
            })}
          </div>
          <div className="right">
            {rightSide?.length && rightSide.map((testimonial, index) => {
              const { title, testimonialContent, companyName, clientName, clientTitle } = testimonial
              return (
                <ScrollInView>
                  <div key={index} className="testimonial p-6 bg-stone-800 mt-8 rounded-md text-left">
                    <div className="testimonial-content">
                      <div className="client">
                        <div className="client-company mb-6 text-lg font-semibold">{title}</div>
                      </div>
                      <p className="mb-6 text-lg font-light">
                        &quot;{testimonialContent}&quot;
                      </p>
                      {rating()}
                      <div className="md:flex gap-3 items-center">
                        <p className="text-lg font-light">{clientName}</p>
                        <p className="text-sm">{clientTitle}, {companyName}</p>
                      </div>
                    </div>
                  </div>
                </ScrollInView>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials