const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email;
  const password = formElements.password;

  if (mail.value === "" || password.value === "") {
    return alert("Заполни форму.");
  }

  console.log({ mail: mail.value, password: password.value });
}
