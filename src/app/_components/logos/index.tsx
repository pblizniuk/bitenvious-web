import Icon from '../../_components/icons'

const Logos = () => {
  const iconClasses = 'h-[35px] w-[35px] fill-current text-white md:h-[45px] md:w-[45px] mix-blend-overlay transition-all'
  const listClasses = 'px-4'

  return (
    <div className='logos mt-auto sm:grid sm:grid-cols-2'>
      <ul className='grid grid-cols-8 pb-6 md:col-start-2'>
        <li className={listClasses}>
          <Icon
            name='reactjs'
            color='white'
            size='50'
            className={iconClasses}
          />
        </li>
        <li className={listClasses}>
          <Icon
            name='nextjs'
            color='white'
            size='50'
            className={iconClasses}
          />
        </li>
        <li className={listClasses}>
          <Icon
            name='strapi'
            color='white'
            size='40'
            className={iconClasses}
          />
        </li>
        <li className={listClasses}>
          <Icon
            name='wordpress'
            color='white'
            size='50'
            className={iconClasses}
          />
        </li>
        <li className={listClasses}>
          <Icon
            name='woocommerce'
            color='white'
            size='50'
            className={iconClasses}
          />
        </li>
        <li className={listClasses}>
          <Icon
            name='tailwind'
            color='white'
            size='50'
            className={iconClasses}
          />
        </li>
        <li className={listClasses}>
          <Icon
            name='chatgpt'
            color='white'
            size='50'
            className={iconClasses}
          />
        </li>
        <li className={listClasses}>
          <Icon
            name='css3'
            color='white'
            size='50'
            className={iconClasses}
          />
        </li>
      </ul>
    </div>
  )
}

export default Logos
