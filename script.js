"use strict"

//document.addEventListener("DOMContentLoaded", function()
//{
var day = document.querySelector(".day");
var month = document.querySelector(".month");
var year = document.querySelector(".year");

var date = moment(
  year.textContent + "-" +
  month.textContent + "-" +
  day.textContent
);

var add1 = document.querySelector(".add_day");
var add2 = document.querySelector(".add_month");
var add3 = document.querySelector(".add_year");
var del1 = document.querySelector(".del_day");
var del2 = document.querySelector(".del_month");
var del3 = document.querySelector(".del_year");

function update_day() {
  if (date.date() < 10)
    day.textContent = "0" + date.date();
  else
    day.textContent = date.date();
}

function update_month() {
  if (date.month() < 9)
    month.textContent = "0" + Number(date.month() + 1);
  else
    month.textContent = Number(date.month() + 1);
}

function update_year() {
  year.textContent = date.year();
}

function update_all() {
  update_day();
  update_month();
  update_year();
}

add1.addEventListener("click", function() {
  date.add(1, "day");
  update_all();
});

add2.addEventListener("click", function() {
  date.add(1, "month");
  update_all();
});

add3.addEventListener("click", function() {
  date.add(1, "year");
  update_all();
});

del1.addEventListener("click", function() {
  date.subtract(1, "day");
  update_all();
});

del2.addEventListener("click", function() {
  date.subtract(1, "month");
  update_all();
});

del3.addEventListener("click", function() {
  date.subtract(1, "year");
  update_all();
});
//});