import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import {Link} from 'react-router-dom'


const Feed = ({feed,onDelete,markAsRead}) => {

  return (
    <div className='feed'  style={!feed.isread ? {border:'2px solid purple'} : {border:''}} >
      <Link to={'/'+feed.id} style={{textDecoration:'none'}}>
        <h4>{feed.username}</h4>
        <p>{feed.message}</p>
      </Link>
      <AiOutlineClose style={{cursor:'pointer',color:'red'}} onClick={()=>{onDelete(feed.id)}}></AiOutlineClose>
    </div>
  )
}

export default Feed
