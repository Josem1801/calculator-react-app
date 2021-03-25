import React, {useState} from 'react'
import './App.css'
import Item from './components/Item'
let lastNumber = ''
function App() {
  let [number, setNumber] = useState('')
  const [result, setResult] = useState('')

  const numberLenght = number.length;
  
  function handleDelete() {
    setNumber('')
  }
  function handleDeleteOne(){
    setNumber(number.slice(0,numberLenght -1))
  }
  function handleButton(e) {
    setNumber(number.concat(e.target.value) )
  }
  function handleReturn(){
    setNumber(lastNumber)
  }

  function handleOperator() {
    lastNumber = String(eval(number))
    setNumber('')
    setResult(lastNumber)
  }

  return (
    <div className='app'>
      <div className="calculator">
        <div className="display col-4 ">
          <p onClick={handleReturn}>{result} </p>
        </div>
        <div className="display col-4 ">
          <input type="text" value={number} readOnly/>
        </div>
        <div className="col-2">
          <Item className='col-2' value='AC' color='#970FF2' click={handleDelete}/>
        </div>
        <Item className='delete-all' value='C' click={handleDeleteOne} color='#0597F2'/>
        <Item value='*' click={handleButton}/>
        <Item value='1' click={handleButton}/>
        <Item value='2' click={handleButton}/>
        <Item value='3' click={handleButton}/>
        <Item value='/' click={handleButton}/>
        <Item value='4' click={handleButton}/>
        <Item value='5' click={handleButton}/>
        <Item value='6' click={handleButton}/>
        <Item value='+' click={handleButton}/>
        <Item value='7' click={handleButton}/>
        <Item value='8' click={handleButton}/>
        <Item value='9' click={handleButton}/>
        <Item value='-' click={handleButton}/>
        <Item value='0' click={handleButton}/>
        <Item value='.' click={handleButton}/>
        <div className="col-2">
          <Item className='col-2' value='=' click={handleOperator} color='#970FF2'/>
        </div>
      </div>
    </div>
  )
}

export default App

