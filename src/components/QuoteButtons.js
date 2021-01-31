import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

class QuoteButtons extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="QuoteButtons">
			
				<a href="#" className="button" id="tweet-quote">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				
				<button className="button" id="new-quote" onClick={this.props.newQuote}>
					New quote
				</button>
				
			</div>
		);
	};
};

export default QuoteButtons;