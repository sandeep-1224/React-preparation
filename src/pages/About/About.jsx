import React, {useState} from 'react'
import TextFieldComponent from './TextFieldComponent'
import DialogComponent from './DialogComponent'
import "./About.css";

const About = () => {
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  return (
    <div className='about-grid1'>
      <h3>
        Basic use of the <i>TextField</i> Component of the Material UI.
      </h3>
      <TextFieldComponent text={text} setText={setText} />
      <button className='expand-button' onClick={() => setOpen(true)}>Expand</button>
      <DialogComponent
        open={open}
        setOpen={setOpen}
        text={text}
        setText={setText}
      />
      <TextFieldComponent text={text1} setText={setText1} />
      <button className='expand-button' onClick={() => setOpen1(true)}>Expand 1</button>
      <DialogComponent
        open={open1}
        setOpen={setOpen1}
        text={text1}
        setText={setText1}
      />
      <TextFieldComponent text={text2} setText={setText2} />
      <button className='expand-button' onClick={() => setOpen2(true)}>Expand 2</button>
      <DialogComponent
        open={open2}
        setOpen={setOpen2}
        text={text2}
        setText={setText2}
      />
    </div>
  )
}
export default About