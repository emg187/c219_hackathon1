class Operatives {
    consturctor(num) {
        this.canGuess = true;
        this.numberOfGuesses = null;
        this.isWrong = null;
    }

    makeGuess(card) {
    }

    clickHandler(card) {
        checkGuess(card);
        flipCard();
    }

    checkGuess() {
        // if wrong
        //     Gameboard.currentTurn change
        // else
        //     team.points++
    }
}