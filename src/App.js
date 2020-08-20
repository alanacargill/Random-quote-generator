import React from 'react';
import QuotesByAuthor from './QuotesByAuthor';
import RandomQuote from './RandomQuote';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/quotesbyauthor/:author" component={QuotesByAuthor}></Route>
          <Route path="/" component={RandomQuote}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
