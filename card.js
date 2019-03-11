class Card {
    constructor(word, type) {
        this.word = word;
        this.type = type;
        this.wasClicked = false;
        this.position = null;
    }

    createCard() {
        var domElement = $("<div>");
        domElement.text(this.word);

        var classString = "guess_box " + this.word;
        domElement.addClass(classString);
        return domElement;
    }

    toggleStyling(value) {
        if (deck.possibleCards[value].type === "civilian") {
            $(event.target).addClass("civilian");
        } else if (deck.possibleCards[value].type === "assassin") {
            $(event.target).addClass("assassin");
        } else {
            if (deck.possibleCards[value].type === "red") {
                $(event.target).addClass("red");
            } else {
                $(event.target).addClass("blue");
            }
        }
    }
}
