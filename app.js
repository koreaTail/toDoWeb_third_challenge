const 로그인폼 = document.querySelector("#로그인폼")
const 인풋 = 로그인폼.querySelector("input")
const 버튼 = 로그인폼.querySelector("button")
const h1 = document.querySelector("h1")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME = "username"

const 저장된이름 = localStorage.getItem(USERNAME);

if(저장된이름 !== null){
    숨기기(로그인폼)
    이름화면에표시하기(저장된이름)
} else{
    로그인폼.addEventListener("submit", 이름제출되면할일)
}

function 이름제출되면할일(event){
    event.preventDefault();
    const username = 인풋.value;
    이름로컬에저장하기(username)
    이름화면에표시하기(username)
}

function 이름화면에표시하기(보여줄이름){
    h1.innerText = `안녕, ${보여줄이름}`;
    숨기기취소(h1);
}

function 숨기기(숨길놈){
    숨길놈.classList.add(HIDDEN_CLASSNAME)
}

function 숨기기취소(숨기기취소할놈){
    숨기기취소할놈.classList.remove(HIDDEN_CLASSNAME)
}

function 이름로컬에저장하기(유저이름){
    localStorage.setItem(USERNAME, 유저이름)
}
