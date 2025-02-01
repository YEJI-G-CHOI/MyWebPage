const $bookmarkBar = document.getElementById("bookmark-bar");
const $bookmarkButton = document.getElementById("bookmark-button");

const currentBookmarkBarState = localStorage.getItem("currentBookmarkBarState");

if (currentBookmarkBarState === "open") {
  $bookmarkBar.style.display = "block";
  $bookmarkButton.className = "btn-open";
  $bookmarkButton.textContent = "북마크 닫기";
} else {
  $bookmarkBar.style.display = "none";
  $bookmarkButton.className = "btn-close";
  $bookmarkButton.textContent = "북마크 열기";
}

const bookmarkBarToggle = () => {
  let currenState = localStorage.getItem("currentBookmarkBarState");

  // localStorage에 currentBookmarkBarState 값이 없을 경우
  if (!currenState) {
    localStorage.setItem("currentBookmarkBarState", "open");
    $bookmarkBar.style.display = "block";
    $bookmarkButton.className = "btn-open";
    $bookmarkButton.textContent = "북마크 닫기";
    return;
  }

  // localStorage에 currentBookmarkBarState 값이 존재하고 상태가 close일 경우
  // close -> open
  if (currenState === "close") {
    localStorage.setItem("currentBookmarkBarState", "open");
    $bookmarkBar.style.display = "block";
    $bookmarkButton.className = "btn-open";
    $bookmarkButton.textContent = "북마크 닫기";
    return;
  }

  // localStorage에 currentBookmarkBarState 값이 존재하고 상태가 open일 경우
  // open -> close
  localStorage.setItem("currentBookmarkBarState", "close");
  $bookmarkBar.style.display = "none";
  $bookmarkButton.className = "btn-close";
  $bookmarkButton.textContent = "북마크 열기";
};

$bookmarkButton.addEventListener("click", bookmarkBarToggle);