import React, { Component } from 'react'
import myphoto2 from '../img/sekil1.webp'
import myphoto3 from '../img/sekil2.webp'
// import myphoto4 from '../img/sekil3.webp'

export class New extends Component {
  render() {
    return (
      <>
      
      <div className="container mt-5">

<div className="row">
    <div className="col-12 col-sm-7 col-md-7">
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={myphoto2} className="d-block w-100" alt="..." />
    <div className="carousel-caption d-none d-md-block">
  <p >BEST WIRELESS <br /> CHARGER</p> 
<h5>2021 LIMITED- <br /> EDITION <br /> COLLECTION</h5> <br />
<button className='btn btn-warning'>Shop Now</button>
</div>

    </div>
    <div className="carousel-item">
      <img src={myphoto3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
  <p className='text-dark' >SAVE 35%-55% <br /> WEEKLY</p> 
<h5 className='text-dark'>Clearance Sale- <br /> 20% OFF <br /> </h5> <br />
<button className='btn btn-warning text-dark'>Shop Now</button>
</div>
    </div>
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>





    <div className="col-12 col-sm-5 col-md-5">

<div className="col-6 qutu1">
<p className='text-light'>New Sale</p>
<h5 className='text-light'>Smart Watch</h5>
<button className='btn btn-light'>Shop Now</button>
</div>


<div className="col-6 qutu2">
<p >New Arrivals</p>
<h5  >Greatest Camera</h5>
<button className='btn btn-light'>Save 20%</button>

</div>

        










    </div>
</div>


      </div>
      
      </>
    )
  }
}

export default New