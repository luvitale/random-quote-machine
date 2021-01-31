import './App.css';
import QuoteText from './components/QuoteText.js';
import QuoteButtons from './components/QuoteButtons.js';
import React from 'react';
import $ from 'jquery';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quoteText: "",
			quoteAuthor: "",
			quotesData: [],
		};
		this.getQuotes = this.getQuotes.bind(this);
		this.changeQuote = this.changeQuote.bind(this);
		this.changeQuoteGUI = this.changeQuoteGUI.bind(this);
		this.getRandomQuote = this.getRandomQuote.bind(this);
	};
	
	getQuotes() {
		console.log("Get quotes");
		
		return $.ajax({
			headers: {
				Accept: 'application/json'
			},
			url: this.props.urlQuotes,
			success: jsonQuotes => {
				if (typeof jsonQuotes === 'string') {
					this.setState({
						quotesData: JSON.parse(jsonQuotes).quotes
					});
				}
			}
		});
	};
	
	getRandomQuote() {
		console.log("Get random quote");
		
		const {quotesData} = this.state;
		
		return quotesData[
			Math.floor(Math.random() * quotesData.length)
		];
	};
	
	changeQuoteGUI() {
		const {colors} = this.props;
		
		let color = Math.floor(Math.random() * colors.length);
		document.body.style.color = colors[color];
		document.body.style.backgroundColor = colors[color];
		
		const buttonElements = document.getElementsByClassName("button");
		Array.prototype.map.call(buttonElements, elem => 
			elem.style.backgroundColor = colors[color]
		);
		
		document.getElementById("quote-text").animate([
			{opacity: 0},
			{opacity: 1}
		], {
			duration: 1600
		});
		
		document.getElementById("quote-author").animate([
			{opacity: 0},
			{opacity: 1}
		], {
			duration: 1600
		});
	}
	
	changeQuote() {
		console.log("Change quote");
		
		const randomQuote = this.getRandomQuote();
		this.setState({
			quoteText: randomQuote.quote,
			quoteAuthor: randomQuote.author
		});
		
		this.changeQuoteGUI();
	};
	
	render() {
		const {quotesData, quoteText, quoteAuthor} = this.state;
		
		return (
			<div className="App" id="wrapper">
				<div id="quote-box">
					<QuoteText
						quote={quoteText}
						author={quoteAuthor}
					/>
					<QuoteButtons
						newQuote={this.changeQuote}
						quoteText={quoteText}
						quoteAuthor={quoteAuthor}
					/>
				</div>
				<footer>
					By <a href="https://gitlab.com/luvitale"> Luciano Nahuel Vitale </a>
				</footer>
			</div>
		);
	};
	
	componentDidMount() {
		this.getQuotes().then(() => {
			this.changeQuote()
		});
	}
};

export default App;
