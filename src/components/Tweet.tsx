interface TweetProps {
  quote: string | undefined;
  author: string | undefined;
}

const formatURL = (quote: string | undefined, author: string | undefined) => {
  const text = encodeURIComponent(`"${quote}" - ${author}`);
  const output = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${text}`;
  console.log(output);
  return output;
};

export default function Tweet({ quote, author }: TweetProps) {
  const URL = formatURL(quote, author);
  return (
    <a href={URL} title="Tweet the quote!" target="_blank" id="tweet-quote">
      Tweet
    </a>
  );
}
