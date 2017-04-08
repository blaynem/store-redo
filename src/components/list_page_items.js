import React from 'react';
import { Link } from 'react-router-dom';

const imgStyle = {
	maxHeight:"100%",
	margin:"auto"
}
const textStyle = {
	margin:"0 0 10px 0",
	fontSize:"1em",
	color:"black"
}

const listsDetailsStyle = {
	textAlign:"center",
	margin:"40px 0"
}

const ListPageItems = (props) => (
	<div className="col-xs-6 col-sm-4">
		<Link to={`/detail/${props.catId}/${props.lists.code}`}>
			<div className="row">
				<img
					style={imgStyle}
					src={`/images/${props.lists.img_src[1]}.jpg`}
					alt={props.lists.text}
					className="img-responsive"/>
				<div style={listsDetailsStyle} className="row">
					<h3 style={textStyle}>{props.lists.text}</h3>
					<h3 style={textStyle}>${props.lists.price}</h3>
				</div>
			</div>
		</Link>
	</div>
)

export default ListPageItems;