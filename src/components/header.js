import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TitleList from './title_list';
import Categories from '../data/categories';

class Header extends Component {
	
	renderLists() {
		return Categories.map((item) => {
			return (
				<TitleList key={item.code} linkTo={item.code} name={item.title}/>
			)
		})
	}
	
	render() {
	
		const topRowStyle = {textAlign:"center", marginBottom:"20px"}
		const renderListStyle = {width:"100%", textAlign:"center", marginBottom:"20px"}
	
		return(
			<div className="container">
				<div style={topRowStyle} className="row">
					<div className="col-xs-2">
						<h3><i className="glyphicon glyphicon-chevron-left"></i></h3>
					</div>
					<div className="col-xs-8">
						<Link to="/"><h1>Store</h1></Link>
					</div>
					<div>
						<Link to="/cart" ><h3><i className="glyphicon glyphicon-shopping-cart"></i></h3></Link>
					</div>
				</div>
				<div style={renderListStyle} className="row">
					{this.renderLists()}
				</div>
			</div>
		)
	}
};

export default Header;