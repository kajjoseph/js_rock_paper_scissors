function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
function compareChoices (playerChoice, computerChoice) {
    // TODO: Devise programmatic method of camparing choices;
    // TODO: Add more robust error checking; currently invalid input corrupts future data;
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
