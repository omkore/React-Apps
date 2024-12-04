import React from 'react'

const Note = ({data}) => {
    let {title,note,date} = data
    
  return (
    <div className='note' >
        <h2 id='note-title'>{title}</h2>
        <p id='note-content'>{note}</p>
        <p id='note-date'>{date}</p>
    </div>
  )
}

export default Note