////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////



function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */


    /*
    var bothMoves = [];
    bothMoves.push(playerMove, computerMove);

    switch (bothMoves.join(",")){
        case "rock,rock":
            winner = "tie";
            break;
        case "paper,paper":
            winner = "tie";
            break;
        case "scissors,scissors":
            winner = "tie";
            break;
        case "paper,rock":
            winner = "player";
            break;
        case "rock,scissors":
            winner = "player";
            break;
        case "scissors,paper":
            winner = "player";
            break;
        case "rock,paper":
            winner ="computer";
            break;
        case "scissors,rock":
            winner ="computer";
            break;
        case "paper,scissors":
            winner ="computer";
            break;
        default:
            winner = "error!!!, enter rock,paper,scissors";
    } */  

    if ( (playerMove === "rock") && (computerMove === "rock") ) {
        winner = "tie";
    } else if ( (playerMove === "paper") && (computerMove === "paper") ) {
        winner = "tie";
    } else if ( (playerMove === "scissors") && (computerMove === "scissors") ) {
        winner = "tie";
    } else if ( (playerMove === "paper") && (computerMove === "rock") ) {
        winner = "player";
    } else if ( (playerMove === "rock") && (computerMove === "scissors") ) {
        winner = "player";
    } else if ( (playerMove === "scissors") && (computerMove === "paper") ) {
        winner = "paper";
    } else if ( (playerMove=== "scissors") && (computerMove === "rock") ) {
        winner = "computer";
    } else if ( (playerMove === "rock") && (computerMove === "paper") ) {
        winner = "computer";
    } else if ( (playerMove === "paper") && (computerMove === "scissors") ) {
        winner = "computer";
    } else {
        winner = "error wrong input";
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CoDE HERE */
    var playerMove,
        computerMove,
        counter = 1,
        ties = 0;

    function statLine(){
        console.log("");
        console.log("Game Stats");
        console.log("Player Wins: " + playerWins +
                    "  " + "Computer Wins: "  +
                    computerWins + "  " + "Ties: " + ties);
        console.log("");
    }

    function gameRound() { 
        console.log("");
        console.log("Round: " + counter);
        console.log("Player Move: " + playerMove +
                    "  |  Computer Move: " + computerMove);
    }

    for (counter; !(playerWins === 5 || computerWins === 5); counter++){
        playerMove = getPlayerMove(playerMove);
        computerMove = getComputerMove(computerMove);

        gameRound();

        switch (getWinner(playerMove, computerMove)){
            case "tie":
                ties += 1;
                statLine();
                playerMove = null;
                computerMove = null;
                break;
            case "player":
                playerWins +=1;
                statLine();
                playerMove = null;
                computerMove = null;
                break;
            case "computer":
                computerWins +=1;
                statLine();
                playerMove = null;
                computerMove = null;
                break;
            default:
                console.log("error");
                console.log("");
                playerMove = null;
                computerMove = null;

        }



    }
    

    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CoDE HERE */
    var playerMove,
        computerMove,
        counter = 1,
        ties = 0;

    function statLine(){
        console.log("");
        console.log("Game Stats");
        console.log("Player Wins: " + playerWins +
                    "  " + "Computer Wins: "  +
                    computerWins + "  " + "Ties: " + ties);
        console.log("");
    }

    function gameRound() { 
        console.log("");
        console.log("Round: " + counter);
        console.log("Player Move: " + playerMove +
                    "  |  Computer Move: " + computerMove);
    }

    for (counter; !(playerWins === x || computerWins === x); counter++){
        playerMove = getPlayerMove(playerMove);
        computerMove = getComputerMove(computerMove);

        gameRound();

        switch (getWinner(playerMove, computerMove)){
            case "tie":
                ties += 1;
                statLine();
                playerMove = null;
                computerMove = null;
                break;
            case "player":
                playerWins +=1;
                statLine();
                playerMove = null;
                computerMove = null;
                break;
            case "computer":
                computerWins +=1;
                statLine();
                playerMove = null;
                computerMove = null;
                break;
            default:
                console.log("error");
                console.log("");
                playerMove = null;
                computerMove = null;

        }



    }
    

    return [playerWins, computerWins];
}















