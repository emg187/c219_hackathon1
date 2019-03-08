
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

function initializeApp() {
    codeNamesDb = new GenericFBModel('/', renderGame);
    game = new Gameboard(allCards, teamPoints, "red");
    codeNamesDb.registerListener();
    game.appendCards();
    clickHandler();
}

function clickHandler() {
    $(".guessBox").on('click', game.checkGuess);
    $("#resetGame").on('click', resetGame);
}


function renderGame(){
    console.log("game board received");
    var downloadedGame = firebase.database.ref().root();
}

function resetGame() {
    $(".gameContainer").empty();
    $(".winner").empty();
    initializeApp();
}

