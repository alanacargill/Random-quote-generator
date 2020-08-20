const QuoteService = {
    getRandomQuote: () => fetch(`https://quote-garden.herokuapp.com/api/v2/quotes/random`)
        .then((response) => response.json())
        .then((response) => ({
            author: response.quote.quoteAuthor,
            message: response.quote.quoteText
        })),

    getQuotesByAuthor: (author) => fetch(`https://quote-garden.herokuapp.com/api/v2/authors/${author}?page=1&limit=10`) 
        .then((response) => response.json())
        .then((response) => response.quotes.map((quote) => quote.quoteText))

};

export default QuoteService;