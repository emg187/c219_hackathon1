class Card {

    constructor(word, type) {
        this.word = word;
        this.type = type;
        this.domElement;

        this.toggleStyling = this.toggleStyling.bind(this);
    }

    createCard(){
        this.domElement = $("<div>");
        this.domElement.text(word);
        this.domElement.addClass("guessBox");
        this.domElement.attr("type", this.type);
        return this.domElement;
    }

    toggleStyling(){
        if (this.attr("type")===game.currentTurn){
            this.addClass(turn);
        } else {
            if (game.currentTurn==="red"){
                this.addClass("blue");
            } else {
                this.addClass("red");
            }
        }
    }

}


