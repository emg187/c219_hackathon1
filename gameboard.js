class Gameboard {
    constuctor() {
        this.currentTurn = true;
        this.teamRed = new Team();
        this.teamBlue = new Team();
        this.cards = [];
    }

    changeViewOfUser() {
    }

    addCard() {
        // if red !=0
        // red = 9;
        // blue = 9;
        // ranbdom = 
        // red--

        red = 0;
        blue = 0;
        assassin = 0;
        // create 25 cards using for loop using card class
        for (i=0; i<25; i++) {
            if (red !== 1) {
                // create a red card
                color = red;
                type = redTeam;
                red++;
            } else if (blue !== 1) {
                color = blue;
                type = blueTeam;
                // create blue card
                blue++;
            } else {
                color = white;
                type = assassin;
                assassin++;
            }
            var card = new Card(word, color, type);
            

            // append to body of game
        }

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