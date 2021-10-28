const clock =  document.querySelector("h2#clock");

현재시간표시하기();
setInterval(현재시간표시하기, 1000)

function 현재시간표시하기(){
    const date = new Date();
    clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

