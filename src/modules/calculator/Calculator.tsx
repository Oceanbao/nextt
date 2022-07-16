import { useState } from 'react'
import styled from '@emotion/styled'

const StyledCalculator = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
  color: white;

  .result {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .input {
    margin: 0.5rem 0;
    padding: 0.5rem;
    font-size: large;
    width: 13rem;
    background-color: #121212;
    border: 1px solid #525252;
    color: white;
    border-radius: 10px;
  }

  .button {
    font-size: large;
    padding: 0.5rem;
    width: 13rem;
    margin: 0.5rem 0;
    border: 1px solid black;
    background-color: black;
    border-radius: 10px;
    color: white;
  }
`

export default function Calculator() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  const add = () => {
    const result = Number(num1) + Number(num2)
    console.log(result)
    setResult(Number(num1) + Number(num2))
  }

  const subtract = () => {
    setResult(Number(num1) - Number(num2))
  }

  const multiply = () => {
    setResult(Number(num1) * Number(num2))
  }

  const divide = () => {
    setResult(Number(num1) / Number(num2))
  }

  return (
    <StyledCalculator>
      <div className="result" data-testid="result">
        {result}
      </div>
      <input
        className="input"
        type="number"
        data-testid="num1"
        value={num1}
        onChange={e => setNum1(Number(e.target.value))}
      />
      <input
        className="input"
        type="number"
        data-testid="num2"
        value={num2}
        onChange={e => setNum2(Number(e.target.value))}
      />
      <button className="button" onClick={add} data-testid="add">
        Add
      </button>
      <button className="button" onClick={subtract} data-testid="subtract">
        Subtract
      </button>
      <button className="button" onClick={multiply} data-testid="multiply">
        Multiply
      </button>
      <button className="button" onClick={divide} data-testid="divide">
        Divide
      </button>
    </StyledCalculator>
  )
}
