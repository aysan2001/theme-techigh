import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import myphoto1 from '../img/logo.png';

const High = () => {
  const {totalItems} = useCart();
  return (
   <>
<div className="container">
<nav className="navbar navbar-expand-lg  my-5">
  <div className="container-fluid">
    <a className="navbar-brand me-5" href="/"><img src={myphoto1} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <form className="d-flex" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search the store" aria-label="Search" />
        <button className="btn btn-warning" type="submit">Search</button>
      </form>

    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
  <li className="nav-item ">
    <Link className="nav-link ms-3"  to="#"><i class="fa-solid fa-phone-volume"></i> <br /> Call Us :(00)1234 567891</Link>
  </li>
  <li className="nav-item ">
    <Link className="nav-link ms-3"  to="#"><i class="fa-regular fa-heart"></i></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link ms-3"  to="/login"><i class="fa-regular fa-user"></i></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link ms-3"  to="/cart"><i class="fa-solid fa-cart-shopping"></i> ({totalItems})</Link>
  </li>
</ul>




    </div>
  </div>
</nav>
</div>

   </>
  )
}

export default High