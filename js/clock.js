const clock =  document.querySelector("h2#clock");

현재시간표시하기();
setInterval(현재시간표시하기, 1000)

function 현재시간표시하기(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,"0")
    const minutes = date.getMinutes().toString().padStart(2,"0")
    const seconds = date.getSeconds().toString().padStart(2,"0")
    
    clock.innerHTML = `${hours}:${minutes}:${seconds}`
}

