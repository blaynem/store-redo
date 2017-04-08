import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../actions';

// import CartItems from '../components/cart_items';
import Items from '../data/items';

class Cart extends Component {
	constructor(props) {
		super(props)

<<<<<<< HEAD
		this.state = { total:0 }
=======
>>>>>>> 73476244515d4238cec2fa7c0cf0e990fd35a280
		this.removeItem = this.removeItem.bind(this);
	}

	removeItem(e) {
		const toRemove = (e.target.id);

		this.props.removeFromCart(toRemove)
	}

<<<<<<< HEAD
	cartPrice(price, qty) {
		console.log(this.state.total)
		console.log(price)
		console.log(qty)
		console.log(price * qty)
		// const itemTotal =

		// this.setState({ total: total += itemTotal})
	}

=======
>>>>>>> 73476244515d4238cec2fa7c0cf0e990fd35a280
	renderCart() {
		// gets the data from the props.cart, then maps over it to return the list of items in cart
		return this.props.cart.map((cartItem, i) => {			
			var specificItem = {};
			// loops through the specific category of Data Items, then sets itemName to 
			// the correct Items.category.text
			Items[cartItem.category].forEach((dataItem) => {
				if (dataItem.code === cartItem.code) {
					specificItem = dataItem
<<<<<<< HEAD
					// console.log(cartItem.qty)
					this.cartPrice(parseInt(specificItem.price), cartItem.qty)
=======
>>>>>>> 73476244515d4238cec2fa7c0cf0e990fd35a280
					return 
				}
			})

			// cartItem = mapped over store cart, so this.props.cart[0]
			// specificItem = gets the data from /data/items, maps over it all until cartItem.code is equal to /data/items["mens_outerwear"]
			return (
				<li style={{height:"85px"}} className="list-group-item" key={cartItem + i}>
					<div className="row">
						<div className="col-xs-1">
							<Link to={`/detail/${cartItem.category}/${specificItem.code}`}><img style={{maxWidth:"100%"}} src={`/images/${cartItem.code}B.jpg`} alt="yes"/></Link>
						</div>
						<div className="col-xs-4">
							<Link to={`/detail/${cartItem.category}/${specificItem.code}`}>{specificItem.text}</Link>
						</div>
						<div className="col-xs-2">
							<h4>Qty: {cartItem.qty}</h4>
						</div>
						<div className="col-xs-2">
							Size: {cartItem.size}
						</div>
						<div className="col-xs-2">
							Price: ${specificItem.price}
						</div>
						<div className="col-xs-1">
							<button className="btn" id={i} onClick={this.removeItem}>X</button>
						</div>
					</div>
				</li>
			)
		})
	}

	render() {
<<<<<<< HEAD
		let total = 0;
=======
>>>>>>> 73476244515d4238cec2fa7c0cf0e990fd35a280
		return(
			<div>
				<div className="row">
					<h2 style={{textAlign:"center"}}>Cart</h2>
					<h3 style={{textAlign:"center"}}>({this.props.cart.length} items)</h3>
				</div>
				<div className="row">
					<ul className="list-group">
						{this.renderCart()}
					</ul>
				</div>
<<<<<<< HEAD
				<div className="row">
					<h4>Total: {this.state.total}</h4>
				</div>
=======
>>>>>>> 73476244515d4238cec2fa7c0cf0e990fd35a280
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { cart: state.cart }
}

export default connect(mapStateToProps, { removeFromCart })(Cart);