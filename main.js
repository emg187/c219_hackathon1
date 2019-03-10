
$(document).ready(initializeApp);

var words = [
    'Quan', 'Chris', 'Eric', 'Kenneth', 'Michelle', 'David',
    'Jay', 'Gormley', 'Jimmy', 'Alice', 'Westley', 'Joe',
    'Johnny', 'Jennifer Lai', 'Andrew', 'Jaimie', 'Jason',
    'Jun', 'Caroline', 'Jennifer Ong', 'Vivian', 'Kylie', 
    'Andy', 'Dan', 'Cody'
];

var allCards = new AllCards(words);
var teamPoints = {'red': 0, 'blue': 0};
var game = null;
var firstUser = null;

allCards.createAllCards();
var codeNamesDb = new GenericFBModel('/', renderGame);

function initializeApp() {
    game = new Gameboard(allCards, teamPoints, "red");
    game.appendCards();
    codeNamesDb.saveState(game);
    clickHandler();
}

function clickHandler() {
    $(".guess_box").on('click', game.checkGuess);
    $("#reset_game").on('click', resetGame);
}

function renderGame(databaseObject) {
    game.userName = localStorage.getItem('userName');

    databaseObject.userName = game.userName;

    if (!game.userName) {
        game.userName = 'user-' + Math.floor((Math.random() * 999999));
        localStorage.setItem('userName', game.userName);
    }

    databaseObject.userName = game.userName;
    console.log(databaseObject);
    console.log('userName is: ' + game.userName);

    if (databaseObject.userName === null || game.userName !== databaseObject.userName) {
        resetGame();
    } else {
        renderGame();
    }

    for (var key in databaseObject.cards) {
        if (databaseObject.cards[key].wasClicked){  
            switch (databaseObject.cards[key].type){
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
        else
        {
            $(`.${key}`).removeClass("red");
            $(`.${key}`).removeClass("blue");
            $(`.${key}`).removeClass("civilian");
            $(`.${key}`).removeClass("assassin");
        }
        
    }
}

function resetGame() {
    for(var key in allCards.possibleCards) {
        allCards.possibleCards[key].status = false;
    }
    $(".gameContainer").empty();
    $(".winner").empty();
 
    game.appendCards();
    clickHandler();
    codeNamesDb.saveState(game);
}

function resetGame() {
    for(var key in allCards.possibleCards)
    {
        allCards.possibleCards[key].wasClicked = false;
    }
    $(".gameContainer").empty();
    $(".winner").empty();
    game = new Gameboard(allCards, teamPoints, "red");
    game.appendCards();
    clickHandler();
}
