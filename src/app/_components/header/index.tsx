'use client'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/app/_components/icons'
import { usePathname } from 'next/navigation'
import ScrollIndicator from '@/app/_components/scroll_indicator'
import Sidebar from '@/app/_components/sidebar'
import { navLinks } from '@/lib/data'
// import User from '@/app/_components/auth/user'

const Header = () => {
  const pathname = usePathname()
  const isBlogHome = pathname === '/blog'
  const isBlogCategory = pathname.indexOf('/blog/category/') !== -1
  const isBlogDetail =
    pathname.indexOf('/blog/') !== -1 &&
    pathname.indexOf('/blog/category/') === -1
  const navItemClasses =
    'menu__link font-semibold text-lg text-white transition-all duration-500 group-[.scrolled]:text-black group-[.is-blog]:text-black'

  return (
    <>
      <header
        className={`${isBlogDetail ? 'is-blog bg-stone-50' : ''} group fixed z-40 w-full transition-all duration-500 md:pt-12 [&.scrolled]:bg-white [&.scrolled]:pt-0 [&.scrolled]:shadow-md`}
      >
        <ScrollIndicator showScrollIndicator={isBlogDetail} />
        <div className="mx-auto max-w-[1800px] p-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="font-semibold-600 block text-black" href="/">
                <span className="sr-only">Home</span>
                <div className="relative flex max-w-[225px] items-center gap-3">
                  <Image
                    src="/assets/logo-xl-new.png"
                    alt="logo"
                    width="50"
                    height="50"
                    className="transition-all duration-500"
                  />
                  <span className="font-rock-salt text-2xl font-extrabold text-white mix-blend-difference transition-all first-line:pl-3">
                    <Icon
                      name="ghostLogo"
                      height="40"
                      width="auto"
                      className=" fill-white transition-all "
                    />
                  </span>
                  {(isBlogDetail || isBlogHome || isBlogCategory) && (
                    <div className="absolute -bottom-2 right-0 inline-block rounded-sm bg-gradient-to-br from-pink-500 to-fuchsia-600 px-2 py-px text-xs font-semibold uppercase text-white md:text-xs">
                      Blog
                    </div>
                  )}
                  {/* {getIsLocalAPI() && (
                    <div className='absolute text-xs md:text-xs inline-block px-2 py-px bg-gradient-to-br from-red-500 to-red-600 rounded-sm right-0 -bottom-2 text-white uppercase font-semibold'>Local</div>
                  )} */}
                </div>
              </Link>
            </div>
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="menu hidden lg:block">
                <ul className="menu__list flex flex-wrap items-center gap-10 from-fuchsia-600 to-pink-600 text-base before:bg-white group-[.is-blog]:before:bg-gradient-to-r group-[.scrolled]:before:bg-gradient-to-r">
                  {navLinks?.map((link) => {
                    const isActive = pathname === link.path
                    return (
                      <li key={link.id}>
                        <Link
                          className={`${navItemClasses} ${isActive ? 'active' : ''}`}
                          href={link.path}
                        >
                          {link.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
              <div className="relative flex items-center gap-8">
                <div className="hidden sm:flex md:block">
                  <Link
                    className="group-[.scrolled] block rounded-full border border-white bg-transparent px-4 py-2 text-lg font-semibold text-white shadow transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg group-[.is-blog]:border-stone-900 group-[.scrolled]:border-stone-900 group-[.is-blog]:bg-stone-900 group-[.scrolled]:bg-stone-900"
                    href="/contact"
                  >
                    Get in Touch
                  </Link>
                </div>
                {/* {userComponent} */}
                <span className="relative lg:hidden">
                  <Sidebar />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
