class Gameboard {
    constructor(deck, currentTurn) {
        this.cards = deck.cardArray;
        this.currentTurn = currentTurn;
        this.revealCardsForSpymaster = false;
        this.appendedCards = [];

        this.checkGuess = this.checkGuess.bind(this);
    }

    appendCards() {
        for (var i=0; i<25; i++) {
            var randomKey = Math.floor(Math.random() * this.cards.length);
            var currentCard = this.cards[randomKey];
            var domElement = currentCard.createCard();
            $(".game_container").append(domElement);
            var hold = this.cards.splice(randomKey, 1)
            this.appendedCards.push(hold[0]);
        }
    }

    checkGuess() {
        var value = $(event.currentTarget).text();

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

        this.updateTurn(type);

        if (type === 'assassin') {
            game.handleAssassin();
        }

        codeNamesDb.saveState(this);
    }

    updatePoints() {
        var type = $(event.currentTarget).text();
        if (type === 'red') {
            teamPoints.red+=1;
        } else if (type === 'blue') {
            teamPoints.blue+=1;
        }

        $(".team_points").empty().text(
            'Red: ' + teamPoints.red+ 
            ', Blue: ' + teamPoints.blue
        );
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
