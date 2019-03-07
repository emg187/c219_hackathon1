class Gameboard {
    
    constructor(points, currentTurn){
        this.gamePoints = points;
        this.currentTurn = currentTurn;
    }

    appendCards(){
        var cardKeys = Object.keys(allCards.possibleCards);
        for (var index=0; index<cardKeys.length; index++){
            var currentCard = allCards.possibleCards[cardKeys[index]];
            var domElement = currentCard.createCard();
            $(".gameContainer").append(domElement);
        }
    }


    checkGuess(){
        //change card's status to true 
            //stores card's text, then finds it in the cardsObj
        //if assassin, calls handle assassin
        //updates points
        //updates turn 
        //returns true in event of corect guess
        //calls updateFirebase  
        var cardText = $(this).text();
        allCards.possibleCards[cardText].status = true;
    }

    updatePoints(){
        this.gamePoints[this.currentTurn]++;
    }

    updateTurn(){
        if (this.currentTurn==="red"){
            this.currentTurn = "blue";
        } else {
            this.currentTurn = "red";
        }
    }

    handleAssassin(){
        //ends game
    }

    updateFirebase(){
        //pushes new object up 
    }

}