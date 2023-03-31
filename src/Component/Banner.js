import React from 'react'
import { Routes,Route,Link } from 'react-router'
function Banner() {
  return (
    <div className='container mainwrapper'>
    <div className='row'>
    <div className='col-lg-6 py-4'>
        <div className='mainbox'>
            <img className='w-100 img-fluid' src='./newsimg/img1.jpg' alt=''/>
            <div className='imgsmall'>
          <a href='/sport'> <button type="button" class="btn btn-primary py-2">Fashion</button></a> 
            <h2>What’s In Trend In Womens Fashion Summer?</h2>
            <p>You can customize the view Blog posts with a simple mouse click and immediately see the result of your changes.</p>
                <p>By Marilou Kelleher | 25 Dec, 2023</p>

            </div>
        </div>
    </div>
    <div className='col-lg-6 py-4'>
    <div className='design'>
            <img className='w-100 img-fluid' src='./newsimg/img2.jpg' alt=''/>
            <div className='imgxsmall'>
           <a href='/entertainment'><button type="button" class="btn btn-primary py-2">Entertainment</button></a> 
            <h2>What’s In Trend In Womens Fashion Summer?</h2>
            <p>You can customize the view Blog posts with a simple mouse click and immediately see the result of your changes.</p>
                <p>By Marilou Kelleher | 25 Dec, 2023</p>

            </div>
        </div>
        <div className='d-flex gap-2 py-2'>
        <div className='design'>
            <img className='w-100 img-fluid' src='./newsimg/img3.jpg' alt=''/>
            <div className='imgxsmall'>
           <a href='/health'> <button type="button" class="btn btn-primary py-2"> Health</button></a>
            <h5>Top 10 Healthy Food</h5>
                <p>By Aliza | 22 Dec,2022</p>

            </div>
        </div>
        <div className='design gap-2 '>
            <img className='w-100 img-fluid' src='./newsimg/img4.jpg' alt=''/>
            <div className='imgxsmall'>
          <a href='/business'>  <button type="button" class="btn btn-primary py-2">Business</button></a>
            <h5>What Makes a Leader?</h5>
                <p>By Anny | 22 Dec,2022</p>

            </div>
        </div>
        </div>
    </div>

    </div>
      
    </div>
  )
}

export default Banner
