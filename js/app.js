const submitButton = document.querySelector("#submitBtn");

const firstNameInput = document.querySelector("#firstname");
const errorIconOne = document.querySelector("#ErrorIconOne");
const labelErrorFirstname = document.querySelector("#ErrorFirstName");

const lastNameInput = document.querySelector("#lastname");
const errorIconTwo = document.querySelector("#ErrorIconTwo");
const labelErrorLastname = document.querySelector("#ErrorLastName");

const validRegex =
  /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
const emailInput = document.querySelector("#email");
const errorIconThree = document.querySelector("#ErrorIconThree");
const labelErrorEmail = document.querySelector("#ErrorEmail");

const passwordInput = document.querySelector("#password");
const errorIconFour = document.querySelector("#ErrorIconFour");
const labelErrorPassword = document.querySelector("#ErrorPassword");

//Animation part
const formText = document.querySelector(".form-text");
const formContainer = document.querySelector(".form-container");
const animeTimeline = gsap.timeline({
  defaults: { duration: 2.5, ease: "back.inOut(1.7)" },
});
gsap.fromTo(formText, { opacity: 0, x: "100%" }, { opacity: 1, x: "0%" });
gsap.fromTo(formContainer, { opacity: 0, y: "100%" }, { opacity: 1, y: "0%" });

//Listener to check errors in form
submitButton.addEventListener("click", checkErrors);

function checkErrors(e) {
  e.preventDefault();
  //FirstName Check input value
  if (firstNameInput.value === "") {
    labelErrorFirstname.style.display = "block";
    errorIconOne.style.visibility = "visible";
    firstNameInput.style.border = "1px solid hsl(0, 100%, 74%)";
    labelErrorFirstname.style.color = "hsl(0, 100%, 74%)";
    labelErrorFirstname.innerText = "First Name cannot be empty";
  } else {
    firstNameInput.style.border = "1px solid yellowgreen";
    labelErrorFirstname.style.display = "none";
    errorIconOne.style.visibility = "hidden";
  }

  //Lastname check input value
  if (lastNameInput.value === "") {
    labelErrorLastname.style.display = "block";
    errorIconTwo.style.visibility = "visible";
    lastNameInput.style.border = "1px solid hsl(0, 100%, 74%)";
    labelErrorLastname.style.color = "hsl(0, 100%, 74%)";
    labelErrorLastname.innerText = "Last Name cannot be empty";
  } else {
    lastNameInput.style.border = "1px solid yellowgreen";
    labelErrorLastname.style.display = "none";
    errorIconTwo.style.visibility = "hidden";
  }

  //Email Validation check
  if (emailInput.value === "") {
    labelErrorEmail.style.display = "block";
    errorIconThree.style.visibility = "visible";
    emailInput.style.border = "1px solid hsl(0, 100%, 74%)";
    labelErrorEmail.style.color = "hsl(0, 100%, 74%)";
    labelErrorEmail.innerText = "Email Address cannot be empty";
  } else if (!emailInput.value.match(validRegex)) {
    labelErrorEmail.style.display = "block";
    errorIconThree.style.visibility = "visible";
    emailInput.style.border = "1px solid hsl(0, 100%, 74%)";
    emailInput.style.color = "hsl(0, 100%, 74%)";
    labelErrorEmail.style.color = "hsl(0, 100%, 74%)";
    labelErrorEmail.innerText = "Looks like this is not an email";
  } else {
    emailInput.style.border = "1px solid yellowgreen";
    emailInput.style.color = "hsl(249, 10%, 26%)";
    labelErrorEmail.style.display = "none";
    errorIconThree.style.visibility = "hidden";
  }

  //Password check
  if (passwordInput.value === "") {
    labelErrorPassword.style.display = "block";
    errorIconFour.style.visibility = "visible";
    passwordInput.style.border = "1px solid hsl(0, 100%, 74%)";
    labelErrorPassword.style.color = "hsl(0, 100%, 74%)";
    labelErrorPassword.innerText = "Password cannot be empty";
  } else {
    passwordInput.style.border = "1px solid yellowgreen";
    labelErrorPassword.style.display = "none";
    errorIconFour.style.visibility = "hidden";
  }
}
