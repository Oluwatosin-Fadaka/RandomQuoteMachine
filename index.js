import React from "react"
import ReactDOM from "react-dom"

const fetchQuotes = [
    
{text: "Spread love everywhere you go. Let no one ever come to you without leaving happier." , 
author: "Mother Teresa"},

{text: "When you reach the end of your rope, tie a knot in it and hang on. ",
author: "Franklin D. Roosevelt"},

{text: "Always remember that you are absolutely unique. Just like everyone else. " ,
author: "Margaret Mead"},

{text: "Don't judge each day by the harvest you reap but by the seeds that you plant. ",
author: "Robert Louis Stevenson"},

{text: "The future belongs to those who believe in the beauty of their dreams." , 
author: "Eleanor Roosevelt"},

{text: "Tell me and I forget. Teach me and I remember. Involve me and I learn." , 
author: "Benjamin Franklin" },

{text: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart." ,
author: "Helen Keller"},

{text: "It is during our darkest moments that we must focus to see the light.",
author: "Aristotle"},

{text: "Whoever is happy will make others happy too." , 
author: "Anne Frank"},

{text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
author: "Ralph Waldo Emerson"}

]



function QuoteBox({quote, handleQuote}) {
  return(
    <div id="quote-box">
      <p id="text"><i class="fa fa-quote-left" aria-hidden="true"></i>{quote.text}</p>
      <h3 id="author">{quote.author || "No Author"}</h3>
      <div class="actions">
        <button id="new-quote" class="button" onClick={handleQuote}>
         New Quote
        </button>
        <a 
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
          target="_blank"
          >
          Tweet
          </a>
      </div>
    </div>
  )
}

const getIndexRandomly = () => Math.round(Math.random() * fetchQuotes.length );

function App() {
  
  const handleQuote = () => {
    setQuote(fetchQuotes[getIndexRandomly()])
    
    
  }
  
  const [quote, setQuote] = React.useState(fetchQuotes[getIndexRandomly()])
  return(
         <div class="main">
            <QuoteBox quote={quote} handleQuote={handleQuote}/>
         </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
