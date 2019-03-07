class AllCards {
    constructor(words) {
        this.possibleCards = new Array();
        this.possibleWords = words;
    }

    createAllCards() {
        this.createRedObjs();
        this.createBlueObjs();
        this.createCivilianObjs();
        this.createAssassin();
        this.assignWords();
    }

    createRedObjs() {
        for (var i=0; i<9; i++) {
            this.possibleCards.push({'type': 'red', word: null});
        }
    }

    createBlueObjs() {
        for (var i=0; i<8; i++) {
            this.possibleCards.push({'type': 'blue', word: null});
        }
    }

    createCivilianObjs() {
        for (var i=0; i<7; i++) {
            this.possibleCards.push({'type': 'civilian', word: null});
        }
    }

    createAssassin() {
        this.possibleCards.push({'type': 'assassin', word: null});
    }

    assignWords() {
        for (var i=0; i<25; i++) {
            var rand = Math.floor(Math.random()*this.possibleWords.length);
            this.possibleCards[i].word = this.possibleWords[rand];
            this.possibleWords.splice(rand,1);
        }
    }
}