const $bookmarkBar = document.getElementById("bookmark-bar");
const $openBtn = document.getElementById("bookmark-open-btn");
const $closeBtn = document.getElementById("bookmark-close-btn");
const $openText = document.getElementById("bookmark-open-btn-text");
const $closeText = document.getElementById("bookmark-close-btn-text");

const currentBookmarkBarState = localStorage.getItem("currentBookmarkBarState");

const bookmarkBarToggle = () => {
  let currenState = localStorage.getItem("currentBookmarkBarState");

  // localStorage에 currentBookmarkBarState 값이 존재하고 상태가 close일 경우
  // close -> open
  if (currenState === "close") {
    localStorage.setItem("currentBookmarkBarState", "open");
    $bookmarkBar.style.display = "block";
    $closeBtn.style.display = "flex";
    $openBtn.style.display = "none";
    return;
  }
  // localStorage에 currentBookmarkBarState 값이 없거나 상태가 open일 경우
  // open -> close
  localStorage.setItem("currentBookmarkBarState", "close");
  $bookmarkBar.style.display = "none";
  $closeBtn.style.display = "none";
  $openBtn.style.display = "flex";
};

if (currentBookmarkBarState === "open") {
  $bookmarkBar.style.display = "block";
  $closeBtn.style.display = "flex";
  $openBtn.style.display = "none";
} else {
  $bookmarkBar.style.display = "none";
  $closeBtn.style.display = "none";
  $openBtn.style.display = "flex";
}

$openBtn.addEventListener("click", bookmarkBarToggle);
$closeBtn.addEventListener("click", bookmarkBarToggle);