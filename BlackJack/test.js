var deck = [2,3,4,5,6,7,8,9,10,10,10,10,11,
    2,3,4,5,6,7,8,9,10,10,10,10,11,
    2,3,4,5,6,7,8,9,10,10,10,10,11,
    2,3,4,5,6,7,8,9,10,10,10,10,11];

let player = document.getElementById("player-Hand");
let dealer = document.getElementById("dealer-Hand");
let hitButton = document.getElementById("hitButton");
let stayButton = document.getElementById("stayButton");
let playerScore = document.getElementById("playerScore");
let winner = document.getElementById("winner");
let dealerScore = document.getElementById("dealerScore");
let restartButton = document.getElementById("restart");
let playerHand = 0;
let dealerHand = 0;

function drawCard(deck){
var getCard = Math.floor(deck.length * Math.random())
return deck[getCard];
}


function startGame(){
playerHand = [drawCard(deck),drawCard(deck)];
dealerHand = [drawCard(deck),drawCard(deck)];
player.innerHTML = playerHand;
restartButton.disabled = true;

}

function getHand(hand){
var sum = 0;
for(var i=0; i<hand.length;i++){
sum += hand[i];
}
return sum;
}

function hit(){
playerHand.push(drawCard(deck));
player.innerHTML = playerHand;
playerScore.innerHTML = getHand(playerHand);
if(getHand(playerHand) > 21){
document.getElementById("hitButton").disabled = true;
document.getElementById("standButton").disabled = true;
winner.innerHTML = "Bust! Dealer Wins"
dealerScore.innerHTML = "Dealer Score: "+getHand(dealerHand);
document.getElementById("restart").disabled = false;
}
}

function stand(){
cpuTurn();
dealer.innerHTML = dealerHand;
document.getElementById("hitButton").disabled = true;
document.getElementById("standButton").disabled = true;
dealerScore.innerHTML = "Dealer Score: "+getHand(dealerHand);
document.getElementById("restart").disabled = false;

getWinner();
}


function getWinner(){

if( getHand(dealerHand) > getHand(playerHand) &&  getHand(dealerHand) < 22){
winner.innerHTML = "Dealer Wins"
dealerScore.innerHTML = "Dealer Score: "+getHand(dealerHand);
document.getElementById("restart").disabled = false;
}else if(getHand(playerHand)> getHand(dealerHand) && getHand(playerHand) < 22){
winner.innerHTML = "You Win!"
document.getElementById("restart").disabled = false;
}else if( getHand(dealerHand) > 22 & getHand(playerHand)> 22){
winner.innerHTML = "Both Busted! No one Wins"
document.getElementById("restart").disabled = false;
}else if(getHand(dealerHand) >= 22 && getHand(playerHand) < 22){
winner.innerHTML = "You Win! Dealer Busted"
}else{
winner.innerHTML = "Both Tied! No one Wins"
}

}

function restart(){
playerHand = 0;
dealerHand = 0;
startGame();
document.getElementById("hitButton").disabled = false;
document.getElementById("standButton").disabled = false;
playerScore.innerHTML = getHand(playerHand);
dealerScore.innerHTML = "";
dealer.innerHTML = "";
winner.innerHTML = "";
}

function cpuTurn(){
while(getHand(dealerHand) < 17){
dealerHand.push(drawCard(deck));
}

}


startGame();


playerScore.innerHTML = getHand(playerHand);
console.log("Player hand value : " + getHand(playerHand));
console.log("Deal hand: " + dealerHand);
console.log("Dealer hand value : " + getHand(dealerHand));
