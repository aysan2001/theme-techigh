import React from 'react'

const Banner = () => {
  return (
   <>
   
<div className="row  py-5 row-cols-1 row-cols-lg-3">
  <div className="col d-flex align-items-start">
   
    <div className='smartt'>
      <p >New Arrivals</p>
      <h3>Smart Mobile <br /> 15% Off</h3>
      <a href="#a" className="btn btn-dark"> Shop Now </a>
    </div>
  </div>

  <div className="col d-flex align-items-start">
  <div className='smartt1'>
      <p >New Arrivals</p>
      <h3>Smart Mobile <br /> 15% Off</h3>
      <a href="#a" className="btn btn-warning"> Shop Now </a>
    </div>
  </div>

  <div className="col d-flex align-items-start">
  <div className='smartt2'>
      <p >New Arrivals</p>
      <h3>Smart Mobile <br /> 15% Off</h3>
      <a href="#a" className="btn btn-light"> Shop Now </a>
    </div>
  </div>
</div>

   
   
   </>
  )
}

export default Banner