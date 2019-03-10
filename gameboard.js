class Gameboard {
    constructor () {
        this.currentTurn = 'red'  ;
        // this.teamRed = new Team();
        // this.teamBlue = new Team();
        this.red = 0;
        this.blue = 0;
        this.assassin = 0;
    }

    changeViewOfUser() {
    }

    addCard() {
        var words = ['Quan', 'Chris', 'Eric'];
        var word = null;
        var type = null;
        console.log(this.currentTurn);
        // create 25 cards using for loop using card class
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
            var cardDiv = new Card(word, type).createCard();

            // append to body of game
            $(".boardContainer").append(cardDiv);
        }

        // this.cards = card;
        // call that specific function to updateFirebase();
    }

    clickHandler(card) {
        card.toggleStyle();
        checkGuess(card);
    }

    checkGuess() {
        debugger;
        var key = $(this).text();
        game.allCards.key.toggleStyling();
    }
}