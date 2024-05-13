import PageLoad from '@/app/_animations/page_load'
import PageTitle from '@/app/_components/page_title'
import ContactForm from '@/app/_components/contact_form'
import CalendlyEmbed from '@/app/_components/calendly_embed'
import Link from 'next/link'

export const metadata = {
  Title: 'Contact BitEnvious: Strategic Web Design & Digital Marketing in Knoxville, TN',
  Description: 'Ready to elevate your business? Contact BitEnvious in Knoxville, TN, today to discuss your web design, digital marketing, or strategic consulting needs.',
}
export default function Contact() {
  const pageTitleContent = {
    Title: 'Contact Us',
    Description: 'Want to talk? Let\'s chat now',
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
            <div className='md:pr-8 md:col-span-2'>
              <div className='sm:grid md:grid-cols-2'>
                <div className='border-l border-t p-8 lg:border-t-0 lg:pt-24 text-md md:text-lg'>
                  <h3 className='mb-3 font-medium text-stone-700 lg:text-xl'>
                    Email
                  </h3>
                  <div className='mb-4 flex flex-col last:mb-0 xl:flex-row xl:items-end xl:gap-3'>
                    <Link
                      href='mailto:info@bitenvio.us'
                      target=''
                      className='x-link fs-p link-contact leading-6 text-pink-600'
                    >
                      info@bitenvio.us
                    </Link>
                  </div>
                </div>
                <div className='border-l border-t p-8 lg:border-t-0 lg:pt-24'>
                  <h3 className='mb-3 font-medium text-stone-700 lg:text-xl'>
                    Phone
                  </h3>
                  <div className='mb-4 flex flex-col last:mb-0 xl:flex-row xl:items-end xl:gap-3'>
                    <Link
                      href='tel:+18652217515'
                      target=''
                      className='leading-6 text-pink-600'
                    >
                      865.221.7515
                    </Link>
                  </div>
                </div>
                <div className='border-l border-t p-8 sm:col-span-2'>
                  <h3 className='mb-3 text-lg font-medium text-stone-700 lg:text-xl'>
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
            <div className='md:pr-8 md:col-span-2'>
              <div className={`border-l border-t p-4 md:p-8 `}>
                <div className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
                  <ContactForm />
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
                  Schedule a Meeting
                </h2>
                <div className='text-lg font-light lg:text-xl'>
                  <p>
                    Let's chat! Schedule a meeting with us today to discuss your digital needs and take the first step towards transforming your online presence.
                  </p>
                </div>
              </div>
            </div>
            <div className='md:pr-8 md:col-span-2'>
              <div className={`border-l border-t py-8`}>
                <div className='mx-auto max-w-screen-lg'>
                  <CalendlyEmbed url="https://calendly.com/paulblizniuk/30min" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLoad>
    </main>
  )
}
