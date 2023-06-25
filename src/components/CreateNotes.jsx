import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
export default function CreateNotes(props) {
  const [expent,setexpent] = useState(false)
  const [note,setNote] = useState({
    title: '',
    content: '', 
  })
  const inputEvent = (e)=>{
    const {value , name } = e.target;
    setNote((oldData)=>{
      return {
        ...oldData,
        [name] : value,

      }
    })
  }
  const expandIt =()=>{
    setexpent(true)
  }
  const AddEvent = ()=>{
    props.passNote(note)
    setNote({
      title: '',
      content: '', 
    })
  }
  return (
    <>
     <div className="main_note">
        <form >
        {
        expent ?
            <input type="text" value={note.title} name='title' onChange={inputEvent} placeholder='Title' autoComplete='off'/>
            : null }
            <textarea cols="" rows="" value={note.content} name='content' onChange={inputEvent} onClick={expandIt}  placeholder='Write Your Notes...'></textarea>
            {expent ? 
            <Button onClick={AddEvent}>
            <AddIcon className='plus_sign'/>
            </Button>
            : null }
        </form>
     </div> 
    </>
  )
}
