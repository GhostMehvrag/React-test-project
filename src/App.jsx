import React, { useState } from 'react'

import ListPost from './components/ListPost'
import TestInput from './components/ui/inputs/TestInput'
import TestButton from './components/ui/buttons/TestButton'

import './styles/App.css'

export default function App() {

  const [postData, setPostData] = useState([ // 1 - Текущее значение состояния, 2 - Функция для обновления состояния
    {id: 1, title: 'test title 1', text: 'test text 1'}, // useState - возвращет массив из 2 элементов
    {id: 2, title: 'test title 2', text: 'test text 2'}, // useState принимает как аргумент значение состояния по умолчанию (postData)
    {id: 3, title: 'test title 3', text: 'test text 3'}
  ])

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  // function createPost(){
  //   const newPost = {
  //     id: Date.now(),
  //     title: ,
  //     text: 
  //   }
  // }
  
  return (
    <div className='App'>
      <form action="">
        {/* // компонент. type and placeholder - пропсы */} 
        <TestInput type='text' placeholder='Введите заголовок' />
        <TestInput type='text' placeholder='Введите текст' />
        <TestButton/>
      </form>
      {/* // props - данные, кот. передаются от род компонента к дочернему компоненту */}
      <ListPost postData={postData} />
    </div>
  )
}

// rfc