class Gameboard {
    constructor (redOperatives, blueOperatives) {
        this.currentTurn = 'red';
        this.teamRed = new Team('red', redOperatives, 1);
        this.teamBlue = new Team('blue', blueOperatives, 1);
        this.red = 0;
        this.blue = 0;
        this.assassin = 0;
        this.allCards = {};
    }

    changeViewOfUser() {
    }

    addCard() {
        var words = ['Quan', 'Chris', 'Eric'];
        var word = null;
        var type = null;
        
        for (var i=0; i<3; i++) {
            if (this.red !== 1) {
                type = 'red';
                this.red++;
            } else if (this.blue !== 1) {
                type = 'blue';
                this.blue++;
            } else if (this.assassin !== 1) {
                type = 'assassin';
                this.assassin++;
            }

            word = words[0];
            words.shift();
            var cardObj = new Card(word, type);
            this.allCards[word] = cardObj;

            $(".boardContainer").append(cardObj.createCard());
        }
    }

    clickHandler(card) {
        card.toggleStyle();
        checkGuess(card);
    }

    checkGuess() {
        var value = $(this).text();
        game.allCards[value].toggleStyling();

        if ( game.allCards[value].type === 'assassin') {
            console.log('end game');
            // end game
        }
    }
}