import React from "react";
import "./Checkout.css";
import {Button} from 'react-bootstrap';
import { useStateValue } from "./StateProvider";


function Checkout({ id, name, price, disc, image }) {
	const [{ basket }, dispatch] = useStateValue();

const removefrombasket = ()=>
{
dispatch({

type:'REMOVE_FROM_BASKET',
id:id

})

}


	
	return (
		<div className='checkoutProduct'>
			<img src={image} alt='' className='checkoutProduct__image' />
			<div className='checkoutProduct__info'>
				<p className='checkoutProduct__title'>{name}</p>

				<p className='checkoutProduct__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
    <p>{disc}</p>
				<div className='checkoutProduct__rating'>
				
				</div>

				<Button onClick={removefrombasket}>Remove from basket</Button>
			</div>
			
		</div>
	);
}

export default Checkout;
