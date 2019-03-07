class Gameboard {
    constructor (redOperatives, blueOperatives) {
        this.currentTurn = 'red';
        this.teamRed = new Team('red', redOperatives, 1);
        this.teamBlue = new Team('blue', blueOperatives, 1);
        this.cardType = [
            {red: 9},
            {blue: 8},
            {civilian: 7},
            {assassin: 1}
        ]
        // this.red = 0;
        // this.blue = 0;
        // this.assassin = 0;
        // this.civilian = 0;
        this.allCards = {};
    }

    changeViewOfUser() {
    }

    addCard() {
        var words = [
            'Quan', 'Chris', 'Eric', 'Kenneth', 'Michelle', 'David',
            'Jay', 'Gormley', 'Jimmy', 'Alice', 'Westley', 'Joe',
            'Johnny', 'Jennifer Lai', 'Andrew', 'Jaimie', 'Jason',
            'Jun', 'Caroline', 'Jennifer', 'Vivian', 'Kylie', 
            'Andy', 'Dan', 'Cody'
        ];
        var word = null;
        var type = null;
        
        var typeAvailable = null;

        for (var i=0, check=true; i<25; i++, check=true) {
            while (check === true) {
                var rand = Math.floor(Math.random()*4);

                if (rand === 0 && this.cardType[0].red !== 0) {
                    type = 'red';
                    this.red--;
                    check = false;
                } else if (rand === 1 && this.cardType[1].blue !== 0) {
                    type = 'blue';
                    this.blue--;
                    check = false;
                } else if (rand === 2 && this.cardType[2].civilian !== 0) {
                    type = 'civilian';
                    this.civilian--;
                    check = false;
                } else if (rand === 3 && this.cardType[3].assassin !== 0) {
                    type = 'assassin';
                    this.assassin--;
                    check = false;
                }

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