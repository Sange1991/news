import React, { useEffect, useState } from 'react'
import Details from './Details';
import { Routes, Route, Link } from "react-router-dom";
function Samachar() {
    var[post,setPost]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`).then((res)=>res.json()).then((data)=>setPost(data))
    },[])

  return (
    <>
    <div className='container py-4'>
        <div className='row'>
            {post.slice(0,9).map((a)=>(
            <div className='col-lg-4 py-3'>
            <div class="card">
            <img src={a.thumnailUrl} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{a.title}</h5>
                <p class="card-text">{a.url}</p>
                <Link to={`/details/${a.id}`} class="btn btn-primary">Read More</Link>
            </div>
            </div>
            </div>
            ))}
            
        </div>
      
    </div>
    <Routes>
        <Route path="/details/:cid" element={<Details/>}/>
    </Routes>
    </>
  )
}

export default Samachar
