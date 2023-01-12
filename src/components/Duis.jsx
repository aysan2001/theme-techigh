import React, { Component } from 'react'
import '../sass/Duis.css'
import user1 from '../img/user1.jpg'
import user3 from '../img/user3.jpg'
import user4 from '../img/user4.jpg'


 class Duis extends Component {
  render() {
    return (
     <>
     <div className="col-12 mb-5 mt-5">
       <div className="row ">
       <div className=" aysan">
        
         <section>
            <div className="container">
             <div className="testimonials">

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="single-item">
        <div className="row">
            <div className="col-md-5">
                <div className="profile">
                    <div className="img-areaa">
                        <img className='img-area' src={user1} alt="" />
                     
                    </div>

                    <div className="bio">
                        <h4>John Duff</h4>
                        <h5>Web Developer</h5>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="content">
                    <p><span className='fs-5'><i className='fa fa-quote-left'></i></span> <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam vel molestias  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, animi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, adipisci?  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, adipisci? </p>


                </div>
            </div>
        </div>
      </div>
    </div>







    <div className="carousel-item">
    <div className="single-item">
        <div className="row">
            <div className="col-md-5">
                <div className="profile">
                    <div className="img-areaa">
                        <img className='img-area' src={user3} alt="" />
                     
                    </div>

                    <div className="bio">
                        <h4>John Duff</h4>
                        <h5>Web Developer</h5>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="content">
                    <p><span className='fs-5'><i className='fa fa-quote-left'></i></span> <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, adipisci? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, adipisci?                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam vel molestias  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, animi. </p>
               

                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="single-item">
        <div className="row">
            <div className="col-md-5">
                <div className="profile">
                    <div className="img-areaa">
                        <img className='img-area' src={user4} alt="" />
                     
                    </div>

                    <div className="bio">
                        <h4>John Duff</h4>
                        <h5>Web Developer</h5>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="content">
                    <p><span className='fs-5'><i className='fa fa-quote-left'></i></span> <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, adipisci? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, adipisci?                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam vel molestias  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, animi. </p>
               

                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

                </div>
            </div>
         </section>

        </div>





{/* 
        <div className="col-6 valya">
<div className="download-app">
  <h5 className="footer-info-headings">download app</h5>
  <div className="dwld-app">
    <div className="img1"><a href="#a"><img className="__mce_add_custom__" title="01.png" src="https://cdn11.bigcommerce.com/s-gl0yzafqud/product_images/uploaded_images/01.png" alt="01.png" width={170} height={50} /></a></div>
    <div className="img2"><a href="#a"><img className="__mce_add_custom__" title="02.png" src="https://cdn11.bigcommerce.com/s-gl0yzafqud/product_images/uploaded_images/02.png" alt="02.png" width={170} height={50} /></a></div>
  </div>
</div>



        </div> */}
       </div>
     </div>
     
     </>
    )
  }
}

export default Duis