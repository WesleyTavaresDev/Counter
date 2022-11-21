let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');

function increase() {
    
    
    if(second.innerText < 60) 
        second.innerText = parseInt(second.innerText) + 10;

    else if (second.innerText >= 60) {
        second.innerText = 00;
        minute.innerText = parseInt(minute.innerText) + 1;
    }
}

function decrease() {
    if(second.innerText <= 0 && minute.innerText <= 0)
        return;

    else if (minute.innerText > 0 && second.innerText <= 0) {
        minute.innerText = parseInt(minute.innerText) - 1;
        second.innerText = 60;
    }

    else
        second.innerText = parseInt(second.innerText) - 10;
}
