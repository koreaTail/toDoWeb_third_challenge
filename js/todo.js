const todoForm = document.querySelector("#todo-form")
const input = todoForm.querySelector("input")
const ul = document.querySelector("#todo-list")

let toDos = [];
const TODOS_KEY = "toDos"


todoForm.addEventListener("submit", 투두제출시할일)

function 방금작성한할일화면에표시하기(방금작성한할일) {
  const li = document.createElement("li");
  li.id = 방금작성한할일.id
  const span = document.createElement("span");
  span.innerText = 방금작성한할일.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", 선택된할일삭제하기)
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
}

function 할일로컬에저장하기() { 
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function 선택된할일삭제하기(e) {
  e.target.parentNode.remove()
  toDos = toDos.filter(x => x.id !== parseInt(e.target.parentNode.id))  
  할일로컬에저장하기()
}

function 투두제출시할일(event) {
  event.preventDefault();
  const 방금작성한할일 = input.value;
  input.value = "";

  const 방금작성한할일객체화하기 = {
    text: 방금작성한할일,
    id: Date.now(),
  };

  방금작성한할일화면에표시하기(방금작성한할일객체화하기)
  toDos.push(방금작성한할일객체화하기);
  할일로컬에저장하기()
}


const 저장된할일 = localStorage.getItem(TODOS_KEY);

if (저장된할일 !== null) {
  JSON.parse(저장된할일).forEach((개별할일) => 방금작성한할일화면에표시하기(개별할일))
  toDos = JSON.parse(저장된할일)
} else {

}

// todo는 3개로 나눌 수 있다.
// 1. 화면상에 보이는 것, 
// 2. 로컬상에 저장된 것,
// 3. 화면과 로컬을 이어주는 배열
// 이 3가지를 전부 바꿔줘야 온전히 동작한다.