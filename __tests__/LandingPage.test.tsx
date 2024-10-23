import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import LandingPage from '@/components/LandingPage'

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

describe('LandingPage', () => {
  it('renders the main heading', () => {
    render(<LandingPage />)
    const heading = screen.getByText('Trusted Data for')
    expect(heading).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<LandingPage />)
    const subheading = screen.getByText('Informed Decisions')
    expect(subheading).toBeInTheDocument()
  })

  it('renders the "Get started" button', () => {
    render(<LandingPage />)
    const getStartedButton = screen.getByText('Get started')
    expect(getStartedButton).toBeInTheDocument()
  })

  it('renders the "Learn more" link', () => {
    render(<LandingPage />)
    const learnMoreLink = screen.getByText('Learn more')
    expect(learnMoreLink).toBeInTheDocument()
  })

  it('renders all feature cards', () => {
    render(<LandingPage />)
    const featureCards = screen.getAllByText(/Real-Time Data Feeds|Risk Assessment Tools|Business Profiles|Sector-Specific Insights|Data Visualization|Advanced Search/)
    expect(featureCards).toHaveLength(6)
  })

  it('opens mobile menu when menu button is clicked', () => {
    render(<LandingPage />)
    const menuButton = screen.getByLabelText('Open main menu')
    fireEvent.click(menuButton)
    const mobileMenuItems = screen.getAllByText(/Features|Data Sources|Insights|Login/)
    expect(mobileMenuItems).toHaveLength(4)
  })

  it('navigates to search page when "Get started" is clicked', () => {
    const { push } = require('next/navigation').useRouter()
    render(<LandingPage />)
    const getStartedButton = screen.getByText('Get started')
    fireEvent.click(getStartedButton)
    expect(push).toHaveBeenCalledWith('/search?q=Elisha%20Sore')
  })
})