import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../actions';

// import CartItems from '../components/cart_items';
import Items from '../data/items';

class Cart extends Component {
	constructor(props) {
		super(props)

		this.removeItem = this.removeItem.bind(this);
	}

	// meant to be called with either this.props or nextProps
	getTotal(){
		let total = 0;
		// gets the data from the props.cart, then maps over it to return the list of items in cart
		this.props.cart.map((cartItem, i) => {		
			// loops through the specific category of Data Items, finds the price
			// of the specific item, then multiplies it by the quantity to get total
			Items[cartItem.category].forEach((dataItem) => {
				if (dataItem.code === cartItem.code) {
					total += (dataItem.price * cartItem.qty)
					return 
				}
				return
			})
		})
		return total
	}

	// will only render the checkout button and total if there are items in cart
	renderCheckouts() {
		const totalPrice = this.getTotal().toFixed(2)
		if (this.props.cart.length > 0) {
			return (
				<div>
					<h4 style={{display: "inline-block"}} className="pull-right">Total: {this.getTotal().toFixed(2)}</h4>
					<button 
						style={{display: "inline-block"}}
						className="btn pull-right"
						onClick={function click(){alert("OR NAH")}}>Checkout</button>
				</div>
			)
		}
		return <h3 className="text-center" >Your <i className="glyphicon glyphicon-shopping-cart"></i> is empty.</h3>
	}

	// if cart is empty, it won't display how many items are inside
	renderCheckoutTotalItems() {
		if (this.props.cart.length > 0) {
			return <h3 style={{textAlign:"center"}}>({this.props.cart.length} items)</h3>
		}
	}

	// runs the removeFromCart action
	removeItem(e) {
		const toRemove = (e.target.id);

		this.props.removeFromCart(toRemove)
	}

	// renders the entire cart based on items in state.cart
	renderCart() {
		// gets the data from the props.cart, then maps over it to return the list of items in cart
		return this.props.cart.map((cartItem, i) => {			
			var specificItem = {};
			// loops through the specific category of Data Items, then sets itemName to 
			// the correct Items.category.text
			Items[cartItem.category].forEach((dataItem) => {
				if (dataItem.code === cartItem.code) {
					specificItem = dataItem
					return 
				}
				return
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
		return(
			<div>
				<div className="row">
					<h2 style={{textAlign:"center"}}>Cart</h2>
					{this.renderCheckoutTotalItems()}
				</div>
				<div className="row">
					<ul className="list-group">
						{this.renderCart()}
					</ul>
				</div>
				<div className="row checkout-box">
					{this.renderCheckouts()}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { cart: state.cart }
}

export default connect(mapStateToProps, { removeFromCart })(Cart);