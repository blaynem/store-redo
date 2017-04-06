import React, { Component } from 'react';

import Categories from '../data/categories';
import HomePageCategories from '../components/home_page_categories';

class HomePage extends Component {

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

export default HomePage;