class Gameboard {
    constructor(cardsObject, points, currentTurn) {
        this.cards = cardsObject.possibleCards;
        this.gamePoints = points;
        this.currentTurn = currentTurn;
        this.revealCardsForSpymaster = false;

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
        var value = $(event.currentTarget).text();
        var type = deck.possibleCards[value].returnType(value);

        cardObj.wasClicked = true;

        deck.possibleCards[value].toggleStyling(value);

        this.updatePoints(type);
        this.updateTurn(type);

        if (type === 'assassin') {
            game.handleAssassin();
        }

        codeNamesDb.saveState(game);
    }

    updatePoints(type) {
        if (type === 'red') {
            if (game.currentTurn === 'red') {
                teamPoints.red+=1;
            } else {
                teamPoints.blue+=1;
            }
        } else if (type === 'blue') {
            if (game.currentTurn === 'blue') {
                teamPoints.blue+=1;
            } else {
                teamPoints.red+=1;
            }
        } else if (type === 'civilian') {
            if (game.currentTurn === 'red') {
                game.currentTurn = 'blue';
            } else {
                game.currentTurn = 'red';
            }
        }
    }

    updateTurn(type) {
        if (type === 'red') {
            if (game.currentTurn === 'blue') {
                game.currentTurn = 'red';
            }
        } else if (type === 'blue') {
            if (game.currentTurn === 'red') {
                game.currentTurn = 'blue';
            }
        } else if (type === 'civilian') {
            if (game.currentTurn === 'red') {
                game.currentTurn = 'blue';
            } else {
                game.currentTurn = 'red';
            }
        }
    }

    handleAssassin() {
        if (game.currentTurn === 'red') {
            game.winner = 'blue';
        } else {
            game.winner = 'red';
        }

        $(".guess_box").off('click');
    }
}
