'use client'
import React, { useState } from 'react'

interface CopyButtonProps {
  textToCopy: string
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000) // Reset "copied" status after 2 seconds
  }

  return (
    <button
      onClick={copyToClipboard}
      className={`px-4 py-2 rounded ${
        isCopied ? 'bg-green-500' : 'bg-blue-500'
      } text-white focus:outline-none focus:ring`}
    >
      {isCopied ? 'Copiado!' : 'Copiar'}
    </button>
  )
}

export default CopyButton
