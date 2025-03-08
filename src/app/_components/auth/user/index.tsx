'use client'
import { useEffect, useState } from 'react'
import SignOutButton from '@/app/_components/sign_out_button'
import Link from 'next/link'
import Image from 'next/image'

const User = ({ session }) => {
  const [open, setOpen] = useState(false)
  const togglePopover = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (event) => {
      if (!event.target.closest('#avatarButton')) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [open])

  const buttonClasses =
    'block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 dark:hover:bg-stone-600 dark:text-stone-200 dark:hover:text-white text-left w-full'

  return (
    <>
      {/* eslint-disable @next/next/no-img-element */}
      {/* using img tag here because the sources of avatar can differ depending on provider */}
      {session?.user?.image ? (
        <img
          id="avatarButton"
          onClick={togglePopover}
          className="cursor-pointer rounded-full"
          src={session.user.image}
          alt={session.user.name || 'avatar'}
          width={40}
          height={40}
        />
      ) : (
        <Image
          src="/assets/avatar.png"
          alt="avatar"
          onClick={togglePopover}
          className="cursor-pointer rounded-full bg-stone-500 opacity-30"
          width={40}
          height={40}
        />
      )}
      {/* eslint-enable @next/next/no-img-element */}

      {open && (
        <div className="absolute right-0 top-14 z-10 w-44 divide-y divide-stone-100 rounded-lg bg-white shadow dark:divide-stone-600 dark:bg-stone-700">
          {session?.user ? (
            <>
              <div className="px-4 py-3 text-sm text-stone-900 dark:text-white">
                <div>{session?.user?.name}</div>
                {/* <div className="font-medium truncate">{session?.user?.email}</div> */}
              </div>
              <ul
                className="py-2 text-sm text-stone-700 dark:text-stone-200"
                aria-labelledby="avatarButton"
              >
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-stone-100 dark:hover:bg-stone-600 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
              </ul>
              <div className="py-1">
                <SignOutButton classes={buttonClasses} />
              </div>
            </>
          ) : (
            <div className="py-1">
              <Link href="/login" className={buttonClasses}>
                Sign in
              </Link>
            </div>
          )}
        </div>
      )}
    </>
    // <div className="relative">
    //   {/* eslint-disable-next-line @next/next/no-img-element */}
    //   {session?.user?.image ? <img className='rounded-full' src={session.user.image} alt={session.user.name || 'avatar'} width={50} height={50} /> : <Image src="/assets/avatar.png" alt="avatar" width={50} height={50} />}
    //   {session?.user ? <p className='text-white'>{session.user.name}</p> : <p className='text-white'>You are not logged in</p>}
    //   {session?.user ? '' : <Link href="/sign-in" className='text-white'>Sign in</Link>}
    //   <SignOutButton />
    // </div>
  )
}

export default User
