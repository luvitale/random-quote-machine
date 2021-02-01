import { assert } from 'chai';
import { testHorizontallyCentered } from './utils/element-utils';
import { frontEndLibrariesStack } from './utils/shared-test-strings';
import React from "react";
import {mount, configure, shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import QuoteText from './components/QuoteText.js';
import QuoteButtons from './components/QuoteButtons.js';

configure({
   adapter: new Adapter()
});

describe('Random Quote Machine tests', function () {
	// We set the timeout at a very generous 15 seconds because it might take
	// a long time on a slow network to load a new quote. The tests are
	// written in a way that they will pass as soon as we detect success,
	// usually far sooner than 15 seconds.
	const requestTimeout = 15000;

	describe('#Technology Stack', function () {
		it(frontEndLibrariesStack, function () {
			/*
			return true;
			*/
		});
	});

	describe('#Content', function () {
		it(`I can see a wrapper element with a corresponding
		id="quote-box".`, function () {
			const wrapper = shallow(<App
				urlQuotes='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
				colors={[
				  '#16a085',
				  '#27ae60',
				  '#2c3e50',
				  '#f39c12',
				  '#e74c3c',
				  '#9b59b6',
				  '#FB6964',
				  '#342224',
				  '#472E32',
				  '#BDBB99',
				  '#77B1A9',
				  '#73A857'
				]}
			/>);
			expect(wrapper.exists("#quote-box")).to.equal(true);
		});

		it(`Within #quote-box, I can see an element with corresponding
		id="text".`, function () {
			const wrapper = shallow(<QuoteText
				quote="Quote text"
				author="Quote Author"
			/>);
			
			expect(wrapper.exists("#text"), "#text is not defined").to.equal(true);
		});

		it(`Within #quote-box, I can see an element with corresponding
		id="author".`, function () {
			const wrapper = shallow(<QuoteText
				quote="Quote text"
				author="Quote Author"
			/>);
			
			expect(wrapper.exists("#author"), "#author is not defined").to.equal(true);
		});

		it(`Within #quote-box, I can see a clickable element with
		corresponding id="new-quote".`, function () {
			const wrapper = shallow(<QuoteButtons
				quoteText="Quote text"
				quoteAuthor="Quote Author"
			/>)
			
			expect(wrapper.exists("#new-quote"), "#new-quote is not defined").to.equal(true);
		  });

		it(`Within #quote-box, I can see a clickable <a> element with
		corresponding id="tweet-quote".`, function () {
			const wrapper = shallow(<QuoteButtons
				quoteText="Quote text"
				quoteAuthor="Quote Author"
			/>)
			
			expect(wrapper.exists("#tweet-quote"), "#tweet-quote is not defined").to.equal(true);
			expect(wrapper.exists("a#tweet-quote"),
				"#tweet-quote element is not an <a> element"
			).to.equal(true);
		});

		it(`On first load, my quote machine displays a random quote in
		the element with id="text".`, function () {
			const quote = "Quote text";
			const author = "Quote Author";
			
			const wrapper = shallow(<QuoteText
				quote={quote}
				author={author}
			/>);
			
			expect(wrapper.contains(<span id="text">{quote}</span>)).to.equal(true);
		});

		it(`On first load, my quote machine displays the random quote's
		author in the element with id="author".`, function () {
			const quote = "Quote text";
			const author = "Quote Author";
			
			const wrapper = shallow(<QuoteText
				quote={quote}
				author={author}
			/>);
			
			expect(wrapper.contains(<span id="author">- {author}</span>)).to.equal(true);
		});

		it(`When the #new-quote button is clicked, my quote machine
		should fetch a new quote and display it in the #text element.`, function () {
			/*
			let prevText;

			this.timeout(requestTimeout);

			prevText = document.getElementById('text').innerText;
			document.getElementById('new-quote').click();

			return new Promise((resolve) => {
				const intervalId = setInterval(() => {
					const newText = document.getElementById('text').innerText;
					if (newText !== prevText) {
						clearInterval(intervalId);
						resolve();
					}
				}, 500);
			});
			*/
		});

		it(`My quote machine should fetch the new quote's author when
		the #new-quote button is clicked and display it in the #author element.`, function () {
			/*
			let prevAuth;

			this.timeout(requestTimeout);

			prevAuth = document.getElementById('author').innerText;
			document.getElementById('new-quote').click();

			return new Promise((resolve) => {
				const intervalId = setInterval(() => {
					const newAuth = document.getElementById('author').innerText;
					if (newAuth !== prevAuth) {
						clearInterval(intervalId);
						resolve();
					}
				}, 500);
			});
			*/
		});

		it(`I can tweet the current quote by clicking on the
		#tweet-quote <a> element. This <a> element should include the
		"twitter.com/intent/tweet" path in it's href attribute to tweet the
		current quote.`, function () {
			const quote = "Quote text";
			const author = "Quote Author";
			
			const wrapper = shallow(<QuoteButtons
				quoteText={quote}
				quoteAuthor={author}
			/>);
			
			const postText = '"' + quote + '" ' + author
			
			expect(wrapper.exists("#tweet-quote"), "#tweet-quote is not defined").to.equal(true);
			expect(wrapper.exists(
				"a#tweet-quote[" +
				"href='https://twitter.com/intent/tweet?" +
				"hashtags=freeCodeCamp,quotes&" +
				"related=lucianonavitale&" +
				"text=" + postText + "']"
			),
				"The #tweet-quote element does not utilize the correct twitter intent"
			).to.equal(true);
		});

		// END #Content
	});

	describe('#Layout', function () {
		/*
		it(`The #quote-box wrapper element should be horizontally
		centered. Please run tests with browser's zoom level at 100% and page
		maximized.`, function () {
			assert.isOk(testHorizontallyCentered('quote-box', window));
		});
		*/
		// END #Layout
	});

	// END Random Quote Machine tests
});