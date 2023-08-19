'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { toggleScheme } from '@/utils/colorScheme'

export const ColorSchemeToggleButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const setThemeFunction = async (theme: string) => {
    await toggleScheme()
    if (theme === 'dark') {
      return setTheme('dark')
    } else {
      return setTheme('light')
    }
  }

  return (
    <div className="inline-flex items-center">
      <SunIcon className="w-5 h-5 text-gray-600" />
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          defaultChecked={theme === 'dark'}
          onClick={() => {
            setThemeFunction(theme === 'dark' ? 'light' : 'dark')
          }}
        />
        <div className="mx-1 w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      <MoonIcon className="w-5 h-5 text-gray-600" />
    </div>
  )
}
