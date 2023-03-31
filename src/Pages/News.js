import React, { useEffect, useState } from 'react'

function News(props) {
  var [post,setPost]=useState([])
  useEffect(()=>{
    fetch(` https://newsapi.org/v2/top-headlines?country=us&category=${props.title}&apiKey=3da1cc250f014f08a5c16d9961886eda`).then((res)=>res.json()).then((data)=>setPost(data.articles))
  },[])
  return (
    <div className='container pt-5'>
      <h2>{props.title}</h2>
    <div className='row'>
      {post.slice(0,8).map((a)=>(
         <div className='col-lg-3 py-2'>
         <div className="card">
       <img src={a.urlToImage} className="card-img-top w-100" alt="..."/>
       <div className="card-body">
         <p className="card-text">{a.title.slice(0,50)}</p>
         <a href="#" class="btn btn-primary">Read More</a>
       </div>
     </div>
         </div>
      ))}
   
      
    </div>
    </div>
  )
}

export default News
