const clickCounter = document.getElementById('clickCounter');

const reset = document.getElementById('reset');

const button = document.getElementById('clicker');



if (!localStorage.getItem('count')){
    localStorage.setItem('count', 0);
}


let count = parseInt(localStorage.getItem('count')) || 0;


function storeClickCount(){
    clickCounter.textContent = count;
    localStorage.setItem('count', count);
}

button.addEventListener('click', function(event){
    if(timer > 0){
    event.preventDefault();
    count++;
    storeClickCount();
    }
});

reset.addEventListener('click', function(event){
    event.preventDefault();
    localStorage.removeItem('count');
    count = 0
    timer = 30
    storeClickCount();
});

storeClickCount();

// code for countdown clock below //

let clock = document.getElementById('clock');

parseInt(localStorage.setItem('clock', 30));
let timer = parseInt(localStorage.getItem(clock)) || 30


const countdown = setInterval(function(){
    if (timer > 0){
        timer--
    }
    clock.innerText = timer;
}, 1000);