import React from 'react'
import { useState,useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Slider() {
    var [post,setPost]=useState([])
    useEffect(()=>{
      fetch(` https://newsapi.org/v2/top-headlines?country=us&apiKey=3da1cc250f014f08a5c16d9961886eda`).then((res)=>res.json()).then((data)=>setPost(data.articles))
    },[])
  return (

    <div className='container mt-5 slider'>
        <h2>Top Headlines</h2>
        <OwlCarousel className='owl-theme' loop margin={10} nav>
            {post.map((a)=>(
                    
                      <div class="card">
                      <img className='w-100 img-fluid' src={a.urlToImage} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <p class="card-text">{a.title.slice(0,45)}</p>
                      </div>
                    </div>
            ))}
  
        </OwlCarousel>;
      
    </div>
  )
}

export default Slider
