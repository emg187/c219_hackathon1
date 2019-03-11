
$(document).ready(initializeApp);

var deck = new AllCards();
var teamPoints = { 'red': 0, 'blue': 0 };

var game = null;
var codeNamesDb = new GenericFBModel('/', renderGame);


var dbCards = null;
var dbTeamPoints = null;
var dbTurn = "";

codeNamesDb.db.database().ref('/cards').once("value", function (snapshot) {
    console.log('Get Cards:', snapshot.val());
    dbCards = snapshot.val();
});

// codeNamesDb.db.database().ref('/gamePoints').once("value", function (snapshot) {
//     console.log('Get teamPoints:', snapshot.val());
//     dbTeamPoints = snapshot.val();
// });

// codeNamesDb.db.database().ref('/currentTurn').once("value", function (snapshot) {
//     console.log('Get currentTurn:', snapshot.val());
//     dbTurn = snapshot.val();
// });


function initializeApp() {
    game = new Gameboard(deck, teamPoints, "red");
    // game = new Gameboard(dbCards, dbTeamPoints, dbTurn);
    game.appendCards();

    clickHandler();
}

function clickHandler() {
    $(".guess_box").on('click', game.checkGuess);
    $("#reset_game").on('click', resetGame);
    $("#spymasterButton").on('click', toggleColors);
}

function renderGame(databaseObject) {
    // game.userName = localStorage.getItem('userName');

    // databaseObject.userName = game.userName;

    // if (!game.userName) {
    //     game.userName = 'user-' + Math.floor((Math.random() * 999999));
    //     localStorage.setItem('userName', game.userName);
    // }

    // databaseObject.userName = game.userName;
    // console.log(databaseObject);
    // console.log('userName is: ' + game.userName);

    // if (databaseObject.userName === null || game.userName !== databaseObject.userName) {
    //     resetGame();
    // } else {
    //     renderGame();
    // }
    console.log("renderGame called");
    for (var key in databaseObject.cards) {
        if (databaseObject.cards[key].wasClicked) {
            switch (databaseObject.cards[key].type) {
                case "red":
                    $(`.${key}`).addClass("red");
                    break;
                case "blue":
                    $(`.${key}`).addClass("blue");
                    break;
                case "civilian":
                    $(`.${key}`).addClass("civilian");
                    break;
                case "assassin":
                    $(`.${key}`).addClass("assassin");
                    break;
            }
        }
        else {
            $(`.${key}`).removeClass("red");
            $(`.${key}`).removeClass("blue");
            $(`.${key}`).removeClass("civilian");
            $(`.${key}`).removeClass("assassin");
        }
    }
}

function resetGame() {
    for (var key in deck.possibleCards) {
        deck.possibleCards[key].wasClicked = false;
    }
    $(".gameContainer").empty();
    $(".winner").empty();

    clickHandler();
    codeNamesDb.saveState(game);
}

function toggleColors() {
    for (var key in deck.possibleCards) {
        var type = deck.possibleCards[key].type;
        var divSelected = $(".game_container").find('.' + key);
        if (game.revealCardsForSpymaster === false) {
            $(divSelected).addClass(type);
        } else {
            $(divSelected).removeClass(type);
        }
    }

    if (game.revealCardsForSpymaster === false) {
        game.revealCardsForSpymaster = true;
    } else {
        game.revealCardsForSpymaster = false;
    }
}
