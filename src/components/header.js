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

	renderBackButton() {
		if (this.props.location.pathname.includes("/detail")) {
			return <button type="button" onClick={() => this.props.history.goBack()}><h3><i className="glyphicon glyphicon-chevron-left"></i></h3></button>
		}
	}
	
	render() {
	
		const topRowStyle = {textAlign:"center", marginBottom:"20px"}
		const renderListStyle = {width:"100%", textAlign:"center", marginBottom:"20px"}
	
		return(
			<div>
				<div style={topRowStyle} className="row">
					<div className="col-xs-2">
						{this.renderBackButton()}
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