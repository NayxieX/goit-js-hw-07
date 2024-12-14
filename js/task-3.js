const showMessage = document.querySelector("#name-output");
const fieldEl = document.querySelector("#name-input");

fieldEl.addEventListener("input", () => {
  const fieldValue = fieldEl.value.trim();

  if (fieldValue === "" || fieldValue === undefined) {
    showMessage.textContent = "Anonymous";
  } else {
    showMessage.textContent = `${[fieldValue]}`;
  }
});
