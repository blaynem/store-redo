import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
	render() {
		return(
			<div>{JSON.stringify(this.props.cart)}</div>
		)
	}
}

function mapStateToProps(state) {
	return { cart: state.cart }
}

export default connect(mapStateToProps)(Cart);