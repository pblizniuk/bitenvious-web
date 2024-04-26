import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const year = new Date().getFullYear()
  const navItemClasses = 'menu__link font-semibold text-lg text-white transition-all duration-500'
  return (
    <footer className='bg-gradient-to-r from-stone-800 to-stone-900 relative w-full'>
      <div className='mx-auto w-full max-w-screen-xl p-4 md:py-16'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a
            href='/'
            className='relative mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse'
          >
            <Image
              src='/assets/logo-xl.png'
              alt='logo'
              width='50'
              height='50'
              className='transition-all duration-500 hover:grayscale'
            />
            <span
              className='pl-3 font-rock-salt text-2xl font-extrabold text-stone-50 transition-all'
            >
              BitEnvious
            </span>
          </a>
          <nav aria-label='Global' className='menu'>
            <ul className='menu__list flex flex-wrap items-center gap-10 text-base before:bg-white group-[.scrolled]:before:bg-gradient-to-r from-purple-700 to-pink-600'>
              <li>
                <Link
                  className={navItemClasses}
                  href='/about'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={navItemClasses}
                  href='/services'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={navItemClasses}
                  href='/projects'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={navItemClasses}
                  href='/blog'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          {/* <!-- Dark mode switcher --> */}
          {/* <button
            id="theme-toggle"
            type="button"
            className="text-stone-900 focus:outline-none rounded-lg text-sm p-2.5"
          >
            <svg
              id="theme-toggle-dark-icon"
              className="w-5 h-5 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              ></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className="w-5 h-5 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button> */}
          {/* <!-- Dark mode switcher end --> */}
        </div>
        <div className='my-8 sm:mx-auto lg:my-16' />
        <div className='text-sm block text-stone-200 text-center'>
          © {year}{' '}
          <Link href='/' className='hover:underline'>
            BitEnvious™
          </Link>
          .&nbsp;All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
