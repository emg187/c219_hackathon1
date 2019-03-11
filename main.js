
$(document).ready(initializeApp);

var deck = new AllCards();
var teamPoints = { 'red': 0, 'blue': 0 };
var gameSet = false;
var game = null;
var codeNamesDb = null;

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

var user = localStorage.getItem('userName');

function initializeApp() {
    var ref = firebase.database().ref('/codenames');
    ref.once('value').then(function(snapshot) {
        var gameDb = snapshot.val();
        if (gameDb === null) {
            game = new Gameboard(deck, "red");
            game.appendCards();
            gameSet = true;
            $(".guess_box").on('click', game.checkGuess);
            codeNamesDb.saveState(game);
        } else {
            for (var i=0; i<25; i++) {
                var domElement = $("<div>").text(gameDb.appendedCards[i].word);
                var classString = "guess_box " + gameDb.appendedCards[i].word;
                domElement.addClass(classString);
                $(".game_container").append(domElement);
            }
        }
        codeNamesDb.saveState(game);
    });

    $(".team_points").text(
        'Red: ' + teamPoints.red+ 
        ', Blue: ' + teamPoints.blue
    );
    
    clickHandler();
}

function clickHandler() {
    $(".game_container").on('click', '.guess_box', game.checkGuess);
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

// function resetGame() {
//     for (var key in deck.possibleCards) {
//         deck.possibleCards[key].wasClicked = false;
//     }
//     $(".gameContainer").empty();
//     $(".winner").empty();
function renderGame() {
    // console.log('render game is called');

    // var ref = firebase.database().ref('/codenames');
    // ref.once('value').then(function(snapshot) {
    //     debugger;
    //     if (game === null && snapshot.val() === null) {
            // for (var i=0; i<25; i++) {
            //     debugger;
            //     var currentCard = game.cards[i];
            //     var domElement = $("<div>").text(this.word);

            //     var classString = "guess_box " + this.word;
            //     domElement.addClass(classString);
            //     $(".game_container").append(domElement);
            //     return domElement;
            // }
    //     }
    // });

    // game = new Gameboard(deck, "red");

    // codeNamesDb.db.database().ref('/').once("value", function (snapshot) {
    //     var gameDb = snapshot.val();
    //     if (gameDb === null) {
    //         game = new Gameboard(deck, "red");
    //     }
    // });
    
    // console.log("renderGame called");
    // for (var key in databaseObject.cards) {
    //     if (databaseObject.cards[key].wasClicked) {
    //         switch (databaseObject.cards[key].type) {
    //             case "red":
    //                 $(`.${key}`).addClass("red");
    //                 break;
    //             case "blue":
    //                 $(`.${key}`).addClass("blue");
    //                 break;
    //             case "civilian":
    //                 $(`.${key}`).addClass("civilian");
    //                 break; 
    //             case "assassin":
    //                 $(`.${key}`).addClass("assassin");
    //                 break;
    //         }
    //     }
    //     else {
    //         $(`.${key}`).removeClass("red");
    //         $(`.${key}`).removeClass("blue");
    //         $(`.${key}`).removeClass("civilian");
    //         $(`.${key}`).removeClass("assassin");
    //     }
    // }
}

function resetGame() {
    for (var key in deck.cardArray) {
        deck.randomizedCards[key].wasClicked = false;
    }
    $(".gameContainer").empty();
    $(".winner").empty();

//     clickHandler();
//     codeNamesDb.saveState(game);
    
}

function toggleColors() {
    console.log('revealed is: '+game.revealCardsForSpymaster);
    for (var i=0; i<25; i++) {
        var type = game.appendedCards[i].type;
        var divSelected = $(".game_container").find('.'+game.appendedCards[i].word);
        if (game.revealCardsForSpymaster === false) {
            $(divSelected).addClass(type);
        } else if (game.revealCardsForSpymaster === true && game.appendedCards[i].wasClicked === false) {
            $(divSelected).removeClass(type);
        }
    }

    if (game.revealCardsForSpymaster === false) {
        game.revealCardsForSpymaster = true;
    } else {
        game.revealCardsForSpymaster = false;
    }
}

function resetGame() {
    $(".game_container").empty();
    $(".winner").empty();

    deck = new AllCards();
    game = new Gameboard(deck, 'red');
    game.appendCards();
    codeNamesDb.saveState(game);
    clickHandler();
}
function writeUserData(user) {
    firebase.database().ref('/').set({
        users: user
    });
}
