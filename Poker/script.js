let suitArray = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
let hand = new Set();

let checkWin = () =>{
    let suitAndRank = [];
    let counts = {};

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
                        console.log('Pair');
                        break;
                    case 3:
                        console.log('Three of a kind')
                        break;
                    case 4:
                        console.log('Four of a kind')
                        break;
                }
            }
            else if(!isNaN(counts[parseInt(x)+4]) && !isNaN(counts[parseInt(x)+3]) && !isNaN(counts[parseInt(x)+2]) && !isNaN(counts[parseInt(x)+1])){
                console.log('Straight')
            }
        }
        else if(counts[x] == 5){
            console.log('flush')
        }
    }
}

let Deal = () =>{
    while(hand.size < 5){
        hand.add(getCard());
    }
    DiplayCards();
}

let getCard = () =>{
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
    document.getElementById('test').innerHTML = "";

    for(let card of hand.values()){
        //console.log(card)
        document.getElementById('test').innerHTML += `<img src=${card} class='card' onclick='switchCard(this)'>`;
    }
}

Deal();