import React from 'react'
import { useState } from 'react'

export default function Counter() {

    let [count, setCount] = useState(0)
    
      const inc = function(){
        setCount(count + 1)
      }
    
      const dec = function(){
        setCount(count -= 1)
      }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}
