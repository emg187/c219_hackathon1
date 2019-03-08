class Card {
    constructor(word, type) {
        this.word = word;
        this.type = type;
        this.status = false;
    }

    createCard(){
        var domElement = $("<div>");
        domElement.text(this.word);
        domElement.addClass("guessBox");
        return domElement;
    }

    toggleStyling(value){
        var ref = value;
        if (allCards.possibleCards[ref].type==="civilian"){
            $(event.currentTarget).addClass("civilian");
        } else {
            if (allCards.possibleCards[ref].type==="red"){
                $(event.currentTarget).addClass("red");
            } else {
                $(event.currentTarget).addClass("blue");
            }
        }
    }
}


