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
  console.log(parseInt(e.target.parentNode.id))
  e.target.parentNode.remove()
  console.log(toDos.find(x => x.id === parseInt(e.target.parentNode.id)) ) 
  const 제거된할일목록 = toDos.filter(x => x.id !== parseInt(e.target.parentNode.id))  
  toDos = 제거된할일목록; 
  할일로컬에저장하기()
  // 이걸 지우면, 통째로 지워져.. 이렇게 할 수 없고, 새로 그리는 방식으로 해야할듯..
  // localStorage.removeItem(TODOS_KEY)
  // console.log(toDos)
  // console.dir(e.target.parentElement.children[0])
  // 몇번째꺼인지만 알아내면 된다.. 그순간. 알아야해.
  // 몇번째껄 눌렀는지.. 타겟으로 알 수 없나..
  // console.dir(ul.children[??????].innerText)
}

function 투두제출시할일(event) {
  event.preventDefault();
  const 방금작성한할일 = input.value;
  input.value = "";

  // 로컬에 저장하기
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
  // 저장된할일화면에표시하기(개별할일)
  JSON.parse(저장된할일).forEach((개별할일) => 방금작성한할일화면에표시하기(개별할일))
  toDos = JSON.parse(저장된할일)
} else {

}