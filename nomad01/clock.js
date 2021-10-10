const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// padStart(2, "0") -> 한자리 string의 앞에 0을 붙여 두자리 string으로 만든다.
// padEnd(2, "0") -> 한자리 string의 뒤에 0을 붙여 두자리 string으로 만든다.