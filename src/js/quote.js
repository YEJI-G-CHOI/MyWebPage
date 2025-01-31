const API_URL = "https://random-quote.hyobb.com/";
const $quote = document.getElementById("quote");
const localQuote = localStorage.getItem("quote");

const nowDate = new Date();
const month = nowDate.getMonth() + 1;
const date = nowDate.getDate();

const getQuote = async () => {
  try {
    const data = await fetch(API_URL).then((res) => res.json());
    const quoteText = data[1].respond;

    setQuote(quoteText);
  } catch (error) {
    console.log("quote error: ", error);
    setQuote("작은 변화가 일어날 때 진정한 삶을 살게 된다. - 레프 톨스토이");
  }
};

const setQuote = (quoteText) => {
  let todayQuote = { createdDate: `${month}-${date}`, quoteData: quoteText };
  localStorage.setItem("quote", JSON.stringify(todayQuote));

  $quote.textContent = `${quoteText}`;
};

if (localQuote) {
  let { createdDate, quoteData } = JSON.parse(localQuote);

  if (createdDate === `${month}-${date}`) {
    $quote.textContent = `${quoteData}`;
  } else {
    getQuote();
  }
} else {
  getQuote();
}