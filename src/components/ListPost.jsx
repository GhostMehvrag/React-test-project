import React from 'react'
import PostItem from './PostItem'

export default function ListPost(props) { // без фигурных скобочек пропсы собираются в один объект
    const {postData, ...otherProps} = props
    return (
        <div>
            <h2>Список постов</h2>
            {postData.map( // список объектов.создание нового массива
                (postDataObj) => <PostItem postData={postDataObj} key={postDataObj.id} /> // postDataObj - параметр стрелочной функции, в которой map() кладёт каждый элемент перебираемого списка
            )}
        </div>
    )
}

