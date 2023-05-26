import React from 'react'

const Header = ({changeShow,showAddFeed}) => {
  return (
    <div className='header'>
      <h1>Feeds</h1>
      <button onClick={()=>changeShow()} style={showAddFeed ? {backgroundColor: 'red'} :{backgroundColor:'green'}}>{showAddFeed? 'Close' : 'Add'}</button>
    </div>
  )
}

export default Header
