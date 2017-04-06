import React, { Component } from 'react';

class DetailPage extends Component {
	render() {
		console.log(this.props.match.params)
		// const imgsrc = `/images/${details.img_src[0]}.jpg`;
		const imgStyle = {
			maxHeight:"100%",
			margin:"auto"
		}

		return(
			<div className="row">
				<div className="col-sm-6">
					<img style={imgStyle}  className="img-responsive"/>
					hello
				</div>
				<div className="col-sm-6">
				</div>
			</div>
		)
	}
}

export default DetailPage;