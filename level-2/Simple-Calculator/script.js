const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const resultContainer = document.getElementById('resultContainer');


button1.addEventListener("click", (event) => {
    event.preventDefault();
    const add1 = parseFloat(document.getElementById("add1").value);
    const add2 = parseFloat(document.getElementById('add2').value);
    let answer = document.querySelector('#resultContainer h1')
    if (!answer){
        answer = document.createElement('h1')
        resultContainer.appendChild(answer);
    } 
    answer.textContent = add1 + add2;
});

button2.addEventListener("click", (event) => {
    event.preventDefault();
    const sub1 = parseFloat(document.getElementById("sub1").value);
    const sub2 = parseFloat(document.getElementById('sub2').value);
    let answer = document.querySelector('#resultContainer h1');
   
    if (!answer){
        answer = document.createElement('h1')
        resultContainer.appendChild(answer);
    } 
    answer.textContent = sub1 - sub2;
});

button3.addEventListener('click', (event) => {
    event.preventDefault();
    const mult1 = parseFloat(document.getElementById('mult1').value);
    const mult2 = parseFloat(document.getElementById('mult2').value);
    let answer = document.querySelector('#resultContainer h1');
   
    if (!answer){
        answer = document.createElement('h1')
        resultContainer.appendChild(answer);
    } 
    answer.textContent = mult1 * mult2;
});

