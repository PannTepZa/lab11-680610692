// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

confirmInput.onkeyup = () => {
  confirmInput.classList.remove("is-valid");
  confirmInput.classList.remove("is-invalid");
};

let isFirstNameOk = false;
let isLastNameOK = false;
let isEmailOK = false;
let isPasswordOK = false;
let isConfirmOK = false;

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOK = false;
  isEmailOK = false;
  isPasswordOK = false;
  isConfirmOK = false;

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
    isFirstNameOk = false;
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
    isLastNameOK = false;
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOK = true;
  }

  // validate email

  if(!validateEmail(emailInput.value)){
    emailInput.classList.add("is-invalid")
    isEmailOK = false;
  } else {
    emailInput.classList.add("is-valid");
    isEmailOK = true;
  }

  // validate password

  if (passwordInput.value.length < 6){
    passwordInput.classList.add("is-invalid")
    isPasswordOK = false;
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOK = true;
  }

  // validate confirm password

  if (passwordInput.value !== confirmInput.value || confirmInput.value.length === 0 || !isPasswordOK){
    confirmInput.classList.add("is-invalid")
    isConfirmOK = false;
  } else {
    confirmInput.classList.add("is-valid");
    isConfirmOK = true;
  }

  if (isFirstNameOk && isLastNameOK && isEmailOK && isPasswordOK && isConfirmOK) 
    alert("Registered successfully");
};

// add callback function for Reset button.

resetBtn.onclick = () => {
  window.location.reload();
}
