import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/app/_components/icons";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navItemListClasses = `my-8 text-white ${showSidebar ? "translate-x-0 transition-all ease-in-out duration-500 " : "-translate-x-full"}`
  const navItemClasses = `relative font-normal text-3xl transition-all duration-500 text-white`
  const closeSidebar = () => setShowSidebar(false)

  return (
    <>
      <svg
        onClick={() => setShowSidebar(!showSidebar)}
        className="z-30 flex items-center cursor-pointer right-10 top-6 text-white group-[.scrolled]:text-stone-900 group-[.is-blog]:text-stone-900"
        fill="currentColor"
        viewBox="0 0 100 80"
        width="40"
        height="27"
      >
        <rect width="100" height="9"></rect>
        <rect y="33" width="100" height="9"></rect>
        <rect y="66" width="100" height="9"></rect>
      </svg>

      <div
        className={`top-0 right-0 w-full bg-gradient-to-br from-stone-900 to-stone-700 py-4 px-3 fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full overflow-hidden"
          }`}
      >
        <div className={`relative flex items-center max-w-[225px] transition-all ${showSidebar ? "opacity-100 duration-500 delay-300" : "opacity-0"}`}>
          <Image
            src='/assets/logo-xl-new.png'
            alt='logo'
            width='50'
            height='50'
            className='transition-all duration-500 hover:grayscale'
          />
          <span
            className='pl-3 font-rock-salt text-2xl font-extrabold text-white transition-all'
          >
            <Icon
              name='ghostLogo'
              height='40'
              width='auto'
              className='fill-white'
            />
          </span>
        </div>
        <button
          className="flex text-5xl text-pink-600 items-center cursor-pointer z-40 fixed right-4 top-3"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
        <div className="flex flex-col justify-center h-full">
          <nav aria-label='Global' className='mobile-menu'>
            <ul className="overflow-clip">
              <li className={`${navItemListClasses} delay-100`}>
                <Link
                  className={navItemClasses}
                  href='/about'
                  onClick={closeSidebar}
                >
                  About
                </Link>
              </li>
              <li className={`${navItemListClasses} delay-200`}>
                <Link
                  className={navItemClasses}
                  href='/services'
                  onClick={closeSidebar}
                >
                  Services
                </Link>
              </li>
              <li className={`${navItemListClasses} delay-300`}>
                <Link
                  className={navItemClasses}
                  href='/projects'
                  onClick={closeSidebar}
                >
                  Projects
                </Link>
              </li>
              <li className={`${navItemListClasses} delay-500`}>
                <Link
                  className={navItemClasses}
                  href='/blog'
                  onClick={closeSidebar}
                >
                  Blog
                </Link>
              </li>
              <li className={`${navItemListClasses} delay-700`}>
                <div className='sm:hidden'>
                  <Link
                    className='block rounded-full border bg-transparent px-6 py-3 text-white shadow transition-all duration-500  border-white font-semibold text-lg text-center'
                    href='/contact'
                    onClick={closeSidebar}
                  >
                    Get in Touch
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;