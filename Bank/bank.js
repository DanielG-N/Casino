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