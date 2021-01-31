import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


class QuoteButtons extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="QuoteButtons">
			
				<a className="button" id="tweet-quote" title="Tweet this quote!"
					href={'https://twitter.com/intent/tweet?' +
						'hashtags=freeCodeCamp,quotes&' +
						'related=lucianonavitale&' +
						'text="' + this.props.quoteText + '" ' + this.props.quoteAuthor
					}
				>
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