
$(document).ready(initializeApp);

var words = [
    'Quan', 'Chris', 'Eric', 'Kenneth', 'Michelle', 'David',
    'Jay', 'Gormley', 'Jimmy', 'Alice', 'Westley', 'Joe',
    'Johnny', 'Jennifer Lai', 'Andrew', 'Jaimie', 'Jason',
    'Jun', 'Caroline', 'Jennifer', 'Vivian', 'Kylie', 
    'Andy', 'Dan', 'Cody'
];

var allCards = new AllCards(words);
allCards.createAllCards();

var teamPoints = {'red': 0, 'blue': 0};
var game = null;
var codeNamesDb = null;

var player; //create player object everytime the code is run
var redTeamPlayers = ["Jay", "David", "Westley", "Joe", "Johnny"];
var blueTeamPlayers = ["Kylie", "Jennifer", "Alice", "Andy", "Brett"]; //these ultimately need to be arrays of Player objects

function initializeApp() {
    codeNamesDb = new GenericFBModel('CodeNames Database',uploadCardToDb);
    game = new Gameboard();
    game.addCard();
    game = new Gameboard(redTeamPlayers, blueTeamPlayers);

    game.addCard(allCards.possibleCards);

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
    

    $("#resetGame").on('click', resetGame);
}

function resetGame() {
    $(".gameContainer").empty();
    $(".winner").empty();
    initializeApp();
}
