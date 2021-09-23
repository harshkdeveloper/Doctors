import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
    <header>
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 text-sm">
            <div className="site-info">
              <NavLink to="#"><span className="mai-call text-primary"></span> +0000000000</NavLink>
              <span classNameName="divider">|</span>
              <NavLink to="#"><span className="mai-mail text-primary"></span> mail@gmail.com</NavLink>
            </div>
          </div>
          <div className="col-sm-4 text-right text-sm">
            <div className="social-mini-button">
              <NavLink to="#"><span className="mai-logo-facebook-f"></span></NavLink>
              <NavLink to="#"><span className="mai-logo-twitter"></span></NavLink>
              <NavLink to="#"><span className="mai-logo-dribbble"></span></NavLink>
              <NavLink to="#"><span className="mai-logo-instagram"></span></NavLink>
            </div>
          </div>
        </div> 
      </div>
    </div> 

    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="#"><span className="text-primary">Health</span>-Care</NavLink>

        <form action="#">
          <div className="input-group input-navbar">
            <div className="input-group-prepend">
              <span className="input-group-text" id="icon-addon1"><span className="mai-search"></span></span>
            </div>
            <input type="text" className="form-control" placeholder="Enter keyword.." aria-label="Username" aria-describedby="icon-addon1"/>
          </div>
        </form>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport" aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupport">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/doctor">Doctors</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">News</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-primary ml-lg-3" to="#">Login / Register</NavLink>
            </li>
          </ul>
        </div> 
      </div> 
    </nav>
  </header> 
        </div>
    )
}

export default Header
