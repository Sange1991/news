import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Details() {
    let {cid}=useParams();
    var [post, setPost]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${cid}`).then((res)=>res.json()).then((data)=>setPost(data))
    },[])
  return (
    <div>
    
      {/* {post.find((a)=>( */}
          <div className='container'>
        <h2>Details</h2>
        <p>{post.title}</p>
        <p>{post.url}</p>
        </div>
      {/* ))} */}
        
      
    </div>
  )
}

export default Details
