const form = document.querySelector("form");
const formLayout = document.querySelector(".form-layout");
const numberAmount = document.querySelector("#amount");
const numberMin = document.querySelector("#min");
const numberMax = document.querySelector("#max");


form.addEventListener("submit", (event)=> {
event.preventDefault();
const numero = Number(numberAmount.value);
const minimo = Number(numberMin.value);
const maximo = Number(numberMax.value);

const validate = validateNumbers(numero, minimo, maximo);

if (validate === false) {
    return false
} else {
    formLayout.classList.add("show-result")
}
})

function validateNumbers(amount, minimum, maximum) {
    if (amount <= 0) {
        alert("n foi")
        return false
    } 
    if (minimum >= maximum) {
        alert("n foi")
        return false
    } else {
        return true
    }
};