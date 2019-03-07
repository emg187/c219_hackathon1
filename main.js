$(document).ready(initializeApp);

var game = null;
//create player objects 

var player;
var redTeamPlayers = ["Jay", "David", "Westley", "Joe", "Johnny"];
var blueTeamPlayers = ["Kylie", "Jennifer", "Alice", "Andy", "Brett"]; //these ultimately need to be arrays of Player objects

function initializeApp() {
    game = new Gameboard(redTeamPlayers, blueTeamPlayers);
    game.addCard();

    clickHandler();
}

function clickHandler() {
    $(".guessBox").on('click', game.checkGuess);
}


