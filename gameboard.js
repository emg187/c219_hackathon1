class Gameboard {
    
    constructor(cardsObject, points, currentTurn){
        this.cards = cardsObject;
        this.gamePoints = points;
        this.currentTurn = currentTurn;

        this.checkGuess = this.checkGuess.bind(this);
    }

    appendCards(){
        var cardKeys = Object.keys(this.cards.possibleCards);
        for (var index=0; index<cardKeys.length; index++){
            var currentCard = this.cards.possibleCards[cardKeys[index]];
            var domElement = currentCard.createCard();
            $(".gameContainer").append(domElement);
        }
    }


    checkGuess(){
        var cardText = $(event.currentTarget).text();
        var cardObj = this.cards.possibleCards[cardText];
        cardObj.status = true;

        if (cardObj.type==="assassin"){
            this.handleAssassin();
        } else {
            codeNamesDb.saveState(game);
            return true;
        }

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