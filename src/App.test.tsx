import { render, screen } from '@testing-library/react'
import App from './App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('renders welcome text', () => {
    render(<App />)
    expect(screen.getByText(/welcome/i)).toBeInTheDocument()
  })
})
