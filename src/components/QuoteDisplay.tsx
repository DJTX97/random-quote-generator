import { useEffect, useState } from "react";
import { getQuote, QuoteType } from "../utils/getData";
import Tweet from "./Tweet";


export default function QuoteDisplay() {
  const [quote, setQuote] = useState<QuoteType | null>(null);

  useEffect(() => {
    getQuote().then((randomQuote) => {
      setQuote(randomQuote);
    })
  }, []);

  const handleClick = () => {
    getQuote().then((randomQuote) => {
      setQuote(randomQuote);
    })
  }


  return (
    <main className="flex flex-col gap-2 h-2/3 w-3/4 sm:w-2/3 lg:w-1/2 p-5 bg-white" id="quote-box">
      <article id="text" className="text-2xl italic">
        "{quote?.quote}"
      </article>
      <p id="author" className="text-right">- {quote?.author}</p>
      <button onClick={handleClick} id="new-quote">Generate</button>
      <Tweet quote={quote?.quote} author={quote?.author} />
    </main>
  );
}
