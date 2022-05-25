import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  describe('renders', () => {
    test('input', () => {
      render(<App />)
      const input = screen.getByRole('textbox')
      expect(input).toBeInTheDocument()
    })
    
    test('submit', () => {
      render(<App />)
      const submit = screen.getByRole('button', {name: /submit/i})
      expect(submit).toBeInTheDocument()
    })
  })
  
  describe('course query', () => {
    test('renders a course', async () => {
      render(<App />)
      
      user.click(screen.getByRole('textbox'))
      user.keyboard('Math404 Fall2022')
      user.click(screen.getByRole('button', { name: /submit/i }))
      
      const strings = [
        'Department', 'Math', '404', 'Semester', 'Fall', 'Year', '2022'
      ]
      
      strings.forEach(string => {
        expect(screen.getByText(string)).toBeInTheDocument()
      })
    })
    
    test('renders error message', async () => {
      render(<App />)
      
      user.click(screen.getByRole('textbox'))
      user.keyboard('foobar')
      user.click(screen.getByRole('button', { name: /submit/i }))
      
      expect(screen.getByText(/error/i)).toBeInTheDocument()
    })
  })
  
})
