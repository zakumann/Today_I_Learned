var now = new Date();
var firstDay = new Date("2020-03-23");
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;    //오늘 - 처음 만난 날
var passedDay = Math.round(passedTime / (24*60*60*1000));
document.querySelector('#accent').innerText = passedDay + "일";

// 100일, 200일, ... 입력되는 낤후에 따른 계산
var future = toFirst + 100 * (24*60*60*1000);
var someday = new Date(future);
var year = someday.getFullYear();
var month = someday.getMonth() + 1;
var date = someday.getDate();

document.querySelector('#date100').innerText = year+ "년" + month + "월" + date + "일";

var future = toFirst + 200 * (24*60*60*1000);
var someday = new Date(future);
var year = someday.getFullYear();
var month = someday.getMonth() + 1;
var date = someday.getDate();

document.querySelector('#date200').innerText = year+ "년" + month + "월" + date + "일";

var future = toFirst + 365 * (24*60*60*1000);
var someday = new Date(future);
var year = someday.getFullYear();
var month = someday.getMonth() + 1;
var date = someday.getDate();

document.querySelector('#date365').innerText = year+ "년" + month + "월" + date + "일";

var future = toFirst + 500 * (24*60*60*1000);
var someday = new Date(future);
var year = someday.getFullYear();
var month = someday.getMonth() + 1;
var date = someday.getDate();

document.querySelector('#date500').innerText = year+ "년" + month + "월" + date + "일";