const API = import.meta.env.VITE_API;

export interface QuoteType {
  quote: string;
  author: string;
}

export const getQuote = async (): Promise<QuoteType> => {
  const response = await fetch(API);
  const data = await response.json();

  const randomQuote =
    data.quotes[Math.floor(Math.random() * data.quotes.length)];

  return randomQuote;
};
