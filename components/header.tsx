'use client'
import Image from 'next/image'
import Sidebar from './sidebar'

const HeaderNav = () => {
  return (
    <header className="w-full text-gray-700 bg-white dark:bg-gray-900 border-gray-100 shadow-sm body-font px-2">
      <nav className="border-gray-200 w-full max-w-screen-xl grid-cols-2 mx-auto">
        <div className="px-4 flex flex-wrap items-center justify-between">
          <a href="#" className="flex">
            <Image
              src="/adec_logo_color.svg"
              alt="Adec"
              width={70}
              height={70}
              className="py-4"
            />
          </a>
          <Sidebar />
        </div>
      </nav>
    </header>
  )
}

export default HeaderNav
