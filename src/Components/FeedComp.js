import React from 'react'
import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'

const FeedComp = ({feeds,markAsRead}) => {
  let {id} =useParams()
  console.log(feeds)
  const [feed,setFeed] =useState('')

  useEffect(()=>{
    setFeed(feeds.filter((feed)=>feed.id == id)[0])
    markAsRead(id)
  },[id])
  
 // markAsRead(id)
  return (
    <div className='feed' >
        <h4>{feed.username}</h4>
        <p>{feed.message}</p>
    </div>
  )
}

export default FeedComp
