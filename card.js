class Card {
    constructor(word, color, type) {
        this.word = word;
        this.color = color;
        this.type = type;
    }

    getCardColor() {
    }

    getCardType() { 
    }

    createCard() {
        // this creates the div
        // card.text(this.word) to the div, adds word to this
        // add some class that creates styling
    }

    flipCard() {
        // flips card when it is picked
    }

    clickHandler() {
        Gameboard.checkGuess();
    }
}