import clsx from 'clsx'

type TitleSectionProps = {
  title?: string
  description?: string
  classNames?: string
}

const TitleSectionWidget = (props: TitleSectionProps) => {
  const { title, description, classNames } = props
  const classes = clsx('max-w-4xl text-xl font-light lg:text-2xl', classNames)
  const customDescription = description?.replace('BitEnvious', '<span class="font-rock-salt">BitEnvious</span>') || ''

  return (
    <div className='container mx-auto flex max-w-[1340px] flex-col items-center px-4 text-center py-12 lg:pt-24 text-stone-900'>
      {title && <h2 className='mb-6 text-2xl font-normal md:text-5xl' dangerouslySetInnerHTML={{__html: title}} />}
      {description && <div className={classes} dangerouslySetInnerHTML={{__html: customDescription}} />}
    </div>
  )
}

export default TitleSectionWidget
