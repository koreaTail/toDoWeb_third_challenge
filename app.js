const 로그인폼 = document.querySelector("#로그인폼")
const 인풋 = 로그인폼.querySelector("input")
const 버튼 = 로그인폼.querySelector("button")
const h1 = document.querySelector("h1")

const HIDDEN_CLASSNAME = "hidden"

로그인폼.addEventListener("submit", 이름내보내기)

function 이름내보내기(event){
    event.preventDefault();
    const usesrname = 인풋.value;
    숨기기(로그인폼);
    console.log(usesrname);
    숨기기취소(h1)
    h1.innerText = `안녕, ${usesrname}`;
    이름저장하기(usesrname)
}

function 숨기기(숨길놈){
    숨길놈.classList.add(HIDDEN_CLASSNAME)
}

function 숨기기취소(숨기기취소할놈){
    숨기기취소할놈.classList.remove(HIDDEN_CLASSNAME)
}

function 이름저장하기(유저이름){
    localStorage.setItem("username", 유저이름)
}

// 로그인폼.classList.add("hidden");