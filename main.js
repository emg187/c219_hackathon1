
$(document).ready(initializeApp);

var words = [
    'Quan', 'Chris', 'Eric', 'Kenneth', 'Michelle', 'David',
    'Jay', 'Gormley', 'Jimmy', 'Alice', 'Westley', 'Joe',
    'Johnny', 'Jennifer Lai', 'Andrew', 'Jaimie', 'Jason',
    'Jun', 'Caroline', 'Jennifer', 'Vivian', 'Kylie', 
    'Andy', 'Dan', 'Cody'
];

var allCards = new AllCards(words);
allCards.createAllCards();
var teamPoints = {'red': 0, 'blue': 0};

var game = null;
var codeNamesDb = null;

function initializeApp() {
    codeNamesDb = new GenericFBModel('CodeNames Database', renderGame);
    game = new Gameboard(allCards, teamPoints, "red");
    codeNamesDb.registerListener();
    game.appendCards();
    clickHandler();
}

function clickHandler() {
    $(".guessBox").on('click', game.checkGuess);
    $("#resetGame").on('click', resetGame);
}


function renderGame(){
    var downloadedGame = firebase.database().ref("CodeNames Database");
    downloadedGame.on("value", function(snapshot){
        downloadedGame = snapshot.val();
        debugger;
        for (var key in downloadedGame.cards){
            if (downloadedGame.cards[key].status==="true"){
                var wordClicked = $(event.currentTarget).text();
                var cardToStyle = $(".gameContainer").find(wordClicked);
                switch (downloadedGame.cards[key].type){
                    case "red":
                        cardToStyle.addClass("red");
                        break;
                    case "blue": 
                        cardToStyle.addClass("blue");
                        break;
                    case "civilian":
                        cardToStyle.addClass("civilian");
                        break;
                         
                }
            }
        }
    });
}

function resetGame() {
    $(".gameContainer").empty();
    $(".winner").empty();
    initializeApp();
}

