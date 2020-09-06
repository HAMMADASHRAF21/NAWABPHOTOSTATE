import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal,get } from "./reducer";
import Item from './Item';

function SubTotal() {
	const [{basket}] = useStateValue();
	

    return (
        <div className="subtotal">
<CurrencyFormat
				renderText={(value) => (
					<div style={{ margin: 0 }}>
						<p>
							Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' /> This order contains a gift
						</small>
					</div>
				)}
			
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
				
            <button >Proceed</button>
				
        </div>
    )
}

export default SubTotal
