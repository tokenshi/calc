const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const plusBtn = document.querySelector('.plusBtn')
const umnojBtn = document.querySelector('.umnojBtn')
const delitBtn = document.querySelector('.delitBtn')
const minusBtn = document.querySelector('.minusBtn')
const resultBtn = document.querySelector('.resultBtn')
const clearBtn = document.querySelector('.clearBtn')
const resultElement = document.querySelector('.result')

function printResult(result) {
    if(result < 0){
        resultElement.style.color = 'red'
    }else{
        resultElement.style.color = 'green'
    }

    resultElement.textContent = result
}

let action = '+'



resultBtn.onclick = function () {
    if (action === '+'){
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        printResult(sum)
    }
    if (action === '-'){
        const min = Number(inputOne.value) - Number(inputTwo.value)
        printResult(min)
    }
    if (action === '*'){
        const umn = Number(inputOne.value) * Number(inputTwo.value)
        printResult(umn)
    }
    if (action === '/'){
        const del = Number(inputOne.value) / Number(inputTwo.value)
        printResult(del)
    }
}
plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
delitBtn.onclick = function () {
    action = '/'
}
umnojBtn.onclick = function () {
    action = '*'
}

clearBtn.onclick = function (){
    inputOne.value = ' '
    inputTwo.value = ' '
    printResult('Очищено')
}