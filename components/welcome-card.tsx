import { PT_Serif } from 'next/font/google'

const pt_Serif = PT_Serif({
  subsets: ['latin'],
  weight: '400',
})

export default function Welcome() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[url('/adec_welcome_3.jpg')] sm:bg-[url('/adec_welcome_2.jpg')] lg:bg-[url('/adec_welcome.jpg')] w-full bg-cover bg-no-repeat">
        <div className="flex items-center justify-center text-center">
          <h1
            className={`${pt_Serif.className} max-w-3xl md:text-7xl md:leading-normal leading-snug text-[8.065vw] align-center text-white dark:text-white`}
          >
            Inspirando pessoas a seguir Jesus e tomar o Reino de Deus com
            violência.
          </h1>
          <div></div>
        </div>
      </div>
    </>
  )
}
