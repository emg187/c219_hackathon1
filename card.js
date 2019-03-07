class Card {

    constructor(word, type) {
        this.word = word;
        this.type = type;
        this.domElement;

        // this.toggleStyling = this.toggleStyling.bind(this);
    }

    createCard(){
        this.domElement = $("<div>");
        this.domElement.text(this.word);
        this.domElement.addClass("guessBox");
        this.domElement.attr("type", this.type);
        return this.domElement;
    }
}


