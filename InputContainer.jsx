import React from 'react'

const InputContainer = () => {
  return (
    <div className='input-container'>
        <div className="top">
            <input type="text" placeholder='Enter Note Title' size={40} />
        </div>
        <div className="bottom">
            <textarea placeholder='Enter your note here' name="note" id="note" rows={6} cols={35}></textarea>
            <button>+</button>
        </div>
    </div>
  )
}

export default InputContainer