$(document).ready(initializeApp);

var game = null;

function initializeApp() {
    game = new Gameboard();
    game.addCard();

    clickHandler();
}

function clickHandler() {
    $(".guessBox").on('click', game.checkGuess);
}