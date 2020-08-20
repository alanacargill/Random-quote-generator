import React  from 'react';
import './App.css';
import {Link} from "react-router-dom";
import quoteService from "./QuoteService"

class QuotesByAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quotes: [] };
  }

  componentDidMount() {
    quoteService.getQuotesByAuthor(this.props.match.params.author).then((quotes) => {
      this.setState({ quotes: quotes });
    });
  }

  render() {
    const quotesByAuthorItems = this.state.quotes.map((quote, i) => (
      <div key={i} className="quotes-by-author">
        <h3 className="quote-by-author">{quote}</h3>
      </div>
    ));

    return (
      <div>
          <button className="back grow"><Link to="/randomquote">Back</Link></button>
          <div id="quotes-by-author" className="active">
            {quotesByAuthorItems}
          </div>
      </div>
    )
  }
}

export default QuotesByAuthor;
