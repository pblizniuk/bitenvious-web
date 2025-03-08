import nextjs from './nextjs'
import reactjs from './reactjs'
import tailwind from './tailwind'
import woocommerce from './woocommerce'
import wordpress from './wordpress'
import chatgpt from './chatgpt'
import strapi from './strapi'
import ghostLogo from './ghost-logo'
import digitalMarketing from './digital_marketing'
import development from './development'
import design from './design'
import other from './other'
import brandIdentity from './brand_identity'
import css3 from './css3'

type IconProps = {
  name: string
  color?: string
  size?: string
  className?: string
  width?: string
  height?: string
  strokeWidth?: string
}

const Icon = (props: IconProps) => {
  const { width, height, size, name } = props
  const sizing = size ? { width: size, height: size } : { width, height }

  return (
    <>
      {name === 'nextjs' && nextjs({ ...props, ...sizing })}
      {name === 'reactjs' && reactjs({ ...props, ...sizing })}
      {name === 'tailwind' && tailwind({ ...props, ...sizing })}
      {name === 'woocommerce' && woocommerce({ ...props, ...sizing })}
      {name === 'wordpress' && wordpress({ ...props, ...sizing })}
      {name === 'chatgpt' && chatgpt({ ...props, ...sizing })}
      {name === 'strapi' && strapi({ ...props, ...sizing })}
      {name === 'ghostLogo' && ghostLogo({ ...props, ...sizing })}
      {name === 'digitalMarketing' && digitalMarketing({ ...props, ...sizing })}
      {name === 'development' && development({ ...props, ...sizing })}
      {name === 'design' && design({ ...props, ...sizing })}
      {name === 'other' && other({ ...props, ...sizing })}
      {name === 'brandIdentity' && brandIdentity({ ...props, ...sizing })}
      {name === 'css3' && css3({ ...props, ...sizing })}
    </>
  )
}

export default Icon
