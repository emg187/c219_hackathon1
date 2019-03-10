class Card {
    constructor(word, type) {
        this.word = word;
        this.type = type;
        this.wasClicked = false;
    }

    createCard(){
        var domElement = $("<div>");
        domElement.text(this.word);

        var classString = "guess_box " +this.word;
        domElement.addClass(classString);
        return domElement;
    }

    toggleStyling(value){
        if (allCards.possibleCards[value].type === "civilian"){
            $(event.currentTarget).addClass("civilian");
        } else if (allCards.possibleCards[value].type === "assassin") {
            $(event.currentTarget).addClass("assassin");
        } else {
            if (allCards.possibleCards[value].type==="red"){
                $(event.currentTarget).addClass("red");
            } else {
                $(event.currentTarget).addClass("blue");
            }
        }
    }
}
