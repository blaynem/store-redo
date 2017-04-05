import React, { Component } from 'react';

import Categories from '../data/categories';
import HomePageCategories from '../components/home_page_categories';

class Home extends Component {

	renderHomePageCats() {
		return Categories.map((item) => {
			return <HomePageCategories category={item} key={item.code} />
		})
	}

	render() {
		return(
			<div>
				{this.renderHomePageCats()}
			</div>
		)
	}
}

export default Home;