let box = document.getElementById('box');

let tatts = document.getElementById('tatts');

box.addEventListener('dblclick', function(){
    box.style.backgroundColor = 'green';
});

box.addEventListener('mousedown', function(){
    box.style.backgroundColor = 'red';
});

box.addEventListener('mouseup', function(){
    box.style.backgroundColor = 'yellow';
});

box.addEventListener('mouseenter', function(){
    box.style.backgroundColor = 'blue';
    document.addEventListener('keypress', function(event){
        if (event.key === 'r'){
            box.style.backgroundColor = 'red';
        }
        if (event.key === 'b'){
            box.style.backgroundColor = 'blue';
        }
        if (event.key === 'g'){
            box.style.backgroundColor = 'green';
        }
        if (event.key === 'o'){
            box.style.backgroundColor = 'orange';
        }
        if (event.key === 'y'){
            box.style.backgroundColor = 'yellow';
        }
    })
});

document.addEventListener('wheel', function(){
    box.style.backgroundColor = 'orange'
});

