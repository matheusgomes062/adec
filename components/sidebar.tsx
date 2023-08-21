import {
  CalendarDaysIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <div className="">
        {showSidebar ? (
          <XMarkIcon
            className="flex w-8 h-8 text-black items-center cursor-pointer fixed right-10 top-6 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        ) : (
          <Bars3Icon
            className="flex w-8 h-8 text-black items-center cursor-pointer fixed right-10 top-6 z-50 "
            onClick={() => setShowSidebar(!showSidebar)}
          />
        )}
        <div
          className={`flex flex-col bg-white  min-h-screen py-2 top-0 right-0 w-64 fixed h-full ease-in-out duration-300 overflow-y-auto ${
            showSidebar ? 'translate-x-0 shadow-xl' : 'translate-x-full'
          }`}
        >
          <ul className="mt-20">
            {/* <h4 className="mb-4 font-semibold">Links úteis</h4> */}
            <li className="flex items-center mb-6 pl-3">
              <ClockIcon className="w-5 h-5 text-gray-600 mr-6" />
              Horário dos cultos
            </li>
            <li className="flex items-center mb-6 pl-3">
              <CurrencyDollarIcon className="w-5 h-5 text-gray-600 mr-6" />
              Oferta
            </li>
            <li className="flex items-center mb-6 pl-3">
              <CalendarDaysIcon className="w-5 h-5 text-gray-600 mr-6" />
              Cronograma da semana
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
