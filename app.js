const form = document.querySelector("form");
const formLayout = document.querySelector(".form-layout");
const numberAmount = document.querySelector("#amount");
const numberMin = document.querySelector("#min");
const numberMax = document.querySelector("#max");
const resultList = document.querySelector(".result-list");
const checkbox = document.querySelector("#check")
const button = document.querySelector("#btn")





form.addEventListener("submit", (event)=> {
event.preventDefault();
const quantidade = Number(numberAmount.value);
const minimo = Number(numberMin.value);
const maximo = Number(numberMax.value);


if (validateNumbers(quantidade, minimo, maximo) === false) {
    return false
}


const noRepeat = checkbox.checked;
const numberList = [];

resultList.innerHTML = ""

while (numberList.length < quantidade) {
    
    const randomNumber = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

    if (noRepeat === true) {

        if (!numberList.includes(randomNumber)) {
            numberList.push(randomNumber);
        }
    } else {
        numberList.push(randomNumber)
    }
}

oneTimeNumber(0, numberList);

formLayout.classList.add("show-result");
})


button.addEventListener("click", (event)=> {
resultList.innerHTML = ""

formLayout.classList.remove("show-result");
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

function oneTimeNumber(index, lista) {
    if (index >= lista.length) {
        return;
    }    

    const divSlot = document.createElement("div");
    const divFrame = document.createElement("div");
    const p = document.createElement("p");


    divSlot.classList.add("slot");
    divFrame.classList.add("frame", "animate");
    p.classList.add("number");

    p.textContent = lista[index]

    divSlot.appendChild(divFrame)
    divSlot.appendChild(p)
    resultList.appendChild(divSlot)

    setTimeout(() => {
        oneTimeNumber(index + 1, lista);
    }, 3000)
}

