class Team {
    constructor(color, operatives) {
        this.color = color;
        this.spymaster = spymaster;
        this.ops = operatives;
        this.points = 0; // counts how many correct guesses made
    }

    checkWinCondition() {
    }

    getTeamColor() {
        return this.color;
    }

    getTeamPoints () {
        // return team's points
    }

    adjustTeamPoints() {
        this.points++;
    }
}


