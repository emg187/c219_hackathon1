class Card {
    constructor(word, type) {
        this.word = word;
        this.type = type;
    }

    createCard(){
        var domElement = $("<div>");
        domElement.text(this.word);
        domElement.addClass("guessBox");
        domElement.attr("type", this.type);
        return domElement;
    }

    toggleStyling(){
        if ($(this).attr("type")==="civilian"){
            $(event.currentTarget).addClass("civilian");
        } else {
            if ($(this).attr("type")==="red"){
                $(event.currentTarget).addClass("red");
            } else {
                $(event.currentTarget).addClass("blue");
            }
        }
    }
}


