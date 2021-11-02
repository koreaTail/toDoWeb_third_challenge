const todoForm = document.querySelector("#todo-form")
const input = todoForm.querySelector("input")
const ul = document.querySelector("#todo-list")

todoForm.addEventListener("submit", 투두제출시할일)

function 투두제출시할일() {
  event.preventDefault();
  const 방금작성한할일 = input.value;
  console.log(방금작성한할일, input.value);
  input.value = "";
  console.log(방금작성한할일, input.value);
}

