'use client'
import { useEffect } from 'react'

const CalendlyEmbed = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js',
    )
    head?.appendChild(script)
  }, [])

  return (
    <div
      className="calendly-inline-widget relative h-[1200px] w-full overflow-hidden"
      data-url={url}
      style={{ minHeight: '1200px', width: '100%' }}
    ></div>
  )
}

export default CalendlyEmbed
