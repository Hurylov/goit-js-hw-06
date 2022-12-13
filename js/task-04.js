const refs = {
  buttonIncrement: document.querySelector("[data-action = increment]"),
  buttonDecrement: document.querySelector("[data-action = decrement]"),
  counterValue: document.querySelector("#value"),
};

refs.buttonIncrement.addEventListener(
  "click",
  () => refs.counterValue.textContent++
);

refs.buttonDecrement.addEventListener(
  "click",
  () => refs.counterValue.textContent--
);