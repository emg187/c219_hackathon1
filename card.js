class Card {
    constructor(word, type) {
        this.word = word;
        this.type = type;
        this.domElement;
    }

    createCard(){
        this.domElement = $("<div>");
        this.domElement.text(this.word);
        this.domElement.addClass("guessBox");
        return this.domElement;
    }

    toggleStyling(){
        if (this.type==="civilian"){
            this.domElement.addClass("civilian");
            if (game.currentTurn === 'red') {
                game.currentTurn = 'blue';
            } else {
                game.currentTurn = 'red';
            }
        } else if (this.type===game.currentTurn){
            this.domElement.addClass(game.currentTurn);
            teamPoints[game.currentTurn]++;
            console.log(teamPoints);
        } else {
            if (game.currentTurn==="red"){
                this.domElement.addClass("blue");
                teamPoints['blue']++;
                game.currentTurn = 'blue';
            } else {
                this.domElement.addClass("red");
                teamPoints['red']++;
                game.currentTurn = 'red';
            }
        }
    }

}


