const inputForm = document.querySelector(".login-form");
const inputDataObj = {};

const onSubmitValidation = (event) => {
  event.preventDefault();

  const inputEmailValue = inputForm.elements.email.value;
  const inputPasswordlValue = inputForm.elements.password.value;

  inputForm.reset();

  if (!inputPasswordlValue || !inputEmailValue) {
    alert("Все поля должны быть заполнены!");
    return;
  }

  inputDataObj[inputForm.elements.email.type] = inputEmailValue;
  inputDataObj[inputForm.elements.password.type] = inputPasswordlValue;

  console.log(inputDataObj);
};

inputForm.addEventListener("submit", onSubmitValidation);