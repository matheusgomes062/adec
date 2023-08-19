'use client'
import { ColorSchemeToggleButton } from './color-scheme-toggle-button'
import Image from 'next/image'

const HeaderNav = () => {
  return (
    <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font px-2">
      <nav className="border-gray-200 mb-10 w-full max-w-3xl grid-cols-2 mx-auto">
        <div className="mx-2 flex flex-wrap items-center justify-between">
          <a href="#" className="flex">
            <Image
              src="/adec_logo_color.svg"
              alt="Adec"
              width={70}
              height={70}
              className="py-5"
            />
          </a>
          <ColorSchemeToggleButton />
        </div>
      </nav>
    </header>
  )
}

export default HeaderNav
