import React, { useState } from 'react';

function FruitAdd (props) {
  const [fname, setFname] = useState('')
  const onAddFruit = (e) => {
    if (e.key === 'Enter') {
      props.onAdd(fname)
      setFname('')
    }
  }
  return <div>
    <input type="text" value={fname} onChange={(e) => {
      setFname(e.target.value)
    }} onKeyDown={onAddFruit}/>
  </div>
}

function FruitList ({fruits, onSelectF}) {
  return <ul>
    {
      fruits.map((item, index) => {
        return <li key={index} onClick={() => {
          onSelectF(item)
        }}>{item}</li>
      })
    }
  </ul>
}

function HooksTest () {
  const [fruit, setFruit] = useState('苹果')
  const [fruits, setFruits] = useState([
    '橙子',
    '🍌'
  ])
  return <>
    <div>
      {
        fruit === '' ? '请选择喜爱的水果' : `你选择的水果是${fruit}`
      }
    </div>
    <FruitAdd onAdd={(fname) => {
      setFruits([...fruits, fname])
    }}/>
    <FruitList fruits={fruits} onSelectF={setFruit}/>
  </>
}

export default HooksTest