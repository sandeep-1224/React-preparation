import React from 'react'

const TextFieldComponent = ({text, setText}) => {
  return (
    <div>
      <input
        type="text"
        style={{width: 800, height: 100}}
        value={text}
        placeholder="Enter your Data"
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      
    </div>
  )
}

export default TextFieldComponent
