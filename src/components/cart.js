import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
	renderCart() {

		return this.props.cart.map((items, i) => {
			return (
				<li style={{height:"100px"}} className="list-group-item" key={items + i}>
					<div className="row">
						<div className="col-xs-1">
							<img style={{maxWidth:"100%"}} src={`/images/${items.code}b.jpg`} alt="yes"/>
						</div>
						<div className="col-xs-4">
							{items.code}
						</div>
						<div className="col-xs-2">
							<h4>Qty: {items.qty}</h4>
						</div>
						<div className="col-xs-2">
							Size: {items.size}
						</div>
						<div className="col-xs-2">
							Price: $45.00
						</div>
						<div className="col-xs-1">
							X
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
					<h3 style={{textAlign:"center"}}>(# items)</h3>
				</div>
				<div className="row">
					<ul className="list-group">
						{this.renderCart()}
					</ul>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { cart: state.cart }
}

export default connect(mapStateToProps)(Cart);