import React from 'react'

import { Inter, PT_Serif } from 'next/font/google'
import { PlayCircleIcon } from '@heroicons/react/24/solid'

const pt_Serif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const inter = Inter({ subsets: ['latin'] })

export default function WatchThis() {
  return (
    <>
      <a
        className="flex w-96 items-center cursor-pointer group"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/watch?v=m-XOZ2bk3_A&ab_channel=ADECemCristo"
      >
        <PlayCircleIcon className="w-20 h-20 text-blue-600 m-4 group-hover:scale-110 ease-in-out duration-300" />
        <div className="flex flex-col text-left">
          <h6
            className={`${inter.className} uppercase font-bold text-sm mb-2 text-white group-hover:text-blue-100`}
          >
            Assista a palavra mais recente
          </h6>
          <h3
            className={`${pt_Serif.className} text-white group-hover:text-blue-100`}
          >
            PARÁBOLA DO RICO INSENSATO // Dc. Felipe Emed
          </h3>
        </div>
      </a>
    </>
  )
}
