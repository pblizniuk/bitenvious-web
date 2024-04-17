import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navItemClasses = 'menu__link font-semibold text-lg transition-all duration-500 group-[.scrolled]:text-black group-[.is-blog]:text-black'
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
        className={`top-0 right-0 w-full md:w-[50vw] bg-stone-100  p-10 pl-20 fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
      >
        <button
          className="flex text-4xl text-pink-600 items-center cursor-pointer z-40 fixed right-10 top-6"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
        <h3 className="mt-20 text-4xl font-semibold">
          I am a sidebar
        </h3>
        <nav aria-label='Global' className='mobile-menu'>
          <ul className=' before:bg-white group-[.scrolled]:before:bg-gradient-to-r from-fuchsia-600 to-pink-600 group-[.is-blog]:before:bg-gradient-to-r'>
            <li>
              <Link
                className={navItemClasses}
                href='/about'
                onClick={closeSidebar}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={navItemClasses}
                href='/services'
                onClick={closeSidebar}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={navItemClasses}
                href='/projects'
                onClick={closeSidebar}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={navItemClasses}
                href='/blog'
                onClick={closeSidebar}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className='sm:hidden'>
          <Link
            className='block rounded-full border  bg-transparent px-6 py-3 text-white shadow transition-all duration-500  border-stone-900 bg-stone-900 font-semibold text-lg'
            href='/contact'
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;