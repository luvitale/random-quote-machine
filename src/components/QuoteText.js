import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

class QuoteText extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="QuoteText">
				<div id="quote-text">
					<FontAwesomeIcon icon={faQuoteLeft} id="quote-left-icon" /><span id="text">{this.props.quote}</span>
				</div>
				<div id="quote-author">
					<span id="author">- {this.props.author}</span>
				</div>
			</div>
		);
	};
};

export default QuoteText;