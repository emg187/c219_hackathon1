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
var redTeamPlayers = ["Jay", "David", "Westley", "Joe", "Johnny"];
var blueTeamPlayers = ["Kylie", "Jennifer", "Alice", "Andy", "Brett"];

function initializeApp() {
    game = new Gameboard(redTeamPlayers, blueTeamPlayers);

    game.addCard(allCards.possibleCards);

    clickHandler();
}

function clickHandler() {
    $(".guessBox").on('click', game.checkGuess);

    $("#resetGame").on('click', resetGame);
}

function resetGame() {
    $(".gameContainer").empty();
    $(".winner").empty();
    initializeApp();
}