import clsx from 'clsx'

type TitleSectionProps = {
  title?: string
  description?: string
  classNames?: string
}

const TitleSectionWidget = (props: TitleSectionProps) => {
  const { title, description, classNames } = props
  const classes = clsx(
    'mt-6 max-w-4xl text-lg font-light lg:text-xl',
    classNames,
  )
  const customDescription =
    description?.replace(
      'BitEnvious',
      '<span class="font-rock-salt">BitEnvious</span>',
    ) || ''

  return (
    <div className="container mx-auto flex max-w-[1340px] flex-col items-center p-8 text-center text-stone-900 md:first-line:py-12 lg:p-16 lg:pt-24">
      {title && (
        <h2
          className="text-2xl font-normal md:text-5xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {description && (
        <div
          className={classes}
          dangerouslySetInnerHTML={{ __html: customDescription }}
        />
      )}
    </div>
  )
}

export default TitleSectionWidget
