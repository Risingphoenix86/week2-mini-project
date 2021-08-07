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
function determineWinner {
    if (userChoice === compChoice) {
        console.log("DRAW!")
        draws ++;
    } else if ( userChoice === "R" && compChoice === "P"){
        console.log("You lose!");
        compWins ++;
    } else {
        console.log("You Win!");
        userWins ++;
    }
}
window.alert ("The score is:" + br + "User wins: "+ userWins + br + "Computer wins: " + compWins + br + "Draws: " + draws);
//user input "R" "P" "S"
//computer rand "R" "P" "S"
