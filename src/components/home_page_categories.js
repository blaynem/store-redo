import React from 'react';
import { Link } from 'react-router-dom';

const imageStyle = {
	maxHeight:"100%",
	width:"100%"
}

const titleButtonStyles = {
	textAlign:"center",
	margin:"40px 0"
}

const buttonStyle = {
	backgroundColor: "white",
	padding: "10px 30px",
	border: "2px solid black",
	color: "black"
}

const HomePageCategories = (props) => (
	<div className={props.category.size}>
		<div className="row">
			<Link to={`/list/${props.category.code}`}>
				<img
				style={imageStyle}
				src={`./images/${props.category.img_src}.jpg`}
				alt={props.category.img_alt}
				className="img-responsive"/>
			</Link>
		</div>
		<div style={titleButtonStyles} className="row">
			<h3>{props.category.title}</h3>
			<Link to={`/list/${props.category.code}`}>
				<button
				style={buttonStyle}
				type="button">Shop Now</button>
			</Link>
		</div>
	</div>
)

export default HomePageCategories;