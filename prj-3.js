/** @format */

const birthdateInput = document.getElementById("birthdate");
const calculateButton = document.querySelector("button");
const ageDisplay = document.getElementById("age");

calculateButton.addEventListener("click", function () {
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();

  if (isNaN(birthdate.getTime()) || birthdate > today) {
    ageDisplay.textContent = "Invalid date";
    return;
  }

  const age = calculateAge(birthdate, today);
  ageDisplay.textContent = `${age}`;
  localStorage.setItem("birthdate", birthdateInput.value);
});

function calculateAge(birthdate, today) {
  const ageDifMs = today.getTime() - birthdate.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
