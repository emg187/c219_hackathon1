$(document).ready(initializeApp);

var game = null;
var redTeamPlayers = ["Jay", "David", "Westley", "Joe", "Johnny"];
var blueTeamPlayers = ["Kylie", "Jennifer", "Alice", "Andy", "Brett"];

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
    initializeApp();
}


