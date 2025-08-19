import React from 'react'

export default function TestButton(props) {
  const {children, ...otherProps} = props
  console.log(children)
  return (
    <button {...props}>{children}</button>
  )
}
