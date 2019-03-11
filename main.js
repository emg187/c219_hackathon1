
$(document).ready(initializeApp);

var deck = new AllCards();
var teamPoints = { 'red': 0, 'blue': 0 };
var gameSet = false;
var game = null;
var codeNamesDb = null;

var codeNamesDb = new GenericFBModel('codenames');

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
    $("#reset_game").on('click', resetGame);
    $("#spymasterButton").on('click', toggleColors);
}

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
