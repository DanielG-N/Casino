let hand = new Set();
let bet = 0;

let checkWin = () =>{
    let suitAndRank = [];
    let counts = {};
    let handScore = 0;

    document.getElementById('btnRedraw').disabled = true;

    for(let card of hand.values()){
        let temp = card.substring(12, card.length - 4);
        temp = temp.split('s');

        suitAndRank = suitAndRank.concat(temp);
    }
    suitAndRank.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });

    for(const x in counts){
        // console.log(x);
        // console.log(counts[x]);

        if(!isNaN(parseInt(x))){

            if(counts[x] > 1){
                switch(counts[x]){
                    case 2:
                        handScore++;
                        break;
                    case 3:
                        handScore = handScore + 3;
                        break;
                    case 4:
                        handScore = handScore + 7;
                        break;
                }
            }
            else if(!isNaN(counts[parseInt(x)+4]) && !isNaN(counts[parseInt(x)+3]) && !isNaN(counts[parseInt(x)+2]) && !isNaN(counts[parseInt(x)+1])){
                handScore = handScore + 5;
            }
        }
        else if(counts[x] == 5){
            handScore = handScore + 6;
        }
    }

    let payout = 0;
    switch (handScore) {
        case 1:
            payout = bet * 2;
            console.log('Pair');
            break;

        case 2:
            payout = bet * 6;
            console.log('2 Pair');
            break;

        case 3:
            payout = bet * 11;
            console.log('Three of a kind');
            break;

        case 4:
            payout = bet * 101;
            console.log('Full House');
            break;

        case 5:
            payout = bet * 26;
            console.log('Straight');
            break;

        case 6:
            payout = bet * 51;
            console.log('flush');
            break;

        case 7:
            payout = bet * 1001;
            console.log('Four of a kind');
            break;
    
        case 11:
            payout = bet * 10001;
            console.log('Straight Flush');
            break;

        default:
            break;
    }
}

let Deal = () =>{
    hand.clear();
    while(hand.size < 5){
        hand.add(getCard());
    }
    DiplayCards();
}

let getCard = () =>{
    let suitArray = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

    let suit = suitArray[Math.floor(Math.random() * 4)];
    let value = Math.floor(Math.random() * 13) + 1;

    return `./cards/card${suit}${value}.png`;
}

let switchCard = (card) =>{
    if(card.classList.contains('redraw')){
        card.classList.remove('redraw')
    }else{
        card.classList.add('redraw');
    }
}

let Redraw = () =>{
    let removedCards = [];
    let redrawCards = document.getElementsByClassName('redraw');

    for(let i = 0; i < redrawCards.length; i++){
        let source = redrawCards[i].src.split('/Poker')
        let card = `.${source[1]}`
        removedCards.push(card);
    }

    do{
        hand.add(getCard());
    }while (hand.size < 5 + removedCards.length)

    removedCards.forEach((card)=>{
        hand.delete(card);
    })
    DiplayCards();

    checkWin();
}

let DiplayCards = () =>{
    document.getElementById('cards').innerHTML = "";

    for(let card of hand.values()){
        //console.log(card)
        document.getElementById('cards').innerHTML += `<img src=${card} class='card' onclick='switchCard(this)'>`;
    }
}
