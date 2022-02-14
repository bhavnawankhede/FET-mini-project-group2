"use strict";

$(document).ready(() => {
  if (localStorage.getItem("template1")) {
    $(".temp1").remove();
  }
  if (localStorage.getItem("template2")) {
    $(".temp2").remove();
  }
  if (localStorage.getItem("template3")) {
    $(".temp3").remove();
  }
  if (localStorage.getItem("template4")) {
    $(".temp4").remove();
  }
  if (localStorage.getItem("template5")) {
    $(".temp5").remove();
  }
});

const btnTemp1 = document.querySelector(".btn1");
const btnTemp2 = document.querySelector(".btn2");
const btnTemp3 = document.querySelector(".btn3");
const btnTemp4 = document.querySelector(".btn4");
const btnTemp5 = document.querySelector(".btn5");

btnTemp1.addEventListener("click", function () {
  window.location.href = "resumeTemp_1.html";
});

btnTemp2.addEventListener("click", function () {
  window.location.href = "resumeTemp_2.html";
});

btnTemp3.addEventListener("click", function () {
  window.location.href = "resumeTemp_3.html";
});

btnTemp4.addEventListener("click", function () {
  window.location.href = "resumeTemp_4.html";
});

btnTemp5.addEventListener("click", function () {
  window.location.href = "resumeTemp_5.html";
});
