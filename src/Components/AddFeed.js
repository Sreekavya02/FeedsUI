import React, { useState } from 'react'

const AddFeed = ({addfeed}) => {
  

  const [username,setUsername] =useState('')
  const [message,setMessage] =useState('')
  const isread= false

  const onsubmit =(e) =>{
    e.preventDefault()
    if(e.username === ''){
        alert('enter username!')
        return
    }
    addfeed({username,message,isread})
    setUsername('')
    setMessage('')
  }
  return (
    <div className='addFeed'>
      <form onSubmit={onsubmit}>
        <label>UserName : </label>
        <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)}></input>
        <label>Message : </label>
        <input type='text' value={message} onChange={(e) => setMessage(e.target.value)}></input>
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default AddFeed
