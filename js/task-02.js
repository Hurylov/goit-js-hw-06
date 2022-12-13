const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector("#ingredients");

const liMarkup = ingredients.reduce((ingredientListEl, ingredient) => {
  const listEl = document.createElement("li");

  listEl.classList.add("item");
  listEl.textContent = ingredient;
  ingredientListEl.push(listEl);

  return ingredientListEl;
}, []);

ingredientList.append(...liMarkup);