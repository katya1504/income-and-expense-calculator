const btnOne = document.querySelector('.btn__one');
console.log(btnOne);
btnOne.addEventListener('click', calculate);

function calculate() {
    const inputOne = document.querySelector('#inputOne').value;
    const inputTwoo = document.querySelector('#inputTwoo').value;
    const inputThree = document.querySelector('#inputThree').value;

if (isNaN(inputOne, inputTwoo, inputThree)) {
    alert('Введите пожалуйста число!')
}

    let result = +inputOne + +inputTwoo + +inputThree;
console.log(result)

document.querySelector('.btn__twoo').textContent = result;
}

const btnResult = document.querySelector('.btn__result');
btnResult.addEventListener('click', calculateTwoo);

function calculateTwoo() {
    const inputFoir = document.querySelector('#inputFoir').value;
    const inputFive = document.querySelector('#inputFive').value;
    const inputSix = document.querySelector('#inputSix').value;
    const inputSeven = document.querySelector('#inputSeven').value;
    const inputEight = document.querySelector('#inputEight').value;
    const inputNine = document.querySelector('#inputNine').value;
    const inputTen = document.querySelector('#inputTen').value;

    if(isNaN(inputFoir,inputFive,inputSix,inputSeven,inputEight,inputNine,inputTen)) {
        alert('Введите пожалуйста число!')
    }

    let resultTwo = +inputFoir + +inputFive + +inputSix + +inputSeven + +inputEight + +inputNine + +inputTen;
console.log(resultTwo);

document.querySelector('.btn__text').textContent = resultTwo;
}

const resultBtn = document.querySelector('.result__btn');
console.log(resultBtn);
resultBtn.addEventListener('click', calculateResult);

function calculateResult() {
const btnFoir = document.querySelector('.btn__twoo').textContent;
const btnFive = document.querySelector('.btn__text').textContent;

    let resultFinish = btnFoir - btnFive;
    console.log(resultFinish);

    document.querySelector('.result__finish').textContent = resultFinish;
}

