const input = document.querySelector("#input");
const submitButton = document.querySelector(".button");
const ul = document.querySelector(".list-container");
const deleteButtons = document.querySelectorAll(".delete");

const newTask = [];
let inputValue = "";

listShow();

input.addEventListener("keyup", (e) => {
  inputValue = e.target.value;

  if (inputValue.trim().length) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

submitButton.addEventListener("click", () => {
  if (inputValue.trim().length) {
    newTask.push(inputValue);

    ul.innerHTML += `<li>${inputValue} <span class="delete"><i class="fa-solid fa-trash"></i></span></li>`;

    input.value = "";
    inputValue = "";
  }

  submitButton.disabled = true;
});

function listShow() {
  newTask.map((el) => {
    return (ul.innerHTML += `<li>${el}<span class="delete"><i class="fa-solid fa-trash"></i></span></li>`);
  });
}

deleteButtons.forEach((button, index) => {
  button.addEventListener("click", () => {});
});
