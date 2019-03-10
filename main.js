
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


//codeNamesDb.db.database().ref(codeNamesDb.boardName).once("value", renderGame);

function initializeApp() {
    game = new Gameboard(allCards, teamPoints, "red");
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
        }
        
    }

}

function resetGame() {

    for(var key in allCards.possibleCards)
    {
        allCards.possibleCards[key].status = false;
    }
    $(".gameContainer").empty();
    $(".winner").empty();
    game.appendCards();
    clickHandler();
    codeNamesDb.saveState(game);
}
