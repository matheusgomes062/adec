'use client'
import { PT_Serif } from 'next/font/google'
import WatchThis from './watch-this'

const pt_Serif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Welcome() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/adec_welcome_3.jpg')] sm:bg-[url('/adec_welcome_2.jpg')] lg:bg-[url('/adec_welcome.jpg')] w-full bg-cover bg-no-repeat">
        <div className="flex flex-col items-center justify-around text-center min-h-screen">
          <h1
            className={`${pt_Serif.className} max-w-sm md:max-w-3xl md:text-7xl md:leading-normal leading-snug text-[8.065vw] align-center text-white dark:text-white`}
          >
            Inspirando pessoas a seguir
            <span className="text-red-600"> Jesus</span> e tomar o{' '}
            <span className="italic"> Reino de Deus</span> com
            <strong> violência</strong>.
          </h1>
          <WatchThis />
        </div>
      </div>
    </>
  )
}
