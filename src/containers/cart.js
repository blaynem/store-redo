import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../actions';

// import CartItems from '../components/cart_items';
import Items from '../data/items';

class Cart extends Component {
	constructor(props) {
		super(props)

		this.getTotal(this.props);
		this.state = { total: this.getTotal(this.props) }
		this.removeItem = this.removeItem.bind(this);
	}

	componentWillReceiveProps(nextProps){
		const oldTotal = this.state.total
		const newTotal = this.getTotal(nextProps)
		const difference = oldTotal - newTotal

		this.setState({ total: this.state.total - difference})
	}

	// meant to be called with either this.props or nextProps
	getTotal(propsPassed){
		let total = 0;
		// gets the data from the props.cart, then maps over it to return the list of items in cart
		propsPassed.cart.map((cartItem, i) => {		
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
		console.log(total)
		return total
	}

	removeItem(e) {
		const toRemove = (e.target.id);

		this.props.removeFromCart(toRemove)
	}

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
					<h3 style={{textAlign:"center"}}>({this.props.cart.length} items)</h3>
				</div>
				<div className="row">
					<ul className="list-group">
						{this.renderCart()}
					</ul>
				</div>
				<div className="row">
					<h4>Total: {this.state.total.toFixed(2)}</h4>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { cart: state.cart }
}

export default connect(mapStateToProps, { removeFromCart })(Cart);