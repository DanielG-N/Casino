let chips = parseInt(localStorage.getItem('chips'));
if(localStorage.getItem('bankAccount') == null){
    localStorage.setItem('bankAccount', 4000);
}
let bankAccount = parseInt(localStorage.getItem('bankAccount'));

document.getElementById('chipAmount').innerHTML = `Chips: $${chips}`;
document.getElementById('bankAccount').innerHTML = `Bank Account: $${bankAccount}`;

function BackButton() {
        location.href = 'http://127.0.0.1:5500/Menu/menu.html';
}



function DepositAmt() {
    document.getElementById("amount").innerHTML = "1000";
}

var depositAmount = document.getElementById('depositAmount');
var depositP = document.getElementById('depositP');
var dClickCounter = 0;

depositAmount.onclick = function() {
    if(dClickCounter*1000 >= chips) return;
    dClickCounter++; 
	depositP.innerHTML = "$" + dClickCounter +"000";


    if(withdrawP != null){
        wClickCounter = 0;
        withdrawP.innerHTML = "";
    }
}


var withdrawAmount = document.getElementById('withdrawAmount');
var withdrawP = document.getElementById('withdrawP');
var wClickCounter = 0;

withdrawAmount.onclick = function() {
    wClickCounter++;
    withdrawP.innerHTML = "$" + wClickCounter + "000";

    if(depositP != null){
        dClickCounter = 0;
        depositP.innerHTML = "";
    }
}

let DepositButton = () => {
    bankAccount += dClickCounter * 1000;
    chips -= dClickCounter * 1000;

    document.getElementById('bankAccount').innerHTML = `Bank Account: $${bankAccount}`;
    document.getElementById('chipAmount').innerHTML = `Chips: $${chips}`;

    dClickCounter = 0;
    depositP.innerHTML = "";

    localStorage.setItem('chips', chips);
    localStorage.setItem('bankAccount', bankAccount);
}

let WithdrawButton = () => {
    bankAccount -= wClickCounter * 1000;
    chips += wClickCounter * 1000;

    document.getElementById('bankAccount').innerHTML = `Bank Account: $${bankAccount}`;
    document.getElementById('chipAmount').innerHTML = `Chips: $${chips}`;

    wClickCounter = 0;
    withdrawP.innerHTML = "";

    localStorage.setItem('chips', chips);
    localStorage.setItem('bankAccount', bankAccount);
}