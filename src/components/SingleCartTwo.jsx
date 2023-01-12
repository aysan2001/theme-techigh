import React from 'react'
import { useCart } from 'react-use-cart';

const SingleCartTwo = ({photo, title,price,item}) => {
    const { addItem }= useCart();
  return (
   
    <div className='col-12 col-sm-4 col-md-3'>

<div className="card">
  <img src={photo} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{price}$</p>
    <button className="btn btn-light bg-warning" onClick={() =>addItem(item)}>+ Add to Cart</button>
  </div>
</div>


    </div>
  )
}

export default SingleCartTwo