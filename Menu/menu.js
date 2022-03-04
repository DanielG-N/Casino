function StartGame() {
    location.href = 'http://127.0.0.1:5500/Menu/menu.html';
}

function BackButton() {
    location.href = 'http://127.0.0.1:5500/Menu/startMenu.html';
}

function BankButton() {
    location.href = 'http://127.0.0.1:5500/Bank/bank.html';
}

function Poker() {
    location.href = 'http://127.0.0.1:5500/Poker/index.html';
}

<<<<<<< HEAD
function Craps() {
    location.href = 'http://127.0.0.1:5500/Craps/craps.html'
}
=======
if(localStorage.getItem('chips') == null){
    localStorage.setItem('chips', 4000);
}

document.getElementById('chipsAmount').innerHTML = `Chips: $${localStorage.getItem('chips')}`;
>>>>>>> 2c56e8728981b1c8a195bfa0febe3403a69134b4
