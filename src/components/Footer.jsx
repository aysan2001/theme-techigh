import React from 'react'

const Footer = () => {
  return (
  <>
  
<section className='feet'>
    <div className="feet1">
    <div className="feet1a">
    <div className="feet1aa">
    <p><i class="fa-solid fa-envelope"></i> Sign Up For Newsletter</p>
     <p>...and receive $20 coupon on next shopping</p>
    </div>
    </div>


    <div className="feet1b">
  <div className="feet1bb">
  <form className="d-flex" role="search">
        <input className="form-control " type="search" placeholder="Search the store" aria-label="Search" />
        <button className="btn btn-warning" type="submit">Subscribe</button>
      </form>
  </div>
    </div>
    </div>
</section>
  

  {/*  */}

<div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
     
      <p className="text-muted">info</p>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted"><i class="fa-solid fa-location-dot"></i> location_onAcme Widgets</a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">123 Widget Street</a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Acmeville, AC 12345</a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">United States of America</a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted"><i class="fa-solid fa-envelope"></i> mail_outlinesupport@yourstore.com
</a></li>
<li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted"><i class="fa-solid fa-phone"></i> local_phone(00)1234 567891</a></li>

      </ul>
    </div>
    <div className="col mb-3">
    </div>
    <div className="col mb-3">
      <h5>Navigate</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">About Us</a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Terms & Conditions</a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Contact Us</a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">BlogSitemap</a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Return Policy</a></li>
      </ul>
    </div>
    <div className="col mb-3">
      <h5>Categories</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Shop All</a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Smart Android TV</a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Computers &</a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Laptops</a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Pendrive USB</a></li>
      </ul>
    </div>
    <div className="col mb-3">
      <h5>Popular Brands</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted"><button className='btn btn-dark'>OFS</button></a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted"><button className='btn btn-dark'>Sagaform</button></a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted"><button className='btn btn-dark'>Common Good</button></a></li>
        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted"><button className='btn btn-dark'>View All</button></a></li>
      </ul>
    </div>
  </footer>
</div>

  
  
  </>
  )
}

export default Footer