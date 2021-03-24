// This code sets up the variables used in this program.
let age = 0
let day = 0
// This block of code has the button, when clicked, activate a function.
document.getElementById('submit').addEventListener('click', price)
// The function assigns the variables to the values of the textboxes. for age, the value is converted into a number.
function price () {
  age = document.getElementById('your-age').value
  age = parseInt(age)
  day = document.getElementById('day-of-the-week').value
  //If the age is below 5 or above 95, then the museum visit is for free. If the age is above 12 and below 21, AND the day is either thursday or tuesday, then the student discount applies. If none of those requirements are fufilled, then the full admission must be payed.
  if (age <= 5 || age >= 95) {
    document.getElementById('answer').innerHTML = 'You can go into the museum for free on any day!'
  } else if (age >= 12 && age <= 21 && (day === 'tuesday' || day === 'thursday')) {
    document.getElementById('answer').innerHTML = 'You can get student discount!'
  } else {
    document.getElementById('answer').innerHTML = 'You have to pay full admission.'
  }
}
