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

createEl.addEventListener("keydown", (element) => {
  btnCreateDiv.addEventListener("click", (element) => {
    if (inputCreateDiv.value > 0 && inputCreateDiv.value < 100) {
      createBoxes(inputCreateDiv.value);
    }
  });
  btnDestroyDiv.addEventListener("click", (element) => {
    destroyBoxes();
  });

  function createBoxes(amount) {
    containerBoxes.innerHTML = "";
    let divArr = [];

    let size = 30;

    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${[size]}px`;
      div.style.height = `${[size]}px`;

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
});
