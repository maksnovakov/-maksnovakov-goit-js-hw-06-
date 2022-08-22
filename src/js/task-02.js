const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const createList = function (parentSelector, itemListtoCreate) {
//   const parent = document.querySelector(parentSelector);

//   const elements = itemListtoCreate.map((element) => {
//     const item = document.createElement("li");
//     item.textContent = element;
//     return item;
//   });
//   parent.append(...elements);
// };

// createList("#ingredients", ingredients);

const ulEl = document.querySelector("#ingredients");
const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, "");
ulEl.innerHTML = list;
