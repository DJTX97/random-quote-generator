import { useEffect, useState } from "react";
import { getQuote, QuoteType } from "../utils/getData";
import Tweet from "./Tweet";

export default function QuoteDisplay() {
  const [quote, setQuote] = useState<QuoteType | null>(null);

  useEffect(() => {
    getQuote().then((randomQuote) => {
      setQuote(randomQuote);
    });
  }, []);

  const handleClick = () => {
    getQuote().then((randomQuote) => {
      setQuote(randomQuote);
    });
  };

  return (
    <main
      className="flex flex-col justify-between h-2/3 w-3/4 sm:w-2/3 lg:w-1/2 p-5 rounded-lg shadow-lg shadow-black bg-white"
      id="quote-box"
    >
      <section className="flex flex-col items-center justify-between h-full">
        <article className="flex flex-col gap-2 mt-5 w-full">
          <p id="text" className="text-lg sm:text-xl md:text-2xl italic font-semibold">
            "{quote?.quote}"
          </p>
          <p id="author" className="text-right pr-5">
            - {quote?.author}
          </p>
        </article>

        <button onClick={handleClick} className="p-3 rounded-lg bg-black hover:bg-slate-600 text-white text-xl font-semibold" id="new-quote">
          Generate
        </button>
      </section>

      <Tweet quote={quote?.quote} author={quote?.author} />
    </main>
  );
}
