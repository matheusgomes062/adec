import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import { ColorSchemeToggleButton } from './components/color-scheme-toggle-button'
import { switchThemeDuration } from './constants'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adec - Pix',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font px-2">
            <nav className="border-gray-200 mb-10 w-full max-w-3xl grid-cols-2 mx-auto">
              <div className="mx-2 flex flex-wrap items-center justify-between">
                <a href="#" className="flex">
                  <Image
                    src="/adec_logo.jpg"
                    alt="Adec"
                    width={100}
                    height={100}
                  />
                </a>
                <ColorSchemeToggleButton />
              </div>
            </nav>
          </header>

          <main className="min-h-screen">{children}</main>

          <footer className="inset-x-0 bottom-0 bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                <a
                  href="https://flowbite.com/"
                  className="flex items-center mb-4 sm:mb-0"
                >
                  {/* <Image
                    src="/adec_logo.jpg"
                    alt="Adec"
                    width={100}
                    height={100}
                  /> */}
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    ADEC
                  </span>
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
        </ThemeProvider>
      </body>
    </html>
  )
}
