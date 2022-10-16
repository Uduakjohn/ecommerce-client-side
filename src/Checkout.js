import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal';
import "./Checkout.css"

function Checkout() {
    const[{basket,user}] = useStateValue();
  return (
    <div className='checkout'>
    <div className='checkout__left'>
      <div>
        <h3> Hello</h3>
        <h2 className='checkout__title'>Your Shopping Basket</h2>

        {basket.map(item => (
            <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.image}
            />
        ))}
      </div>
    </div>
            <div className='checkout__right'>
                <Subtotal/>
            </div>

    </div>
    
  )
}

export default Checkout
