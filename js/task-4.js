const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    loginForm.email.value === "" ||
    loginForm.elements.password.value === ""
  ) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    [loginForm.elements.email.name]: loginForm.elements.email.value.trim(),
    [loginForm.elements.password.name]:
      loginForm.elements.password.value.trim(),
  };
  console.log(formData);

  loginForm.reset();
});
