function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createEl = document.querySelector("#controls");
const inputCreateDiv = document.querySelector('#controls [type="number"]');
const btnCreateDiv = document.querySelector("[data-create]");
const btnDestroyDiv = document.querySelector("[data-destroy]");
const containerBoxes = document.querySelector("#boxes");

btnCreateDiv.addEventListener("click", () => {
  const amount = parseInt(inputCreateDiv.value, 10);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

btnDestroyDiv.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  containerBoxes.innerHTML = "";
  const divArr = [];

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    divArr.push(div);

    size += 10;
  }
  containerBoxes.append(...divArr);
  inputCreateDiv.value = "";
}

function destroyBoxes() {
  containerBoxes.innerHTML = "";
}
