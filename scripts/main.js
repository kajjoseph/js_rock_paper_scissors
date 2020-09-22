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
    // TODO: Add more robust error checking; currently invalid input corrupts future data
    if (playerChoice == 'rock') {
        switch (computerChoice) {
            case 'rock':
                return 'tie';
            case 'paper':
                return 'cpu';
            case 'scissors':
                return 'player';
        }
    } else if (playerChoice == 'paper') {
        switch (computerChoice) {
            case 'rock':
                return 'player';
            case 'paper':
                return 'tie';
            case 'scissors':
                return 'cpu';
        }
    } else if (playerChoice == 'scissors') {
        switch (computerChoice) {
            case 'rock':
                return 'cpu';
            case 'paper':
                return 'player';
            case 'scissors':
                return 'tie';
        }
    }
}

let player_score = 0;
let cpu_score = 0;
for (let round = 0; round < 5; round++) {
    let cpu = computerPlay();
    let player = getPlayerChoice();
    let cur_round = compareChoices(player, cpu);
    console.log(`Round ${round+1}`)
    console.log(`CPU choice: ${cpu}`)
    console.log(`Player choice: ${player}`)
    switch (cur_round) {
        case 'player':
            player_score += 1;
            break;
        case 'cpu':
            cpu_score += 1;
            break;
        case 'tie':
            break;
    }
    console.log(`Winner: ${cur_round}\n\n`)
}

console.log(`Player score: ${player_score}`)
console.log(`CPU score: ${cpu_score}`)
var winner = (player_score > cpu_score) ? "Player":"CPU"
if (cpu_score == player_score) {
    console.log('Tie!');
} else {
    console.log(`${winner} wins!`);
}