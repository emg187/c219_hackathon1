
$(document).ready(initializeApp);

var deck = new AllCards();
var teamPoints = { 'red': 0, 'blue': 0 };

var game = null;
var gameSet = false;
var codeNamesDb = new GenericFBModel('codenames', renderGame);

var user = localStorage.getItem('userName');

function initializeApp() {
    game = new Gameboard(deck, "red");
    codeNamesDb.saveState(game);
    // var ref = firebase.database().ref();
    // ref.once('value', function(snapshot) {
    //     return firebase.database().ref('/codenames').once('value').then(function(snapshot) {
    //         // find a better condition than gameDb === null to check if game is already set
            // game = new Gameboard(deck, "red");
            // codeNamesDb.saveState(game);
            // var gameDb = snapshot.val();
    //         if (gameDb.gameSet === false) {
                // debugger;
                // game.appendCards();
                // codeNamesDb.saveState(game);
    //         } else {
    //             debugger;
    //             renderGame();
    //         }
    //         codeNamesDb.saveState(game);
    //     });
    // });

    // game = new Gameboard(deck, teamPoints, "red");

    // codeNamesDb.saveState(game);

    // console.log(user);

    // var ref = firebase.database().ref();
    // ref.on('value', function(snapshot) {
    //     return firebase.database().ref('/codenames').once('value').then(function(snapshot) {
    //         var gameDb = snapshot.val();
    //         debugger;
    //         if (gameDb.firstUser === 0) {
    //             gameDb.firstUser = [user];
    //         } else {
    //             gameDb.firstUser.push(user);
    //         }
    //     });
    // });

    $(".team_points").text(
        'Red: ' + teamPoints.red+ 
        ', Blue: ' + teamPoints.blue
    );

    clickHandler();
}

function clickHandler() {
    $("#reset_game").on('click', resetGame);
    $("#spymasterButton").on('click', toggleColors);
}

function renderGame() {
    var ref = firebase.database().ref('/codenames');
    ref.once('value').then(function(snapshot) {
        if (gameSet === false) {
            game.appendCards();
            gameSet = true;
            codeNamesDb.saveState(game);
            $(".guess_box").on('click', game.checkGuess);
        }
    });

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
    for (var key in deck.possibleCards) {
        deck.possibleCards[key].wasClicked = false;
    }
    $(".gameContainer").empty();
    $(".winner").empty();

    clickHandler();
    codeNamesDb.saveState(game);
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

function writeUserData(user) {
    firebase.database().ref('/').set({
        users: user
    });
}
