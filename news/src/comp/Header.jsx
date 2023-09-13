import React from 'react'
import "./header.scss"
import { Link } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'

function Header() {
  
  return (
    <header>
      <section className="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img style={{ width: 200 }} src="https://english.onlinekhabar.com/wp-content/themes/onlinekhabar-english-2020/img/site-main-logo.png" alt="" />
              <br />
              <iframe scrolling="no" border="0" frameborder="0" marginwidth="0" marginheight="0" allowtransparency="true" src="https://www.ashesh.com.np/linknepali-time.php?dwn=only&font_color=333333&font_size=14&api=990094n287" width="165" height="22"></iframe>
            </div>
            <div className="col-lg-9">
              <div className="row">
              <div className="col-lg-9">
              <nav class="navbar navbar-expand-lg ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav  ">
                    <li class="nav-item">
                      <Link to={`/`} class="nav-link active " aria-current="page">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link to={`/cat/business`} class="nav-link" >Business</Link>
                    </li>
                    <li class="nav-item">
                      <Link to={`/cat/entertainment`} class="nav-link" >Entertainment</Link>
                    </li>
              
                    <li class="nav-item">
                      <Link to={`/cat/health`} class="nav-link" >Health</Link>
                    </li>
                    <li class="nav-item">
                      <Link to={`/cat/science`} class="nav-link" >Science</Link>
                    </li>
                    <li class="nav-item">
                      <Link to={`/cat/sports`} class="nav-link" >Sports</Link>
                    </li>
                    <li class="nav-item">
                      <Link to={`/cat/technology`} class="nav-link" >Technology</Link>
                    </li>

                  </ul>
                </div>

              </nav>
              </div>
              <div className="col-lg-2 navbar navbar-expand-lg  gap-3">
            <i class="fa fa-search search" aria-hidden="true"></i>
            <button type="button" class="btn btn-outline-light">Light</button>
              </div>
              <div className="col-lg-1 navbar navbar-expand-lg gap-3">
            <img style={{width:40,borderRadius:100}} src="https://english.onlinekhabar.com/wp-content/themes/onlinekhabar-english-2020/img/flag.png" alt="" />
             <span >Nepali</span>
              </div>
            </div>
            </div>
          </div>
        </div> 
      </section>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/cat/:cid' element={<Category/>}/>
    </Routes>
    </header>
  
  )
}

export default Header