const $date = document.getElementById("today-date");
const $time = document.getElementById("now-time");

const getNowDate = () => {
  const nowDate = new Date();
  const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  let year = nowDate.getFullYear();
  let month = nowDate.getMonth() + 1;
  let date = nowDate.getDate();
  let day = week[nowDate.getDay()];

  setNowDate(year, month, date, day);
};

const getNowTime = () => {
  const nowDate = new Date();

  let hour = modifyNumer(nowDate.getHours());
  let minute = modifyNumer(nowDate.getMinutes());

  setNowTime(hour, minute);
};

const setNowDate = (year, month, date, day) => {
  $date.textContent = `${year}년 ${month}월 ${date}일 ${day}`;
};

const setNowTime = (hour, minute) => {
  $time.textContent = `${hour}:${minute}`;
};

const modifyNumer = (number) => {
  return number < 10 ? "0" + number : number;
};

getNowDate();
getNowTime();
setInterval(getNowTime, 1000);