const todoForm = document.querySelector("#todo-form")
const input = todoForm.querySelector("input")
const ul = document.querySelector("#todo-list")

todoForm.addEventListener("submit", 투두제출시할일)

function 방금작성한할일화면에표시하기(방금작성한할일) {
  console.log("과연", 방금작성한할일)
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = 방금작성한할일;
  ul.appendChild(li);

}

function 투두제출시할일() {
  event.preventDefault();
  const 방금작성한할일 = input.value;
  // console.log(방금작성한할일, input.value);
  input.value = "";
  // console.log(방금작성한할일, input.value);
  방금작성한할일화면에표시하기(방금작성한할일)
}

