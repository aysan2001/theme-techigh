import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {isEmpty, items,cartTotal,updateItemQuantity,removeItem,emptyCart } = useCart();
 
    if(isEmpty) return <img src="https://www.qrcardboard.com/images/cart.gif?v=01" alt=""  style={{height:'500px'}}/>
 
    return (
   <section className='py-4 container'>
     <div className='row justify-content-center'>
        <table className='table table-light table-hover m-0'>
            <tbody>
          {items.map((item,i) =>{
            return(
            <tr key={i} >
                <td>
                    <img src={item.image}  style={{height:'6rem'}} alt="" />
                </td>

                <td>{item.title}</td>
                <td>{(item.price * item.quantity).toFixed(2)}$</td>
                <td>Quantity  ({item.quantity})</td>
                <td>
                    <button className='btn btn-info ms-2'  onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    <button  className='btn btn-info ms-2' onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                    <button  className='btn btn-danger ms-2' onClick={()=> removeItem(item.id)}>Remove Item</button>
                </td>
            </tr>
            )
          })}
          </tbody>
        </table>


<div className='col-auto ms-auto'>
    <h2>Total Price:{cartTotal} $</h2>
</div>

<div className='col-auto'> 
<button className='btn btn-danger m-2' onClick={()=>emptyCart() }>Clear Cart</button>
<button className='btn btn-primary'>Buy Now</button>
 </div>

     </div>
   </section>
  )
}

export default Cart