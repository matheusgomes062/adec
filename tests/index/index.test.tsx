import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../../app/page'

describe('Home component', () => {
  it('renders the text and copy button', () => {
    render(<Home />)

    const textToCopy = '(45) 99965-9813'

    // Check if the text is rendered
    const textElement = screen.getByText(textToCopy)
    expect(textElement).toBeInTheDocument()

    // Check if the copy button is rendered
    const copyButton = screen.getByRole('button', { name: /Copy Text/i })
    expect(copyButton).toBeInTheDocument()
  })

  it('copies text to clipboard when copy button is clicked', () => {
    render(<Home />)

    // Mock the clipboard API
    const clipboardWriteTextMock = jest.fn()
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: clipboardWriteTextMock,
      },
      writable: true,
    })

    // Simulate clicking the copy button
    const copyButton = screen.getByRole('button', { name: /Copy Text/i })
    fireEvent.click(copyButton)

    // Check if the clipboard API was called with the correct text
    expect(clipboardWriteTextMock).toHaveBeenCalledWith('(45) 99965-9813')
  })
})
