import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import News from '../Pages/News';
import Banner from './Banner';
import Samachar from '../Pages/Samachar';
function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
      <Link className="navbar-brand me-auto" to="/">
        <img src='./newsimg/logo.png' alt=''/>
      </Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/samachar">News</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/entertainment">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sport">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/business">Business</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li> */}
        
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
 
</nav>
<Routes>
  <Route path="/" element={<Banner/>}/>
  <Route path="/samachar" element={<Samachar/>}/>
  <Route path="/entertainment" element={<News title="Entertainment"/>}/>
  <Route path="/health" element={<News title="Health" />}/>
  <Route path="/sport" element={<News title="Sports" />}/>
  <Route path="/business" element={<News title="Business" />}/>
  
  </Routes>
    </>
  )
}

export default Nav
