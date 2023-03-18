let inputBirth = document.getElementById("birth");
let resultAge = document.getElementById("result");
let submitButton = document.getElementById("submit");

const today = new Date();

function calculateAge() {
  if (!inputBirth.value) {
    return;
  }
  let birthDate = new Date(inputBirth.value);
  let age;

  if (
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() == birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate())
  ) {
    age = today.getFullYear() - birthDate.getFullYear();
  } else {
    age = today.getFullYear() - birthDate.getFullYear() - 1;
  }

  resultAge.innerText = `귀하의 만 나이는 ${age}세 입니다.`;
}

function handleSubmit(event) {
  event.preventDefault();
}

submitButton.addEventListener("click", calculateAge);
