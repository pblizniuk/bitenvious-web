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
      <div className="z-90">
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="flex items-center cursor-pointer right-10 top-6 text-white group-[.scrolled]:text-stone-900 group-[.is-blog]:text-stone-900"
          fill="currentColor"
          viewBox="0 0 100 80"
          width="40"
          height="27"
        >
          <rect width="100" height="9" className={`transition-all ease-in-out duration-500 ${showSidebar ? "rotate-45 origin-[5%_30%] text-pink-600" : ""}`}></rect>
          <rect y="33" width="100" height="9" className={`transition-all ease-in-out duration-500 ${showSidebar ? "w-0 opacity-0" : ""}`}></rect>
          <rect y="66" width="100" height="9" className={`transition-all ease-in-out duration-500 ${showSidebar ? "-rotate-45 origin-[15%_70%] text-pink-600" : ""}`}></rect>
        </svg>
      </div>
      <div
        className={`-z-10 top-0 right-0 w-full bg-gradient-to-br from-stone-900 to-stone-800 py-4 px-3 fixed h-full ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full overflow-hidden"
          }`}
      >
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