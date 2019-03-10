class Gameboard {
    constructor(cardsObject, points, currentTurn) {
        this.cards = cardsObject.possibleCards;
        this.gamePoints = points;
        this.currentTurn = currentTurn;

        this.checkGuess = this.checkGuess.bind(this);
    }

    appendCards() {
        var cardKeys = Object.keys(this.cards);
        while (cardKeys.length) {
            var randomKey = Math.floor(Math.random() * cardKeys.length);
            var currentCard = this.cards[cardKeys[randomKey]];
            var domElement = currentCard.createCard();
            $(".game_container").append(domElement);
            cardKeys.splice(randomKey, 1);
        }
    }


    checkGuess() {
        var cardText = $(event.currentTarget).text();
        var cardObj = this.cards[cardText];
        cardObj.wasClicked = true;

        var value = $(event.currentTarget).text();

        debugger;

        codeNamesDb.saveState(game);

        deck.possibleCards[value].toggleStyling(value);

    }

    updatePoints() {
        this.gamePoints[this.currentTurn]++;
    }

    updateTurn() {
        if (this.currentTurn === "red") {
            this.currentTurn = "blue";
        } else {
            this.currentTurn = "red";
        }
    }


}
