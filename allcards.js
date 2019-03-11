class AllCards {
    constructor() {
        this.possibleWords = [
            'CAR', 'CANDY', 'FILM', 'DAY', 'SQUARE', 'NET',
            'PLASTIC', 'KNIFE', 'KIWI', 'DINOSAUR', 'TELESCOPE', 'MOUSE',
            'WATCH', 'GHOST', 'PLAY', 'WITCH', 'TORCH',
            'SCHOOL', 'SNOW', 'BALL', 'SKY', 'ACTOR',
            'BOTTLE', 'FORCE', 'CELL'
        ];
        this.cardObject;
        this.cardArray = [];

        this.createAllCards();

        this.randomizeCards();
    }

    createAllCards() {
        this.createRedObjs();
        this.createBlueObjs();
        this.createCivilianObjs();
        this.createAssassin();
    }

    createRedObjs() {
        for (var i = 0; i < 9; i++) {
            var randomIndex = Math.floor(Math.random() * this.possibleWords.length);
            var randomWord = this.possibleWords[randomIndex];
            this.possibleWords.splice(randomIndex, 1);
            this.cardObject = new Card(randomWord, "red");
            this.cardObject.position = this.position[randomIndex];
            this.position.splice(randomIndex, 1);
            this.possibleCards[randomWord] = this.cardObject;
        }
    }

    createBlueObjs() {
        for (var i = 0; i < 8; i++) {
            var randomIndex = Math.floor(Math.random() * this.possibleWords.length);
            var randomWord = this.possibleWords[randomIndex];
            this.possibleWords.splice(randomIndex, 1);
            this.cardObject = new Card(randomWord, "blue");
            this.cardObject.position = this.position[randomIndex];
            this.position.splice(randomIndex, 1);
            this.possibleCards[randomWord] = this.cardObject;
        }
    }

    createCivilianObjs() {
        for (var i = 0; i < 7; i++) {
            var randomIndex = Math.floor(Math.random() * this.possibleWords.length);
            var randomWord = this.possibleWords[randomIndex];
            this.possibleWords.splice(randomIndex, 1);
            this.cardObject = new Card(randomWord, "civilian");
            this.cardObject.position = this.position[randomIndex];
            this.position.splice(randomIndex, 1);
            this.possibleCards[randomWord] = this.cardObject;
        }
    }

    createAssassin() {
        var randomWord = this.possibleWords[0];
        this.cardObject = new Card(randomWord, "assassin");
        // this.cardObject.position = this.position[randomIndex];
        // this.position.splice(randomIndex, 1);
        this.possibleCards[randomWord] = this.cardObject;
    }
}
