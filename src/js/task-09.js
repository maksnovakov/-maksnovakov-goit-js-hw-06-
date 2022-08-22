function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonRef = document.querySelector(".change-color");

const spanEl = document.querySelector(".color");

buttonRef.addEventListener("click", () => {
  spanEl.textContent = getRandomHexColor();
  document.body.setAttribute(
    "style",
    "background-color: " + spanEl.textContent
  );
});
