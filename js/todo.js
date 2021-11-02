const todoForm = document.querySelector("#todo-form")
const input = todoForm.querySelector("input")
const ul = document.querySelector("#todo-list")

todoForm.addEventListener("submit", 투두제출시할일)

function 방금작성한할일화면에표시하기(방금작성한할일) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = 방금작성한할일;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", 선택된할일삭제하기)
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
}




function 선택된할일삭제하기(e) {
  e.target.parentNode.remove()
}

function 투두제출시할일() {
  event.preventDefault();
  const 방금작성한할일 = input.value;
  input.value = "";
  방금작성한할일화면에표시하기(방금작성한할일)
}

