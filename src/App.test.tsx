import { render, screen } from '@testing-library/react'
import App from './App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('renders vite text', () => {
    render(<App />)
    expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument()
  })
})
