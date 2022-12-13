const categoriesLists = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesLists.length}`);

categoriesLists.forEach((categoryList) => {
  console.log(`Category: ${categoryList.firstElementChild.textContent}`);
  console.log(`Elements: ${categoryList.lastElementChild.children.length}`);
});