class Card {

    constructor(word, type) {
        this.word = word;
        this.type = type;
        this.domElement;
    }

    createCard(){
        this.domElement = $("<div>");
        this.domElement.text(word);
        this.domElement.addClass("guessBox");
        this.domElement.attr("type", this.type);
        return this.domElement;
    }

    toggleStyling(){
        if (this.type==="civilian"){
            this.domElement.addClass("civilian");    
        } else if (this.type===game.currentTurn){
            this.addClass(game.currentTurn);
        } else {
            if (game.currentTurn==="red"){
                this.domElement.addClass("blue");
            } else {
                this.domElement.addClass("red");
            }
        }
    }

}


