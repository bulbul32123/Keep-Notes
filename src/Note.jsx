import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
export default function Note(props) {
  const deletenote = ()=>{
    props.deleteItem(props.id)
  }
  return (
    <>
     <div className="note container-fluid">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn" 
        onClick={deletenote}
        >
        <DeleteOutlineIcon className='deleteIcon'/>
        </button>
     </div> 
    </>
  )
}
