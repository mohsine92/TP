const nameInput = 
document.querySelector("#name");
const ageInput = 
document.querySelector("#age");
const button =
document.querySelector("button");
const message = 
document.querySelector("#message");
const form = document.querySelector('form');

const submitEvent = () => alert('A');

form.addEventListener('submit', submitEvent);
button.addEventListener("click", submitEvent);