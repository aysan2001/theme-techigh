import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
     <>
<nav className="navbar navbar-expand-lg bg-warning">
  <div className="container">
    <Link className="navbar-brand " to="/">Shop By Categories</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link ms-4" aria-current="page" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-4" to="/return">Return Policy</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-4" to="/terms">Terms $ Conditions</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-4" to="/shipping">Shipping $ Returns</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-4" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item dropdown ms-4">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           More
          </NavLink>
          <ul className="dropdown-menu">
            <li> <NavLink className="dropdown-item" to="/blog">Blog</NavLink></li>
    
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

     
     
     </>
    )
  }
}

export default Nav