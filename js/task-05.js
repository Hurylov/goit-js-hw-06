const refs = {
  input: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

function onInputChange(event) {
  refs.nameOutput.textContent = event.currentTarget.value;

  if (!event.currentTarget.value) {
    refs.nameOutput.textContent = "Anonymous";
  }
}

refs.input.addEventListener("input", onInputChange);