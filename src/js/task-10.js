const inputNum = document.querySelector("#controls>input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

btnCreate.addEventListener("click", () => {
  let boxesToAdd = createBoxes(inputNum.value);
  boxes.append(...boxesToAdd);
});

console.log(inputNum.value);

btnDestroy.addEventListener("click", () => {
  destroyBoxes.call();
});
// let render = document.querySelector('[data-create="render"]');
// let destroy = document.querySelector('[data-destroy="destroy"]');
// let boxes = document.getElementById("boxes");
// render.addEventListener("click", getAmount);
// destroy.addEventListener("click", destroyBoxes);

// function getAmount() {
//   let amount = +document.querySelector("#controls input").value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   let basicSize = 30;
//   let fragment = document.createDocumentFragment();
//   for (let i = 0; i < amount; i++) {
//     let size = basicSize + 1 * 10;
//     let div = document.createElement("div");
//     div.style.cssText = `width:${size}px; height:${size}px; background-color:rgba(${random()},${random()},${random()})`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//   boxes.innerHTML = "";
// }
