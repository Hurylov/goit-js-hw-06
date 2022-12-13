const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.text.style.fontSize = `56px`;

const onInputChange = (event) => {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
};

refs.input.addEventListener("input", onInputChange);