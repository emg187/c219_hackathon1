class Gameboard {
    constructor(deck, currentTurn) {
        this.cards = deck.cardArray;
        this.currentTurn = currentTurn;
        this.revealCardsForSpymaster = false;
        this.position = 0;

        this.checkGuess = this.checkGuess.bind(this);
    }

    appendCards() {
        var cardKeys = Object.keys(this.cards);
        while (cardKeys.length) {
            var randomKey = Math.floor(Math.random() * cardKeys.length);
            var currentCard = this.cards[cardKeys[randomKey]];
            this.cards[cardKeys[randomKey]].position = this.position;
            var domElement = currentCard.createCard();
            $(".game_container").append(domElement);
            cardKeys.splice(randomKey, 1);
            this.position++;
        }
    }

    checkGuess() {
        var cardText = $(event.target).text();
        var cardObj = this.cards[cardText];
        var value = $(event.target).text();
        var type = deck.possibleCards[value].returnType(value);

        var cardIndex = null;

        for (var i=0; i<25; i++) {
            if (this.appendedCards[i].word === value) {
                this.appendedCards[i].wasClicked = true;
                cardIndex = i;
                break;
            }
        }

        var type = this.appendedCards[cardIndex].type;

        this.appendedCards[cardIndex].toggleStyling(cardIndex);

        this.updatePoints(type);
        this.updateTurn(type);

        if (type === 'assassin') {
            game.handleAssassin();
        }

        $(".team_points").empty().text(
            'Red: ' + teamPoints.red+ 
            ', Blue: ' + teamPoints.blue
        );

        codeNamesDb.saveState(this);
    }

    updatePoints(type) {
        if (type === 'red') {
            teamPoints.red+=1;
        } else if (type === 'blue') {
            teamPoints.blue+=1;
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

        $(".winner").text(game.winner + ' team wins!');

        $(".guess_box").off('click');
    }
}
