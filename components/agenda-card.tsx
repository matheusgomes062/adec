'use client'
import Image from 'next/image'

export default function Agenda() {
  return (
    <>
      <div className="max-h-screen max-w-screen bg-no-repeat bg-center">
        <Image
          src="/adec_agenda_week.jpeg"
          alt="Agenda"
          width={1920}
          height={1080}
        />
      </div>
    </>
  )
}
