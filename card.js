class Card {
    constructor(word, type) {
        this.word = word;
        this.type = type;
        this.wasClicked = false;
    }

    createCard() {
        var domElement = $("<div>");
        domElement.text(this.word);

        var classString = "guess_box " + this.word;
        domElement.addClass(classString);
        return domElement;
    }

    toggleStyling(cardIndex) {
        if (game.appendedCards[cardIndex].type === "civilian") {
            $(event.currentTarget).addClass("civilian");
        } else if (game.appendedCards[cardIndex].type === "assassin") {
            $(event.currentTarget).addClass("assassin");
        } else {
            if (game.appendedCards[cardIndex].type === "red") {
                $(event.currentTarget).addClass("red");
            } else {
                $(event.currentTarget).addClass("blue");
            }
        }
    }
}
