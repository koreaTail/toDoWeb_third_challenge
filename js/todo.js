const todoForm = document.querySelector("#todo-form")
const input = todoForm.querySelector("input")
const ul = document.querySelector("#todo-list")

const toDos = [];
const TODOS_KEY = "toDos"


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
  // 로컬에 저장하기
  toDos.push(방금작성한할일);
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
  // 로컬에 저장된거 화면에 표시하기
}




function 선택된할일삭제하기(e) {
  e.target.parentNode.remove()
  // 이걸 지우면, 통째로 지워져.. 이렇게 할 수 없고, 새로 그리는 방식으로 해야할듯..
  // localStorage.removeItem(TODOS_KEY)
  console.log(toDos)
  console.dir(e.target.parentElement.children[0])
  // 몇번째꺼인지만 알아내면 된다.. 그순간. 알아야해.
  // 몇번째껄 눌렀는지.. 타겟으로 알 수 없나..
  // console.dir(ul.children[??????].innerText)
}

function 투두제출시할일() {
  event.preventDefault();
  const 방금작성한할일 = input.value;
  input.value = "";
  방금작성한할일화면에표시하기(방금작성한할일)
}


function 저장된할일화면에표시하기(저장된할일){
  JSON.parse(저장된할일).forEach(방금작성한할일화면에표시하기)
}

const 저장된할일 = localStorage.getItem(TODOS_KEY);

if (저장된할일 !== null) {
  저장된할일화면에표시하기(저장된할일)
} else {
  
}