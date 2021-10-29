const todoForm = document.querySelector("#todo-form")
const ul = document.querySelector("#todo-list")

todoForm.addEventListener("submit", 투두제출시할일)

function 투두제출시할일(){
    event.preventDefault();
    console.log("투두제출됨")
}