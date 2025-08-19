import React from 'react'

import TestButton from './ui/buttons/TestButton'

export default function PostItem(props) {
    const {postData, ...otherProps} = props
    return (
        <div className='post'>
            <div className='post__main'>
                <h3 className='post__main-title'>{postData.title}</h3>
                <p className='post__main-text'>{postData.text}</p>
            </div>
            <div className='post__main-buttons'>
                <TestButton onClick={()=>console.log('Ура, я нажался')}>Кнопка компонент</TestButton>
            </div>
        </div>
    )
}
