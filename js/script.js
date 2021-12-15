"use strict";

const input = document.getElementById("email-inp");
const submitBtn = document.getElementById("submit-btn");
const inputCont = document.querySelector(".input-container");

const validation = function () {
  const splitted = input.value.split("");

  if (!splitted.includes("@")) {
    inputCont.classList.add("validation-error");
  }

  let mailPt1 = "";
  let mailPt2 = "";
  let status = "before";
  for (let i = 0; i < splitted.length; i++) {
    if (status === "before") {
      mailPt1 += splitted[i];
    } else if (status === "after") {
      mailPt2 += splitted[i];
    }
    if (splitted[i + 1] === "@") {
      status = "after";
    }
  }
  let mailPt3 = mailPt2.split(".");

  const emailProviders = ["@gmail", "@yahoo", "@protonmail", "@outlook"];

  if (
    !emailProviders.includes(mailPt3[0].toLowerCase()) ||
    mailPt3[1].length < 3
  ) {
    inputCont.classList.remove("validation-success");
    inputCont.classList.add("validation-error");
  } else {
    inputCont.classList.remove("validation-error");
    inputCont.classList.add("validation-success");
  }
};

submitBtn.addEventListener("click", validation);
