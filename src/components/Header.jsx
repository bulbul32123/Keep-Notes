import React from 'react'
import Image from './Image/Notes.png'
export default function Header() {
  return (
    <>
      <div className="header">
        <img src={Image}  alt="Logo" width={'70px'} height={'50px'}  />
        <h1> Notes</h1>
      </div>
    </>
  )
}
