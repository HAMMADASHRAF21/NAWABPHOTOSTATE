import React from 'react';
import './Item.scss';
import { useStateValue } from './StateProvider';
import Checkout from './Checkout';
import Subtotal from './SubTotal';
function Item() {

const [{basket},dispatch] = useStateValue();

    return (
        <div className="checkout">
          <div className="left">
        { basket.length === 0 ? (<h2> YOUR BASKET IS EMPTY</h2> ):(
<h2>Your Shopping Basket</h2>
        )
};
{
  basket.map(item=> 
  (

<Checkout key={Math.random()} id={item.id} name={item.name} price={item.price} image={item.image}  disc={item.disc} />

  ))}

</div>

{
  basket?.length > 0 && (
<div className="right">
<Subtotal  />

</div>


  )
}



        </div>
    )
}

export default Item
