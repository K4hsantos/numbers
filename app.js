const form = document.querySelector("form");
const formLayout = document.querySelector(".form-layout")


form.addEventListener("submit", (event)=> {
event.preventDefault();

formLayout.classList.add("show-result")
})