import React from 'react';
import { Link } from 'react-router-dom';

const divStyle = {margin:"0 10px", display:"inline-block", color:"black"};

const TitleList = (props) => (
		<Link to={`/list/${props.linkTo}`}>
			<div style={divStyle}>
				<h3>{props.name}</h3>
			</div>
		</Link>
)

export default TitleList;