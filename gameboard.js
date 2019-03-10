class Gameboard {
    
    constructor(cardsObject, points, currentTurn){
        this.cards = cardsObject.possibleCards;
        this.gamePoints = points;
        this.currentTurn = currentTurn;

        this.checkGuess = this.checkGuess.bind(this);
    }

    appendCards(){
        var cardKeys = Object.keys(this.cards);
        while (cardKeys.length){
            var randomKey = Math.floor(Math.random()*cardKeys.length);
            var currentCard = this.cards[cardKeys[randomKey]];
            var domElement = currentCard.createCard();
            $(".gameContainer").append(domElement);
            cardKeys.splice(randomKey, 1);
        }
    }


    checkGuess(){
        var cardText = $(event.currentTarget).text();
        var cardObj = this.cards[cardText];
        cardObj.status = true;

        if (cardObj.type==="assassin"){
            this.handleAssassin();
        } else {
            var value = $(event.currentTarget).text();
            codeNamesDb.saveState(game);
            allCards.possibleCards[value].toggleStyling(value);
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

}