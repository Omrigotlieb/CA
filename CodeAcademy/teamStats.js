const team = {
 _players: [
 {
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
},
  {
  firstName: 'Omri',
  lastName: 'Gotlieb',
  age: 29
},
      {
  firstName: 'Shai',
  lastName: 'Cohen',
  age: 31
}
],
  _games: [{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},
          {
  opponent: 'Haifa',
  teamPoints: 22,
  opponentPoints: 20
},
          {
  opponent: 'Tel Aviv',
  teamPoints: 12,
  opponentPoints: 29
}],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age
    }
    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
        opponent,
			  teamPoints,
			  opponentPoints
    };
    this._games.push(game);
  }
}

console.log(team.players)
team.addPlayer('Yona','Levi',22);
team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
console.log(team.players)

console.log(team.games)
team.addGame('Jerusalem',15,19);
team.addGame('Eilat',10,9);
team.addGame('Kfar Saba',89,19);
console.log(team.games)
