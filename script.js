var userChoice = prompt("Please choose 'R' 'P' or 'S'");
var compChoice = compRand()
var compWins = 0;
var userWins = 0;
var draws = 0;

function compRand() {
    switch(Math.floor(Math.random()*3)) {
        case 0:
            return 'R';
            break;
        case 1:
            return 'P';
            break;
        case 2:
            return 'S';
            break;
    };
}
function determineWinner () {
    if (userChoice === compChoice) {
        result = "DRAW!";
        draws ++;
    } else if ( (userChoice === "R" && compChoice === "P") || (userchoice === "P" && compChoice === "S") || (userChoice === "S" && compChoice === "R")){
        result = "You lose!";
        compWins ++;
    } else {
        result = "You Win!";
        userWins ++;
    }
    window.alert
}
function playAgain() {
    userChoice = prompt("Please choose 'R' 'P' or 'S'");
    compRand();
    determineWinner();
}
window.alert ("The score is:\n" + "User wins: "+ userWins + "\nComputer wins: " + compWins + "\nDraws: " + draws);
window.confirm("Play again?")
//user input "R" "P" "S"
//computer rand "R" "P" "S"
