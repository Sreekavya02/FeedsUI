import React from 'react'
import Feed from './Feed'


const Feeds = ({feeds,deletefeed,markAsRead}) => {
    //console.log("in the feeds",feeds)
    return(
        
            <div className='feeds'>

                {feeds.map((feed,index) =>(
                    <div id={index} key={index}>
                        <Feed key = {index} feed={feed} onDelete={deletefeed} markAsRead={markAsRead}/>
                    </div>
                ))}

            </div>

    );
  
}

export default Feeds
