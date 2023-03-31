import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='container-fluid'>
      <div className='row mainfooter '>
        <div className='col-lg-3 logofooter'>
          <img className=' img-fluid' src='../newsimg/logo2.png' alt=''/>
          <p>There are many variations of <br/> passages of Lorem Ipsum available, <br/>but the majority have suffered <br/>alteration in some form, by injected<br/> humour, or randomised words which<br/> don't look even slightly believable.</p>
        </div>
        <div className='col-lg-3 implink'>
          
          <ul>
          <h4>Important Link</h4>
         <li> <a href=''>News</a></li>
         <li> <a href=''>Career</a></li>
         <li> <a href=''>Technology</a></li>
         <li> <a href=''>Startups</a></li>
         <li> <a href=''>Gadgets</a></li>
          </ul>
        </div>
        <div className='col-lg-3 browse '>
          <h4>Browse By Tag</h4>
          <button className='btn btn-light '>News</button>
          <button className='btn btn-light '>Entertainment</button>
          <button className='btn btn-light'>Healths</button>
          <button className='btn btn-light '>Sports</button>
          <button className='btn btn-light'>Business</button>
        </div>
        <div className='col-lg-3 socialmedia'>
          <h4>Social Media</h4>
         < a href=''><img src='../newsimg/facebook.png' alt=''/></a> 
         < a href=''><img src='../newsimg/twitter.png' alt=''/></a> 
         < a href=''><img src='../newsimg/insta.png' alt=''/></a> 
         < a href=''><img src='../newsimg/youtube.png' alt=''/></a> 
        </div>
        </div> 
        </div>
        <div className='container-fluid subfooter'>
          <p>Copyright © 2023 Bloggar by broadwayinfosys. All Rights Reserved.</p>
        </div>
    </footer> 
  )
}

export default Footer
