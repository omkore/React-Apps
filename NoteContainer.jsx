import React from 'react'
import Note from './Note'

const NoteContainer = () => {
  return (
    <div className='note-container'>
        <Note data={{title:"Note 1",note:"random note here",date:"04/12 11:50"}}/>
        <Note data={{title:"Note 1",note:"random note here",date:"04/12 11:50"}}/>
        <Note data={{title:"Note 1",note:"random note here",date:"04/12 11:50"}}/>
        <Note data={{title:"Note 1",note:"random note here",date:"04/12 11:50"}}/>
    </div>
  )
}

export default NoteContainer