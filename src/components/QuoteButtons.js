import React from 'react'

class QuoteButtons extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="QuoteButtons">
				<button type="button" id="new-quote" onClick={this.props.newQuote}>New quote</button>
				<a href="#" id="tweet-quote">Tweet quote</a>
			</div>
		);
	};
};

export default QuoteButtons;