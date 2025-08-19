import React from 'react'

export default function TestInput(props) { // ... - оператор rest, собирает все переданные в компонент пропсы в объект props
  return (
    <input type="text" value={{...props}} />
    // все св-ва объект props в html-тег input
  )
}



{/* <input className='' {...props}/> // ... - оператор sprea, который распыляет (переносит) (5 строка) */}