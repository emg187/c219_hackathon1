
$(document).ready(initializeApp);

var game = null;
var codeNamesDb = null;

function initializeApp() {
    codeNamesDb = new GenericFBModel('CodeNames Database',uploadCardToDb);
    game = new Gameboard();
    game.addCard();

    clickHandler();


    // var dbRoot = codeNamesDb.db.database();
    // var cardsRef = dbRoot.child(allCardsObj);

    // var chrisCard = game.allCards.Chris;
    // uploadCardToDb(chrisCard);
   var text = "chris";
}

function clickHandler() {
    $(".guessBox").on('click', game.checkGuess);
}

function uploadCardToDb(card)
{
    console.log('saving');
    codeNamesDb.saveState({
        cards: {
           0 : text,
           1 : "bye"
        },
        word: "David",
        type: "blue",
        haha: {
            0: 'yo',
            1: 'wee'
        }
    })     
}
    

