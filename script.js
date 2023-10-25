const ageCalculation = document.getElementById('calculate')
const birthdate = document.getElementById('birthdate')
const ageDisplay = document.getElementById('result')

ageCalculation.addEventListener('click', () => {
    const personAge = new Date(birthdate.value)
    const currentDate = new Date()
    if (isNaN(personAge.getTime())) {
        ageDisplay.textContent="Please enter a valid date of birth"
    }
    else {
        const ageInSecond = currentDate.getTime() - personAge.getTime()
        console.log(ageInSecond)
        const ageInYear = ageInSecond / (1000 * 60 * 60 * 24 * 365.25)
        const age = Math.floor(ageInYear)
        ageDisplay.textContent=`Your age is ${age} years`
    }
})