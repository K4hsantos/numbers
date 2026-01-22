const form = document.querySelector("form");
const formLayout = document.querySelector(".form-layout");
const numberAmount = document.querySelector("#amount");
const numberMin = document.querySelector("#min");
const numberMax = document.querySelector("#max");
const resultList = document.querySelector(".result-list");





form.addEventListener("submit", (event)=> {
event.preventDefault();
const quantidade = Number(numberAmount.value);
const minimo = Number(numberMin.value);
const maximo = Number(numberMax.value);

const validate = validateNumbers(quantidade, minimo, maximo);

if (validate === false) {
    return false
}

const numberList = [];

resultList.innerHTML = ""

for (let i = 0; i < quantidade; i++) {
    numberList.push((Math.floor(Math.random() * (maximo - minimo + 1)) + minimo))

}

for (let i = 0; i < numberList.length; i++) {

    const div = document.createElement("div")
    const p = document.createElement("p")


    div.classList.add("frame", "animate")
    p.textContent = numberList[i]


    div.appendChild(p)
    resultList.appendChild(div)
}


formLayout.classList.add("show-result");
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
}