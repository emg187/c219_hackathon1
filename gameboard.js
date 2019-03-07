class Gameboard {
    constructor (redOperatives, blueOperatives) {
        this.currentTurn = 'red';
        this.teamRed = new Team('red', redOperatives, 1);
        this.teamBlue = new Team('blue', blueOperatives, 1);
        this.red = 0;
        this.blue = 0;
        this.assassin = 0;
        this.civilian = 0;
        this.allCards = {};
    }

    changeViewOfUser() {
    }

    addCard() {
        var words = [
            'Quan', 'Chris', 'Eric', 'Kenneth', 'Michelle', 'David',
            'Jay', 'Gormley', 'Jimmy', 'Alice', 'Westley', 'Joe',
            'Johnny', 'Jennifer Lai', 'Andrew', 'Jaimie', 'Jason',
            'Jun', 'Caroline', 'Jennifer', 'Vivian', 'Kylier', 
            'Andy', 'Dan', 'Cody'
        ];
        var word = null;
        var type = null;
        
        for (var i=0; i<25; i++) {
            if (this.red !== 9) {
                type = 'red';
                this.red++;
            } else if (this.blue !== 8) {
                type = 'blue';
                this.blue++;
            } else if (this.civilian !== 7) {
                type = 'civilian';
                this.civilian++;
            } else if (this.assassin !== 1) {
                type = 'assassin';
                this.assassin++;
            }

            word = words[0];
            words.shift();
            var cardObj = new Card(word, type);
            this.allCards[word] = cardObj;

            $(".gameContainer").append(cardObj.createCard());
        }
    }

    clickHandler(card) {
        card.toggleStyle();
        checkGuess(card);
    }

    checkGuess() {
        var value = $(this).text();

        if ( game.allCards[value].type === 'assassin') {
            console.log('end game');
            game.handleAssassin();
            game.checkWhoWins();
        } else {
            game.allCards[value].toggleStyling();
        }
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