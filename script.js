const form= document.querySelector("form")
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const button = document.querySelector("button");
const message = document.querySelector("#message");

//free palestine
//hgfgffgfhg
form.addEventListener("submit", (e) => e.preventDefault());
button.addEventListener("click", () => {
  const name = nameInput.value;
  const age = ageInput.value;

  if (name && age) {
    message.textContent = `Hi ${name}, you are ${age} years old!`;
    message.style.color = "green";
  } else {
    message.textContent = "Please enter both your name and age!";
    message.style.color = "red";
  }
});
