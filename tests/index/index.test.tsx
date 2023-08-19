import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../app/page'

describe('Home', () => {
  it('renders', () => {
    const { container } = render(<Home />)

    const title = screen.getByText(/Adec em Cristo/i)

    expect(title).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
