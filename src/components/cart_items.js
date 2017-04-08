import React from 'react';
import { Link } from 'react-router-dom';

// ignoring this for now, can't use an object as a child prop.
// for some reason this isn't making sense to me -.-
const CartItems = (props) => (
		<div className="row">
			<div className="col-xs-2">
	<div>{JSON.stringify(props.cartItem)}</div>
			</div>
		 </div>
				// <h4>Qty: {props.cartItem.qty}</h4>
)

export default CartItems;
			// <div className="col-xs-1">
				// <Link to={`/detail/${props.cartItem.category}/${props.specificItem.code}`}><img style={{maxWidth:"100%"}} src={`/images/${props.cartItem.code}b.jpg`} alt="yes"/></Link>
			// </div>
			// <div className="col-xs-4">
			// 	<Link to={`/detail/${props.cartItem.category}/${props.specificItem.code}`}>{props.specificItem.text}</Link>
			// </div>
			// <div className="col-xs-2">
			// 	Size: {props.cartItem.size}
			// </div>
			// <div className="col-xs-2">
			// 	Price: ${props.specificItem.price}
			// </div>
			//  <div className="col-xs-1">
			// 	 X
			//  </div>