import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('should to match snapshot', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /A history of everything you copy/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
