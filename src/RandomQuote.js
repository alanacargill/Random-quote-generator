import React, {useState} from 'react';
import './App.css';
import {Link} from "react-router-dom";
import QuoteService from './QuoteService';

const AUTHOR_START_STATE = {
    author: '',
    message: ''
};

function RandomQuote() {
    const [quote, setQuote] = useState(AUTHOR_START_STATE);

    const loadQuote = () => {
        QuoteService.getRandomQuote().then((quote) => {
            setQuote(quote);
        });
    }

    return (
        <div>
            <div className="generator grow">
                <button onClick={loadQuote}>random</button>
                <span className="material-icons">autorenew</span>
            </div>
            <div className="container">
                <h3 className={quote.message ? "quote" : ""}>{quote.message}</h3>
                { quote.message && 
                <Link to={`/quotesbyauthor/${quote.author}`}>
                    <div className="author-section">
                        <div className="author-section-text">
                            <h3 className="author">{quote.author}</h3>
                <h3 className="see-more">See more from {quote.author}</h3>
                        </div>
                        <span className="material-icons arrow-icon grow">arrow_right_alt</span>
                    </div> 
                </Link>
                
                }
            </div>
        </div>
    );
}

export default RandomQuote;
