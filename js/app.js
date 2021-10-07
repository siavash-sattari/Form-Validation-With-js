// Select DOM Elements ======================================

let form = document.querySelector(".form");

let inputName = document.querySelector(".input-name");
let validName = document.querySelector(".valid-name");
let invalidName = document.querySelector(".invalid-name");

let inputZipcode = document.querySelector(".input-zipcode");
let validZipcode = document.querySelector(".valid-zipcode");
let invalidZipcode = document.querySelector(".invalid-zipcode");

let inputEmail = document.querySelector(".input-email");
let validEmail = document.querySelector(".valid-email");
let invalidEmail = document.querySelector(".invalid-email");

let inputPhone = document.querySelector(".input-phone");
let validPhone = document.querySelector(".valid-phone");
let invalidPhone = document.querySelector(".invalid-phone");

// addEventListeners ======================================

form.addEventListener("submit", validationForm);
inputName.addEventListener("input", validationName);
inputZipcode.addEventListener("input", validationZipcode);
inputEmail.addEventListener("input", validationEmail);
inputPhone.addEventListener("input", validationPhone);

// valid & invalid ==========================================

function valid(el, validEl, invalidEl) {
  el.style.borderColor = "green";
  validEl.style.display = "block";
  validEl.style.color = "green";
  invalidEl.style.display = "none";
  el.classList.remove("is-invalid");
}

function invalid(el, validEl, invalidEl) {
  el.style.borderColor = "red";
  validEl.style.display = "none";
  invalidEl.style.color = "red";
  invalidEl.style.display = "block";
  el.classList.add("is-invalid");
}

// validationName ==========================================

function validationName(e) {
  let re = /^[a-zA-z]{2,10}$/;
  if (re.test(e.target.value)) {
    valid(inputName, validName, invalidName);
  } else {
    invalid(inputName, validName, invalidName);
  }
}

// validationZipcode =======================================

function validationZipcode(e) {
  let re = /^[\d]{5}\-?[\d]{5}$/;
  if (re.test(e.target.value)) {
    valid(inputZipcode, validZipcode, invalidZipcode);
  } else {
    invalid(inputZipcode, validZipcode, invalidZipcode);
  }
}

// validationEmail =========================================

function validationEmail(e) {
  let re = /^[\w\-?\.?]+@[a-zA-z]+\.[a-zA-z]{2,5}$/;
  if (re.test(e.target.value)) {
    valid(inputEmail, validEmail, invalidEmail);
  } else {
    invalid(inputEmail, validEmail, invalidEmail);
  }
}

// validationPhone =========================================

function validationPhone(e) {
  // let re = /^\+[\d]{2}\s[\d]{2}\s[\d]{8}$/;
  let re = /^\+[\d]{2}\s[\d]{10}$/;
  if (re.test(e.target.value)) {
    valid(inputPhone, validPhone, invalidPhone);
  } else {
    invalid(inputPhone, validPhone, invalidPhone);
  }
}

// validationForm ==========================================

function validationForm(e) {
  let inputs = [inputName, inputZipcode, inputEmail, inputPhone];
  let invalidInputs = document.getElementsByClassName("is-invalid");
  if (invalidInputs.length > 0) {
    e.preventDefault();
    inputs.forEach((input) => {
      if (input.value === "") {
        input.style.borderColor = "red";
        input.nextElementSibling.nextElementSibling.style.display = "block";
        input.nextElementSibling.nextElementSibling.style.color = "red";
      }
    });
  }
}
