'use client'
import Image from 'next/image'
// import { useTheme } from 'next-themes'

const HeaderNav = () => {
  // const { theme } = useTheme()

  return (
    <footer className="bottom-0 m-4">
      <div className="w-full mx-auto p-4 md:py-8 max-w-screen-xl bg-white rounded-lg shadow dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            <Image
              src="/adec_logo_color.svg"
              alt="Adec"
              width={100}
              height={100}
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="#" className="hover:underline">
            Adec em Cristo
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default HeaderNav
