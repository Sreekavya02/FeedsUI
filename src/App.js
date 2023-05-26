import './App.css';
import Header from './Components/Header';
import Feeds from './Components/Feeds';
import AddFeed from './Components/AddFeed';
import FeedComp from './Components/FeedComp';
import { useState,useEffect,useMemo,useCallback,useRef } from 'react';
import {BrowserRouter as Router,Routes,Route,useParams} from 'react-router-dom'


function App() {
  //console.log('looged');
  const [feeds,setFeeds] =useState([])
  const [showAddFeed,setShowAddFeed] =useState(false)
  
  const fetchFeedslist = useMemo (()=> async () =>{
    const res = await fetch('http://localhost:5000/feeds')
    const data = await res.json()
    //console.log('feeds changed')
    return data
  } , [feeds])
  

  useEffect(()=>{
    const feedsReturn =  async () =>{
      const feedsFromServer = await fetchFeedslist()
      setFeeds(feedsFromServer)
      //console.log(feeds);
    }
    feedsReturn()
  },[])

  
  const addfeed = async ({username,message,isread}) =>{
    const id = Math.random()*100000 +1
    const newfeed = {'id':id,'username':username,'message':message,'isread':isread}

    const res = await fetch('http://localhost:5000/feeds',{
        method:'POST',
        headers:{
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(newfeed)
      })
    
    const data = await res.json()
    //console.log(data)
    setFeeds([...feeds,data])
  }

  const deletefeed = async(id) =>{
    const res = await fetch(`http://localhost:5000/feeds/${id}`,{
      method:'DELETE'
    })
    //setFeeds(feeds.map((feed)=> (feed.id !== id && feed)))
    setFeeds(feeds.filter((feed)=> feed.id !== id))
  }

  const changeShow = useCallback(()=>{
    setShowAddFeed(!showAddFeed)
  },[showAddFeed])

  const markAsRead = async (id) =>{
    //console.log('hii',id);
    const newfeed = feeds.filter((feed)=> feed.id == id)[0]
    newfeed.isread = true
    const res = await fetch(`http://localhost:5000/feeds/${id}`,{
      method:'PUT',
      headers:{
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(newfeed)
    })
    const data = await res.json()
    setFeeds([feeds.map((feed)=>(feed.id === id ?  data : feed))])
    //console.log('Line 74',feeds)
  }

  return (
   
   <Router>
     <Routes>
        <Route path='/' exact element={
          <div>
          <Header changeShow={changeShow} showAddFeed={showAddFeed}></Header>
          {showAddFeed && <AddFeed addfeed={addfeed}/>}
          <Feeds feeds={feeds} deletefeed={deletefeed} markAsRead={markAsRead}></Feeds>
         </div>
        }>
        </Route>
        <Route path='/:id' exact element={
          <FeedComp feeds={feeds} onDelete={deletefeed} markAsRead={markAsRead} />
        }>
        </Route>
     </Routes>
   </Router>
  );
}

export default App;


{/* <FeedComp feed={feeds.filter((feed) => feed.id === 1)[0]} onDelete={deletefeed} markAsRead={markAsRead} /> */}
// const addfeed = ({username,message,isread}) =>{
//   const id = Math.random()*100000 +1
//   const newfeed = {'id':id,'username':username,'message':message,'isread':isread}

//   const putfeed = async () =>{
//     const data = await fetch('http://localhost:5000/feeds',{
//       method:'POST',
//       headers:{
//         'Content-type' : 'application/json'
//       },
//       body: JSON.stringify(newfeed)
//     })

//     return data
//   }

//   const datareturn = async() =>{
//     const res = await putfeed()
//     const data = await res.json()
//     return data
//   }

//   //console.log(datareturn())
//   setFeeds([...feeds,datareturn()])
// }