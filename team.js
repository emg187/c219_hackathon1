class Team {
    constructor(spymaster, operatives, color) {
        this.color = color;
        this.spymaster = spymaster;
        this.ops = operatives;
        this.points = 0; // counts how many operatives found
    }

    checkWinCondition() {
    }

    getTeamColor() {
        return this.color;
    }

    getTeamPoints () {
        // return team's points
    }

    setTeamPoints() {
        // changes team's points
    }
}