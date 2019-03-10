
$(document).ready(initializeApp);

var words = [
    'Quan', 'Chris', 'Eric', 'Kenneth', 'Michelle', 'David',
    'Jay', 'Gormley', 'Jimmy', 'Alice', 'Westley', 'Joe',
    'Johnny', 'Jennifer Lai', 'Andrew', 'Jaimie', 'Jason',
    'Jun', 'Caroline', 'Jennifer Ong', 'Vivian', 'Kylie', 
    'Andy', 'Dan', 'Cody'
];

var allCards = new AllCards(words);
allCards.createAllCards();
var teamPoints = {'red': 0, 'blue': 0};

var game = null;
var codeNamesDb = new GenericFBModel('/', renderGame);


var dbCards = null; 
var dbTeamPoints = null;
var dbTurn = "";

codeNamesDb.db.database().ref('/cards').once("value", function(snapshot){
    console.log('Get Cards:', snapshot.val());
    dbCards = snapshot.val();
});

codeNamesDb.db.database().ref('/gamePoints').once("value", function(snapshot){
    console.log('Get teamPoints:', snapshot.val());
    dbTeamPoints = snapshot.val();
});

codeNamesDb.db.database().ref('/currentTurn').once("value", function(snapshot){
    console.log('Get currentTurn:', snapshot.val());
    dbTurn = snapshot.val();
});

game = new Gameboard(dbCards, teamPoints, dbTurn);

function initializeApp() {
    
    game.appendCards();

    clickHandler();
}

function clickHandler() {
    $(".guess_box").on('click', game.checkGuess);
    $("#reset_game").on('click', resetGame);
}

function renderGame(databaseObject){
    console.log("renderGame called");
    for (var key in databaseObject.cards)
    {
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
    for(var key in allCards.possibleCards)
    {
        allCards.possibleCards[key].wasClicked = false;
    }
    $(".gameContainer").empty();
    $(".winner").empty();
    clickHandler();
    codeNamesDb.saveState(game);
}

