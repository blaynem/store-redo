import React, { Component } from 'react';

import ListPageItems from '../components/list_page_items';
import Items from '../data/items';

class ListPage extends Component {

	renderListPageCategories() {
		const catIdParms = this.props.match.params.catId
		const itemsData = Items[catIdParms]

		return itemsData.map((item) => {
			return <ListPageItems key={item.code} lists={item} catId={catIdParms}/>
		})
	}

	render() {
		return(
			<div>
				{this.renderListPageCategories()}
			</div>
		)
	}
}

export default ListPage;