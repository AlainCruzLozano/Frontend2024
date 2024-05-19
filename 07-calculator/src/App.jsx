import { useState } from "react"
import   "./App.css"
import { buttons } from "./assets/buttons"
import { ButtonsRow } from "./components/ButtonsRow"

function App() {
  const[display, setDisplay] = useState({
    value: '0',
    hasPoint: false,
    previousValue: 0,
    operatorHasBeenPressed: false,
    operator:''
  })

  const setOperator = (operator) => {
    setDisplay({
      ...display,
      previousValue:display.value,
      operatorHasBeenPressed:true,
      hasPoint:false,
      value:'0',
      operator
    })
  }

  const calculate = () => {
    if(!display.operatorHasBeenPressed) {
      return
    }
      let operator = display.operator === '%' ? ' /100 * ':
                      display.operator === 'x' ? ' * ' : display.operator

      let result = eval(`${display.previousValue} ${operator} ${display.value}`)
    
result=result+""

      setDisplay({
      ...display,
      value: limit(result),
      operatorHasBeenPressed: false,
      hasPoint: result.includes("."),
      previousValue: '0'
      })
    }

  const updateDisplay = (value) =>{
    if(value === '.'){
      if(display.hasPoint){
        return
      }
      setDisplay({
        ...display,
        value: limit(display.value + value),
        hasPoint:true
      })
      return
    }
    if(display.value=== '0'){
      setDisplay({
        ...display,
        value: limit(value)
      })
    }
    else{
    setDisplay({
      ...display,
      value: limit(display.value + value)
    })
  }
}

const clearDisplay = (value) => {
  setDisplay({
    ...display,
    value: '0',
    hasPoint: false
  })
}

const deleteLastCharacter = () => {
  setDisplay({
    ...display,
    value: display.value.slice(0,-1),
    hasPoint: (display.value.slice(-1) === '.') ? false: display.hasPoint //el ? es un operador termario para operadores,  evalua el estado del ultimo caracter
  })
  if(display.value.length === 1){
    setDisplay({
      ...display,
      value:'0'
    })
  }
}



const limit = (String='', length = 10)=>{
  return String.slice(0,length)
}

const buttonsFunctions = {
  calculate,
  updateDisplay,
  deleteLastCharacter,
  setOperator,
  clearDisplay
}

  return (
  <div >
    <h1>Calculator</h1>
    <hr className="white" />
    <table className="center">
      <tbody>
        <tr>
          <td className="text-end" colspan={4}><h2>{display.value}</h2></td>
          </tr>
          {
            buttons.map((row, index) => {
              return(
                <ButtonsRow 
                key={index} 
                row={row}
                buttonsFunctions={buttonsFunctions}
                />
              )
            })
          }
      </tbody>
    </table>
  </div>
  )
}

export default App

