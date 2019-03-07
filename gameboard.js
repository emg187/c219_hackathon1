class Gameboard {
    constructor (redOperatives, blueOperatives) {
        this.currentTurn = 'red';
        this.teamRed = new Team('red', redOperatives, 1);
        this.teamBlue = new Team('blue', blueOperatives, 1);
        this.allCards = {};
    }

    changeViewOfUser() {
    }

    addCard(cards) {
        for (var i=0; i<25; i++) {
            var rand = Math.floor(Math.random()*cards.length);
            var key = cards[rand].word;
            var value = cards[rand].type;
            var cardObj = new Card(key, value);
            this.allCards[key] = cardObj;

            $(".gameContainer").append(cardObj.createCard());

            cards.splice(rand,1);
        }
    }

    clickHandler(card) {
        card.toggleStyle();
        checkGuess(card);
    }

    checkGuess() {
        var value = $(this).text();

        if (game.allCards[value].type === 'assassin') {
            console.log('end game');
            game.handleAssassin();

            game.checkWhoWins();
        } else {
            game.allCards[value].toggleStyling();
        }

        game.allCards[value].status = true;

    }


    handleAssassin() {
        $(".guessBox").off('click');
        $(event.currentTarget).addClass('assassin');
    }

    checkWhoWins() {
        var winner = null;

        if (game.currentTurn === 'blue') {
            winner = 'red';
        } else {
            winner = 'blue';
        }

        $(".winner").text(winner + ' wins!');
    }
}

