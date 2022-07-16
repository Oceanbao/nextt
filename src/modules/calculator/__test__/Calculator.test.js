import Calculator from './../Calculator'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import { fireEvent, render, screen } from '@testing-library/react'
import ReactDOM from 'react-dom/client'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

describe('Calculator', () => {
  it('renders a calculator', () => {
    act(() => {
      ReactDOM.createRoot(container), render(<Calculator />)
    })
    // check if all components are rendered
    expect(screen.getByTestId('result')).toBeInTheDocument()
    expect(screen.getByTestId('num1')).toBeInTheDocument()
    expect(screen.getByTestId('num2')).toBeInTheDocument()
    expect(screen.getByTestId('add')).toBeInTheDocument()
    expect(screen.getByTestId('subtract')).toBeInTheDocument()
    expect(screen.getByTestId('multiply')).toBeInTheDocument()
    expect(screen.getByTestId('divide')).toBeInTheDocument()
  })

  it('adds numbers', () => {
    act(() => {
      ReactDOM.createRoot(container), render(<Calculator />)
    })
    // check if adds properly
    const num1input = screen.getByTestId('num1')
    const num2input = screen.getByTestId('num2')
    const addButton = screen.getByTestId('add')
    const resultArea = screen.getByTestId('result')
    act(() => {
      fireEvent.change(num1input, { target: { value: 5 } })
      fireEvent.change(num2input, { target: { value: 8 } })
      addButton.click()
    })
    expect(resultArea).toHaveTextContent('13')
  })
})
