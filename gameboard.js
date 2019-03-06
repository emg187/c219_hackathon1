class Gameboard {
    constuctor() {
        this.currentTurn = true;
        this.teamRed = new Team();
        this.teamBlue = new Team();
        this.red = 0;
        this.blue = 0;
        this.assassin = 0;
        this.cards = [];
    }

    changeViewOfUser() {
    }

    addCard() {
        var words = ['Quan', 'Chris', 'Eric']
        var word = null;
        var type = null;
        // create 25 cards using for loop using card class
        for (i=0; i<3; i++) {
            if (this.red !== 1) {
                type = 'redTeam';
                red++;
            } else if (this.blue !== 1) {
                type = 'blueTeam';
                blue++;
            } else if (this.assassin !== 1) {
                type = 'assassin';
                assassin++;
            }

            word = word[0];
            words.shift();
            var card = new Card(word, type);
            this.card.push(card);

            // append to body of game
            $(".boardContainer").append(card.createCard());
        }

        // call that specific function to updateFirebase();
    }

    clickHandler(card) {
        checkGuess(card);
    }

    checkGuess() {
        // if wrong
        //     Gameboard.currentTurn change
        // else if right
        //     team.points++
        // else if assassin
        //     game over
    }
}