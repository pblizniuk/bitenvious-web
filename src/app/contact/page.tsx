import PageLoad from '../_animations/page_load'
import PageTitle from '../_components/page_title'

export default function Contact() {
  const pageTitleContent = {
    Title: 'Contact Us',
    Description: 'Want to talk? We\'re all ears',
  }

  return (
    <main>
      <PageTitle pageTitleContent={pageTitleContent} headingClassNames='bg-gradient-to-r from-yellow-600 to-amber-400 bg-clip-text text-transparent' />
      <PageLoad offset={50}>
        <section>
          <div className='m-auto max-w-[1340px] sm:grid md:grid-cols-3'>
            <div className='border-t p-8 pt-16 lg:pt-24 lg:text-right'>
              <div className='top-32 lg:sticky'>
                <h2 className='mb-6 text-2xl font-medium lg:text-3xl'>
                  Our Info
                </h2>
                <div className='text-lg font-light lg:text-xl'>
                  <p>
                    Ready to bring your digital vision to life and reshape your online presence? Take the first step by contacting us today!
                  </p>
                </div>
              </div>
            </div>
            <div className='pr-8 md:col-span-2'>
              <div className='sm:grid md:grid-cols-2'>
                <div className='border-l border-t p-8 lg:border-t-0 lg:pt-24 text-md md:text-lg'>
                  <h3 className='mb-3 font-bold text-stone-700 lg:text-xl'>
                    Email
                  </h3>
                  <div className='mb-4 flex flex-col last:mb-0 xl:flex-row xl:items-end xl:gap-3'>
                    <a
                      href='mailto:info@bitenvio.us'
                      target=''
                      className='x-link fs-p link-contact leading-6'
                    >
                      info@bitenvio.us
                    </a>
                  </div>
                </div>
                <div className='border-l border-t p-8 lg:border-t-0 lg:pt-24'>
                  <h3 className='mb-3 font-bold text-stone-700 lg:text-xl'>
                    Phone
                  </h3>
                  <div className='mb-4 flex flex-col last:mb-0 xl:flex-row xl:items-end xl:gap-3'>
                    <a
                      href='tel:+18478770375'
                      target=''
                      className='leading-6'
                    >
                      847.877.0375
                    </a>
                  </div>
                </div>
                <div className='border-l border-t p-8 sm:col-span-2'>
                  <h3 className='mb-3 text-lg font-bold text-stone-700 lg:text-xl'>
                    We&apos;re eager to talk with you!
                  </h3>
                  <p className='text-lg'>
                    Are you ready to elevate your online presence and make a
                    lasting impact in the digital world? Look no further! Our team
                    of experts is here to transform your vision into a stunning
                    reality. Whether you&apos;re a small business looking to establish
                    your online presence or a large corporation in need of a
                    website refresh, we&apos;ve got you covered. With a focus on
                    creativity, functionality, and user experience, we&apos;ll work
                    closely with you to craft a bespoke website that captures the
                    essence of your brand and engages your audience. Don&apos;t settle
                    for mediocrity when you can have excellence. Reach out today
                    to schedule a consultation and let&apos;s take your online presence
                    to new heights!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='m-auto max-w-[1340px] sm:grid md:grid-cols-3'>
            <div className='border-t p-8 pt-16 lg:pt-24 lg:text-right'>
              <div className='top-32 lg:sticky'>
                <h2 className='mb-6 text-2xl font-medium lg:text-3xl'>
                  Contact Us
                </h2>
                <div className='text-lg font-light lg:text-xl'>
                  <p>
                    Are you ready to transform your digital dreams into reality and revolutionize your online presence? Contact us today to take the first step!
                  </p>
                </div>
              </div>
            </div>
            <div className='pr-8 md:col-span-2'>
              <div className={`border-l border-t p-8 `}>
                <div className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
                  <form action='#' className='sm:grid md:grid-cols-2 gap-x-4 gap-y-5 items-start'>
                    <div>
                      <input
                        type='text'
                        id='name'
                        className='focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block  w-full rounded-lg border border-gray-500 p-3 text-sm placeholder-gray-400 shadow-sm'
                        placeholder='Name*'
                        required
                      />
                    </div>
                    <div>
                      <input
                        type='email'
                        id='email'
                        className='focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block  w-full rounded-lg border  border-gray-500 p-3  text-sm placeholder-gray-400 shadow-sm'
                        placeholder='Email*'
                        required
                      />
                    </div>
                    <div>
                      <input
                        type='tel'
                        id='phone'
                        className='focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block  w-full rounded-lg border  border-gray-500 p-3  text-sm placeholder-gray-400 shadow-sm'
                        placeholder='Phone*'
                        required
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        id='company'
                        className='focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block  w-full rounded-lg border  border-gray-500 p-3  text-sm placeholder-gray-400 shadow-sm'
                        placeholder='Company'
                        required
                      />
                    </div>
                    <div className='sm:col-span-2'>
                      <textarea
                        id='message'
                        rows={6}
                        className='focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block  w-full rounded-lg border  border-gray-500 p-3  text-sm placeholder-gray-400 shadow-sm'
                        placeholder='Message*'
                      ></textarea>
                    </div>
                    <button
                      type='submit'
                      className='text-lg block transform rounded-full border-2 border-gray-900 bg-gray-900 px-8 py-4 font-medium text-white shadow transition duration-300 hover:scale-105'
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLoad>
    </main>
  )
}
