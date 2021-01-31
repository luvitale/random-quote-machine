import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


class QuoteButtons extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const postText = '"' + this.props.quoteText + '" ' + this.props.quoteAuthor
		
		return (
			<div className="QuoteButtons">
			
				<a className="button" id="tweet-quote" title="Tweet this quote!"
					href={'https://twitter.com/intent/tweet?' +
						'hashtags=freeCodeCamp,quotes&' +
						'related=lucianonavitale&' +
						'text=' + postText
					}
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				
				<a className="button" id="whatsapp-quote" title="Share on WhatsApp!"
					href={'https://api.whatsapp.com/send?' +
						'text=' + postText
					}
				>
					<FontAwesomeIcon icon={faWhatsapp} />
				</a>

				<button className="button" id="new-quote" onClick={this.props.newQuote}>
					New quote
				</button>
				
			</div>
		);
	};
};

export default QuoteButtons;