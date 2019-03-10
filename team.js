class Team {
    // constructor(color, operatives) {
    //     this.color = color;
    //     this.spymaster = spymaster;
    //     this.ops = operatives;
    //     this.points = 0; // counts how many correct guesses made
    // }

    constructor(color, operatives, winCondition) { //winCondition is a number, either 8 or 9
        this.color = color;
        this.players = operatives; //operatives is an object of Player objects, with keys of player names
        this.points = 0; // counts how many correct guesses made
        this.win = winCondition;
        var randomPlayer = Math.floor(Math.random() * this.players.length);
        this.spymaster = this.players[randomPlayer];
    }

    checkWinCondition() {
    }

    getTeamColor() {
        return this.color;
    }

    getTeamPoints() {
        // return team's points

    }

    adjustTeamPoints() {
        this.points++;
    }

    checkWinCondition() {
        if (this.points === this.win) {
            //this team wins
        }
    }
}

