class Gameboard {
    constructor(cardsObject, points, currentTurn) {
        this.cards = cardsObject.possibleCards;
        this.gamePoints = points;
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

        // while (this.position<25) {
        //     for (var key in this.cards) {
        //         console.log(key);
        //         if (this.cards.position === this.position) {
        //             var randomKey = Math.floor(Math.random() * cardKeys.length);
        //             var currentCard = this.cards[cardKeys[randomKey]];
        //             this.cards[cardKeys[randomKey]].position = this.position;
        //             var domElement = currentCard.createCard();
        //             $(".game_container").append(domElement);
        //             cardKeys.splice(randomKey, 1);
        //             this.position++;
        //             break;
        //         }
        //     }
        // }
    }

    checkGuess() {
        var cardText = $(event.target).text();
        var cardObj = this.cards[cardText];
        var value = $(event.target).text();
        var type = deck.possibleCards[value].type;

        cardObj.wasClicked = true;
        deck.possibleCards[value].wasClicked = true;
        game.cards = deck.possibleCards;

        this.updatePoints(type);
        this.updateTurn(type);

        if (type === 'assassin') {
            game.handleAssassin();
        }

        codeNamesDb.saveState(game);
    }

    updatePoints(type) {
        if (type === 'red') {
            teamPoints.red+=1;
        } else if (type === 'blue') {
            teamPoints.blue+=1;
        }

        $(".team_points").empty();

        $(".team_points").text('Red: '+teamPoints.red +', Blue: '+teamPoints.blue);
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
