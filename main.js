
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

//var player = new Player;

function initializeApp() {
    codeNamesDb = new GenericFBModel('CodeNames Database', renderGame);
    game = new Gameboard(allCards, teamPoints, "red");
    game.appendCards();
    clickHandler();


    // var cardDbRef = 


}

function clickHandler() {
    $(".guessBox").on('click', checkGuess);
    $("#resetGame").on('click', resetGame);
    //pull the firebase object back down 
    //for each loop to update changes 
}

function checkGuess(){
    var cardText = $(this).text();
    var cardObj = allCards.possibleCards[cardText];
    cardObj.status = true;

    if (cardObj.type==="assassin"){
        this.handleAssassin();
    } else {
        codeNamesDb.saveState(game);
        return true;
    }

}

function renderGame(){
    console.log("game board received");
}



function resetGame() {
    $(".gameContainer").empty();
    $(".winner").empty();
    initializeApp();
}





/*

var lastGuess = checkGuess();
if (!lastGuess){
    game.updateTurn();
}

*/