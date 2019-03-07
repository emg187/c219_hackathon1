class AllCards {
    constructor(words) {
        this.possibleCards = {};
        this.possibleWords = words;
        this.cardObject;
    }

    createAllCards() {
        this.createRedObjs();
        this.createBlueObjs();
        this.createCivilianObjs();
        this.createAssassin();
    }
    
    createRedObjs() {
        for (var i=0; i<9; i++) {
            var randomIndex = Math.floor(Math.random()*this.possibleWords.length);
            var randomWord = this.possibleWords[randomIndex];
            this.possibleWords.splice(randomIndex, 1);
            this.cardObject = new Card(randomWord, "red");
            this.possibleCards[randomWord] = this.cardObject;
        }
    }

    createBlueObjs() {
        for (var i=0; i<8; i++) {
            var randomIndex = Math.floor(Math.random()*this.possibleWords.length);
            var randomWord = this.possibleWords[randomIndex];
            this.possibleWords.splice(randomIndex, 1);
            this.cardObject = new Card(randomWord, "blue");
            this.possibleCards[randomWord] = this.cardObject;
        }
    }

    createCivilianObjs() {
        for (var i=0; i<7; i++) {
            var randomIndex = Math.floor(Math.random()*this.possibleWords.length);
            var randomWord = this.possibleWords[randomIndex];
            this.possibleWords.splice(randomIndex, 1);
            this.cardObject = new Card(randomWord, "civilian");
            this.possibleCards[randomWord] = this.cardObject;
        }
    }

    createAssassin() {
            var randomIndex = Math.floor(Math.random()*this.possibleWords.length);
            var randomWord = this.possibleWords[randomIndex];
            this.possibleWords.splice(randomIndex, 1);
            this.cardObject = new Card(randomWord, "assassin");
            this.possibleCards[randomWord] = this.cardObject;
    }
}