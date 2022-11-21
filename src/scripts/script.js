let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');

function increase() {
    
    
    if(second.innerText < 50) 
        second.innerText = parseInt(second.innerText) + 10;

    else if (second.innerText >= 50) {
        second.innerText = 00;
        minute.innerText = parseInt(minute.innerText) + 1;
    }
}