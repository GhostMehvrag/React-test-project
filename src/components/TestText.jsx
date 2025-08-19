import React, { use } from 'react'
import { useState } from 'react'

export default function TestText() {

    let [testInput, setTestInput] = useState('')

  return (
    <div>
        <h1>{testInput}</h1>
        <input type="text" value={testInput} onChange={(e)=>setTestInput(e.target.value)}/>
    </div>
  )
}
