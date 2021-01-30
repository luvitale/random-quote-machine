import React from 'react'

class QuoteButtons extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="QuoteButtons">
			
				<a href="#" id="tweet-quote">Tweet quote</a>
				<button className="button" id="new-quote" onClick={this.props.newQuote}>New quote</button>
				
			</div>
		);
	};
};

export default QuoteButtons;