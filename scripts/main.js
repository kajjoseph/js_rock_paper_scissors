function computerPlay() {
    let choice = Math.round(Math.random() * 10) % 3;
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
function getPlayerChoice () {
    let choice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    switch (choice) {
        case 'rock':
            return 'rock';
        case 'paper':
            return 'paper';
        case 'scissors':
            return 'scissors';
        default:
            getPlayerChoice();
    }
}
function compareChoices (playerChoice, computerChoice) {
    
}