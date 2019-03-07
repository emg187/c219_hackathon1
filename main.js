$(document).ready(initializeApp);

var teamPoints = {'red': 0, 'blue': 0};
var game = null;

var player; //create player object everytime the code is run
var redTeamPlayers = ["Jay", "David", "Westley", "Joe", "Johnny"];
var blueTeamPlayers = ["Kylie", "Jennifer", "Alice", "Andy", "Brett"]; //these ultimately need to be arrays of Player objects

function initializeApp() {
    game = new Gameboard(redTeamPlayers, blueTeamPlayers);
    game.addCard();

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


