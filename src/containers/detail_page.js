import React, { Component } from 'react';

import Items from '../data/items';

class DetailPage extends Component {
	renderLists(toList, type){
		if (type === "option"){
			return toList.map((item, i) => {
				return <option key={item + i}>{item}</option>
			})
		} else if (type === "li") {
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

		return(
			<div style={{margin:0}} className="row">
				<div className="col-sm-6">
					<img style={imgStyle} src={imgsrc} alt={details.text} className="img-responsive"/>
				</div>
				<div className="col-sm-6">
					<h2>{details.text}</h2>
					<h3>${details.price}</h3>
					<div style={{margin:0}} className="row">
						<span>Size:</span>
						<select style={{marginLeft:"54px", width:"75%", height:"30px", backgroundColor:"white", textTransform:"uppercase"}} className="selectpicker">
							{this.renderLists(details.sizes, "option")}
						</select>
					</div>
					<div style={{margin:0}} className="row">
						<span>Quantity:</span>
						<select style={{marginLeft:"25px", marginTop:"10px", width:"75%", height:"30px", backgroundColor:"white"}} className="selectpicker">
							{this.renderLists([1, 2, 3, 4, 5], "option")}
						</select>
					</div>
					<h3>Description</h3>
					<h4>{details.description}</h4>
					<h3>Features</h3>
					<ul>
						{this.renderLists(details.features, "li")}
					</ul>
					<div style={{margin:0}} className="row">
						<button
							style={buttonStyle}
							type="button">Add To Cart</button>
					</div>
				</div>
			</div>
		)
	}
}

export default DetailPage;