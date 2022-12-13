function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  backgroundColorName: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  refs.body.style.backgroundColor = randomColor;
  refs.backgroundColorName.textContent = randomColor;
});