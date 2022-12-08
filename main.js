const inputMoney = document.getElementById('money')
const inputMonths = document.getElementById('months')
const calculate = document.getElementById('calculate')
const result = document.getElementById('result')
const buttonCheckbox = document.getElementById('buttonCheckbox')

calculate.addEventListener('click', (ev) => {
  ev.preventDefault()

  const num1 = inputMoney.value
  const num2 = inputMonths.value
  const overall = (num1 / 12) * num2
  const thirteen = overall.toFixed(2)


  inputMoney.value = ''
  inputMonths.value = ''



  result.innerText = "O valor do seu 13° é de: " + thirteen


})



function darkmode() {

  if (buttonCheckbox.checked) {
    document.body.style.setProperty('--primary-color', ' #7c17b4')
    document.body.style.setProperty('--second-color', ' #1a1a1a')
    document.body.style.setProperty('--text-color', ' #fff')
  } else {
    document.body.style.setProperty('--primary-color', ' #5accd3')
    document.body.style.setProperty('--second-color', ' #fff')
    document.body.style.setProperty('--text-color', ' #1a1a1a')
  }

}


