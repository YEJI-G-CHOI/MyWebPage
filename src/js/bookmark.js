const $formOpenBtn = document.getElementById("form-open-btn");
const $bookmarkAddForm = document.getElementById("bookmark-add-form");
const $name = document.getElementById("bookmark-input-name");
const $url = document.getElementById("bookmark-input-url");
const $bookmarkCancelBtn = document.getElementById("cancel-btn");
const $bookmarkAddBtn = document.getElementById("add-btn");
const $bookmarkList = document.getElementById("bookmark-list");

const getBookmarkList = () => {
  let currentBookmarkList = localStorage.getItem("bookmarkList")
    ? JSON.parse(localStorage.getItem("bookmarkList"))
    : [];

  currentBookmarkList.length !== 0
    ? (currentBookmarkList.forEach((item) => {
      setBookmarkItem(item);
    }))
    : "";
};

const setBookmarkItem = (item) => {
  const $bookmarkItem = document.createElement("div");
  $bookmarkItem.id = `bookmark-${item.createdAt}`;
  $bookmarkItem.classList.add("bookmark-item");

  const $bookmarkInfo = document.createElement("div");
  $bookmarkInfo.classList.add("bookmark-info");

  const $bookmarkIcon = document.createElement("img");
  $bookmarkIcon.src = `https://www.google.com/s2/favicons?domain_url=${item.url}`;

  const $bookmarkUrl = document.createElement("a");
  $bookmarkUrl.href = item.url;
  $bookmarkUrl.setAttribute("target", "_blank");
  $bookmarkUrl.textContent = item.name;

  const $bookmarkDelBtn = document.createElement("div");
  $bookmarkDelBtn.classList.add("delete-btn");
  $bookmarkDelBtn.textContent = "삭제";
  $bookmarkDelBtn.addEventListener("click", () => {
    deleteBookmarkItem(item.createdAt);
  });

  $bookmarkInfo.appendChild($bookmarkIcon);
  $bookmarkInfo.appendChild($bookmarkUrl);
  $bookmarkItem.appendChild($bookmarkInfo);
  $bookmarkItem.appendChild($bookmarkDelBtn);
  $bookmarkList.appendChild($bookmarkItem);
};

const addBookmarkItem = () => {
  let createdAt = Date.now();
  let bookmarkList = [];

  if (localStorage.getItem("bookmarkList")) {
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
  }

  if ($name.value !== "" && $url.value !== "") {
    bookmarkList.push({ name: $name.value, url: $url.value, createdAt: createdAt });
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
    setBookmarkItem({ name: $name.value, url: $url.value, createdAt: createdAt });
    $name.value = "";
    $url.value = "";
    onFormClose();
  } else {
    window.alert("북마크에 추가할 이름과 주소 정보를 입력해 주세요.");
  }
};

const deleteBookmarkItem = (id) => {
  const isDelete = window.confirm("정말 삭제하시겠습니까?");

  if (isDelete) {
    let bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    let newBookmarkList = bookmarkList.filter((el) => el.createdAt !== id);
    localStorage.setItem("bookmarkList", JSON.stringify(newBookmarkList));
    document.getElementById(`bookmark-${id}`).remove();
    return;
  }
};

const onFormOpen = () => {
  $formOpenBtn.style.display = "none";
  $bookmarkAddForm.style.display = "block";
};

const onFormClose = () => {
  $name.value = "";
  $url.value = "";
  $formOpenBtn.style.display = "block";
  $bookmarkAddForm.style.display = "none";
};

$formOpenBtn.addEventListener("click", onFormOpen);
$bookmarkCancelBtn.addEventListener("click", onFormClose);
$bookmarkAddBtn.addEventListener("click", addBookmarkItem);

onFormClose();
getBookmarkList();