function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBackground = document.querySelector("body"); //bgg
const createCol = document.querySelector(".color"); //span-col

const changeCol = document.querySelector(".change-color"); //btn
changeCol.addEventListener("click", (element) => {
  let randomNum = getRandomHexColor();
  createCol.textContent = `${[randomNum]}`;

  createBackground.style.backgroundColor = `${[randomNum]}`;
});
