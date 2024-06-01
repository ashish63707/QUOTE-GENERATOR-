const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");
const newQuoteBtn = document.querySelector(".new-quote-btn");

const getNewQuote = async () => {
  const url = "https://type.fit/api/quotes";
  
  const response = await fetch(url);
  const allQuotes = await response.json();
  const indx = Math.floor(Math.random() * allQuotes.length);
  const quote = allQuotes[indx].text;
  const auth = allQuotes[indx].author;

  if (auth == null) {
    auth = "Anonymous";
  }

  text.innerHTML = quote;
  author.innerHTML = "~ " + auth;

  const tweetText = `"${quote}" - ${auth}`;
  const tweetHref = `https://twitter.com/intent/tweet?text=${tweetText}`;
  tweetButton.href = tweetHref;
};

getNewQuote();

newQuoteBtn.addEventListener("click", getNewQuote);

