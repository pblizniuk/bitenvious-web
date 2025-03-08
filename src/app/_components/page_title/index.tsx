'use client'
import clsx from 'clsx'
import { motion } from 'framer-motion'

type PageTitleProps = {
  classNames?: string
  headingClassNames?: string
  pageTitleContent: {
    Title: string
    Description: string
  }
}

const PageTitle = (props: PageTitleProps) => {
  const { pageTitleContent, classNames, headingClassNames } = props
  const { Title, Description } = pageTitleContent
  const headingClasses = clsx(
    'text-6xl md:text-8xl font-semibold leading-tight md:leading-tight',
    headingClassNames,
    { 'text-white': !headingClassNames },
  )
  const classes = clsx(
    'text-xl md:text-3xl text-white md:mt-4 md:block',
    classNames,
  )

  return (
    <section className="m-auto flex w-screen bg-gradient-to-br from-stone-800 to-stone-900 md:h-[40vh]">
      <div className="mx-auto mt-auto size-full max-w-screen-xl">
        <div className="flex size-full p-8 md:p-12 lg:px-16">
          <div className="mt-32 max-w-3xl md:mt-auto">
            <motion.main
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.5 }}
            >
              <h1 className={headingClasses}>{Title}</h1>
              <p className={classes}>{Description}</p>
            </motion.main>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageTitle
