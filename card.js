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

    toggleStyling(){
        if ($(event.currentTarget).attr("type")==="civilian"){
            $(event.currentTarget).addClass("civilian");
        } else {
            if ($(event.currentTarget).attr("type")==="red"){
                $(event.currentTarget).addClass("red");
            } else {
                $(event.currentTarget).addClass("blue");
            }
        }
    }
}


