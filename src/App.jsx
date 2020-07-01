import React, { useState } from 'react'

function App() {
  const [valueOfNumberOne, setValueOfNumberOne] = useState('')
  const [valueOfNumberTwo, setValueOfNumberTwo] = useState('')
  const [operator, setOperator] = useState('')
  const [whatToShow, setWhatToShow] = useState('0')

  const whichResult = () => {
    let answer

    const floatNumberOne = parseFloat(valueOfNumberOne)
    const floatNumberTwo = parseFloat(valueOfNumberTwo)

    switch (operator) {
      case '+':
        answer = floatNumberOne + floatNumberTwo
        break
      case '-':
        answer = floatNumberOne - floatNumberTwo
        break
      case '/':
        answer = floatNumberOne / floatNumberTwo
        break
      case '*':
        answer = floatNumberOne * floatNumberTwo
        break
    }

    setWhatToShow(answer.toFixed(2))
  }

  console.log(valueOfNumberOne)
  console.log(valueOfNumberTwo)
  console.log(whatToShow)

  const whichNumber = (event) => {
    const targetValue = event.target.value

    if (operator === '') {
      if (targetValue === '.' && valueOfNumberOne.includes('.') === true) {
        setValueOfNumberOne('Error')
        setWhatToShow('Error')
      } else {
        setValueOfNumberOne(valueOfNumberOne + targetValue)
        setWhatToShow(valueOfNumberOne + targetValue)
      }
    } else {
      if (targetValue === '.' && valueOfNumberTwo.includes('.') === true) {
        setValueOfNumberTwo('Error')
        setWhatToShow('Error')
      } else {
        setValueOfNumberTwo(valueOfNumberTwo + targetValue)
        setWhatToShow(valueOfNumberTwo + targetValue)
      }
    }
  }

  const clearAll = () => {
    setValueOfNumberOne('')
    setValueOfNumberTwo('')
    setWhatToShow(0)
    setOperator('')
  }

  return (
    <div className="calculator">
      <div className="calculator-screen">{whatToShow}</div>

      <div className="calculator-keys">
        <button
          onClick={() => setOperator('+')}
          type="button"
          className="operator"
          value="+"
        >
          +
        </button>
        <button
          onClick={() => setOperator('-')}
          type="button"
          className="operator"
          value="-"
        >
          -
        </button>
        <button
          onClick={() => setOperator('*')}
          type="button"
          className="operator"
          value="*"
        >
          &times;
        </button>
        <button
          onClick={() => setOperator('/')}
          type="button"
          className="operator"
          value="/"
        >
          &divide;
        </button>

        <button onClick={whichNumber} type="button" value="7">
          7
        </button>
        <button onClick={whichNumber} type="button" value="8">
          8
        </button>
        <button onClick={whichNumber} type="button" value="9">
          9
        </button>

        <button onClick={whichNumber} type="button" value="4">
          4
        </button>
        <button onClick={whichNumber} type="button" value="5">
          5
        </button>
        <button onClick={whichNumber} type="button" value="6">
          6
        </button>

        <button onClick={whichNumber} type="button" value="1">
          1
        </button>
        <button onClick={whichNumber} type="button" value="2">
          2
        </button>
        <button onClick={whichNumber} type="button" value="3">
          3
        </button>

        <button onClick={whichNumber} type="button" value="0">
          0
        </button>
        <button
          type="button"
          onClick={whichNumber}
          className="decimal"
          value="."
        >
          .
        </button>
        <button
          onClick={clearAll}
          type="button"
          className="all-clear"
          value="all-clear"
        >
          AC
        </button>

        <button
          onClick={whichResult}
          type="button"
          className="equal-sign"
          value="="
        >
          =
        </button>
      </div>
    </div>
  )
}

export default App
