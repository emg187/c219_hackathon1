
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
           alice : {
               type : "blue",
               word : "alice"
           },
           1 : "bye",
           2 : "test",
           3 : "blahblah"

        },
        word: "David",
        type: "blue",
        team: {
            red: 'yo',
            blue: 'wee'
        }
    })     
}
    

