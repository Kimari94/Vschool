const total1 = document.getElementById('total1');
const total2 = document.getElementById('total2');
const total3 = document.getElementById('total3');
const goombaTotal = document.getElementById('goombaTotal');
const chompTotal = document.getElementById('chompTotal');
const koopaTotal = document.getElementById('koopaTotal');
const query = document.querySelectorAll
const calc1 = document.getElementById('calc1');
const calc2 = document.getElementById('calc2');
const calc3 = document.getElementById('calc3');
const calcCoins = document.getElementById('calcCoins');
const calcTotal = document.getElementById('calcTotal');

function goomba() {
    calc1.innerText = parseInt(total1.value) * 3;
}

goombaTotal.addEventListener('click', function(event) {
    event.preventDefault();
    goomba();
});

function chainChomp() {
    calc2.innerText = parseInt(total2.value) * 5;
}

chompTotal.addEventListener('click', function(event) {
    event.preventDefault();
    chainChomp();
})

function koopa() {
    calc3.innerText = parseInt(total3.value) * 10;
}

koopaTotal.addEventListener('click', function(event) {
    event.preventDefault();
    koopa();
})

function calcTotalCoins() {
    let a = parseInt(total1.value) * 3;
    let b = parseInt(total2.value) * 5;
    let c = parseInt(total3.value) * 10;

    calcTotal.innerText = a + b + c;

}

calcCoins.addEventListener('click', function (event) {
    event.preventDefault();
    calcTotalCoins();
})

