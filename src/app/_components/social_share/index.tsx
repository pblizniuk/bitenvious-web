'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const ShareButtons = () => {
  const pathname = usePathname()
  const href = `https://bitenvio.us${pathname}`

  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(href)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div>
      <div>Share:</div>
      <div className="my-2 grid grid-cols-4 gap-1">
        <div>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(href)}`}
            rel="noreferrer"
            target="_blank"
            className="facebook social"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="text-stone-600"
            />
          </Link>
        </div>
        <div>
          <Link
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(href)}`}
            rel="noreferrer"
            target="_blank"
            className="twitter social"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              size="2x"
              className="text-stone-600"
            />
          </Link>
        </div>
        <div>
          <Link
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(href)}`}
            rel="noreferrer"
            target="_blank"
            className="youtube social"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="text-stone-600"
            />
          </Link>
        </div>
        <div>
          <button
            className="relative cursor-pointer text-left"
            rel="noreferrer"
          >
            <span
              className={`text-md absolute -top-12 right-[50%] translate-x-1/2 whitespace-nowrap rounded-sm bg-lime-400 p-2 text-white ${copied ? 'visible' : 'invisible'}`}
            >
              Link copied
            </span>
            <FontAwesomeIcon
              icon={faLink}
              size="2x"
              className="text-stone-600"
              onClick={copyToClipboard}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShareButtons
