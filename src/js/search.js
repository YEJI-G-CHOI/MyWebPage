const $search = document.getElementById("search-input");

const moveResultPage = () => {
  let searchWord = $search.value;
  $search.value = "";
  window.location.href = `https://google.com/search?q=${searchWord}`;
};

const onEnter = (eCode) => {
  if (eCode === "Enter") {
    moveResultPage();
  }
};

$search.addEventListener("keypress", (event) => {
  onEnter(event.code);
});