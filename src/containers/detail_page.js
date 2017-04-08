import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

import Items from '../data/items';

class DetailPage extends Component {
	constructor(props){
		super(props)

		this.state = { sizeChoice: "xs", quantityChoice: 1}
		this.onClick = this.onClick.bind(this);
		this.onChoiceChange = this.onChoiceChange.bind(this);
	}

	// on button click add to cart
	// needs to pass categoryId(catId), itemId, sizeChoice, and quantityChoice in that order.
	onClick(e) {
		const { itemId, catId } = this.props.match.params
		const { sizeChoice, quantityChoice } = this.state

		this.props.addToCart(catId, itemId, sizeChoice, quantityChoice);
	}

	// on selection of {name}, switch to new selected value
	onChoiceChange(e) {
		const target = e.target
		const value = target.value
		const name = target.name

		this.setState({ [name]: value})
	}

	// renders the size/quantity/features lists
	// depending on if you set the type to option or list
	renderLists(toList, type){
		if (type === "option"){
			return toList.map((item, i) => {
				return <option value={item} key={item + i}>{item}</option>
			})
		} else if (type === "list") {
			return toList.map((item, i) => {
				return <li key={item + i}>{item}</li>
			})
		}
	}

	render() {
		// grabs the params from url to check what category it's on
		const catParams = this.props.match.params.catId
		// grabs the params from url to check what item it's on
		const itemParams = this.props.match.params.itemId
		// grabs the data of items and sets the category page to 
		// more easily grab specific items
		const itemDetails = (Items[catParams]);

		// loops over the data of items, finds which one is equal to the page
		// you're on, then sets that as the details.
		var details = {}
		itemDetails.forEach((item) =>{
			if (item.code === itemParams){
				details = item
			}
		})

		const imgsrc = `/images/${details.img_src[0]}.jpg`;
		const imgStyle = {
			maxHeight:"100%",
			margin:"auto"
		}
		const buttonStyle = {
			backgroundColor: "white",
			padding: "10px 50px",
			border: "2px solid black",
			color: "black",
			textTransform: "uppercase"
		}
		const sizeListStyles = {
			marginLeft:"54px",
			width:"75%",
			height:"30px",
			backgroundColor:"white",
			textTransform:"uppercase"
		}
		const quantityListStyles = {
			marginLeft:"25px",
			marginTop:"10px",
			width:"75%",
			height:"30px",
			backgroundColor:"white"
		}

		return(
			<div className="row">
				<div className="col-sm-6">
					<img
						style={imgStyle}
						src={imgsrc}
						alt={details.text}
						className="img-responsive"/>
				</div>
				<div className="col-sm-6">
					<h2>{details.text}</h2>
					<h3>${details.price}</h3>
					<div className="row">
						<span>Size:</span>
						<select
							name="sizeChoice"
							style={sizeListStyles}
							value={this.state.sizeChoice}
							onChange={this.onChoiceChange}>
							{this.renderLists(details.sizes, "option")}
						</select>
					</div>
					<div className="row">
						<span>Quantity:</span>
						<select
							name="quantityChoice"
							style={quantityListStyles}
							value={this.state.quantityChoice}
							onChange={this.onChoiceChange}>
							{this.renderLists([1, 2, 3, 4, 5], "option")}
						</select>
					</div>
					<h3>Description</h3>
					<h4>{details.description}</h4>
					<h3>Features</h3>
					<ul>
						{this.renderLists(details.features, "list")}
					</ul>
					<div className="row">
						<button
							style={buttonStyle}
							onClick={this.onClick}
							type="button">Add To Cart</button>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { cart: state.cart }
}

export default connect(mapStateToProps, { addToCart })(DetailPage);