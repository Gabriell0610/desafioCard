const inputName = document.getElementById('card_name')
const elementName = document.getElementById('name')

const inputNumber = document.getElementById('card_number')
const elementNumber = document.getElementById('number')

const inputMonth = document.getElementById('card_month')
const elementMonth = document.getElementById('month')

const inputYear = document.getElementById('card_year')
const elementYear = document.getElementById('year')

const inputCVC = document.getElementById('card_cvc')
const elementCVC = document.getElementById('cvc')

const submitBtn = document.getElementById('submit_btn')
const completed = document.getElementById('completed')
const form = document.getElementById('form')

function dataNumber(e) {
    elementNumber.innerText = format(e.target.value);
}

function dataName (e) {
    elementName.innerText = e.target.value
}

function dataMonth (e) {
    elementMonth.innerText = e.target.value
}

function dataYear (e) {
    elementYear.innerText = e.target.value
}

function dataCVC (e) {
    elementCVC.innerText = e.target.value
}

const format = (s) => {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
    
}

function hideSubmit(e) {
    e.preventDefault()
    
   if(inputName.value && inputNumber.value && inputMonth.value && inputYear.value && inputCVC.value)  {
    completed.classList.remove("hidden")
    form.classList.add("hidden")
   }

}

inputNumber.addEventListener('keyup', dataNumber)
inputName.addEventListener('keyup', dataName)
inputMonth.addEventListener('keyup',dataMonth)
inputYear.addEventListener('keyup', dataYear)
inputCVC.addEventListener('keyup', dataCVC)
submitBtn.addEventListener('click', hideSubmit)


const campos = document.querySelectorAll('.requerid')
const spans = document.querySelectorAll('.span-requerid')

function setError(index) {
    campos[index].style.border = '1px solid red'
    spans[index].style.display = 'block'
} 

function removeError(index) {
    campos[index].style.border = ''
    spans[index].style.display = 'none'
}


function nameValidate () {
    if(inputName.value === '' || !/^[A-Za-z ]+$/.test(inputName.value)) {
        setError(0)
    }else {
        removeError(0)
        numberValidate()
        validateCVC()
        validateMonth()
        validateYear()
    }
}

function numberValidate() {
    if(/[^0-9]/.test(inputNumber.value) || inputNumber.value == '')  {
        setError(1)
    } else {
        removeError(1)
    }
    
}

function validateMonth() {
    if(inputMonth.value == '') {
        setError(2)
    } else {
        removeError(2)
    }
}

function validateYear() {
    if(inputYear.value == '') {
        setError(3)
    } else {
        removeError(3)
    }
}

function validateCVC() {
    if(inputCVC.value == '') {
        setError(4)
    } else {
        removeError(4)
    }
}















