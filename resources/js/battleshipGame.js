var battleShipGame = {};

// Array for one Playar and two Player
var playerOne = [];
var playerTwo = [];

/**
 * This function to create battleShip Board in
 * 2D arrray, initialize it to value 0
 */
function CreateBoard() {
  for (var i = 0; i <= 7; i++) {
    playerOne[i] = new Array();
    for (var j = 0; j <= 7; j++) {
      playerOne[i].push(0);
    }
  }

  return playerOne;
}

/**
 *  This function is to make selection for player.
 *  By clicking on to the position in the Board,
 *  It will mark for the ships.
 */

function PlayerSelection() {}

// Calling fucntions
CreateBoard();

console.log(playerOne);

console.log(playerOne[0][5]);
