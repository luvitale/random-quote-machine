import React from 'react'

class QuoteText extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="QuoteText">
				<p id="text">{this.props.quote}</p>
				<p id="author">{this.props.author}</p>
			</div>
		);
	};
};

export default QuoteText;