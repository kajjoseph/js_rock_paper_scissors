let buttons = document.querySelectorAll('.play-buttons');
buttons.forEach(button => button.addEventListener('click', playRound));
let output = document.querySelector('.output')
function comparePlays (cpu, human) {
    if (cpu == human) {
        return 'tie';
    } else if (human == 'rock') {
        if (cpu == 'paper') {
            return 'cpu';
        } else if (cpu == 'scissors') {
            return 'human';
        }
    } else if (human == 'paper') {
        if (cpu == 'rock') {
            return 'human';
        } else if (cpu == 'scissors') {
            return 'cpu';
        }
    } else if (human == 'scissors') {
        if (cpu == 'rock') {
            return 'cpu';
        } else if (cpu == 'paper') {
            return 'human';
        }
    }

}
function playRound (e) {
    let playerChoice = e.target.id;
    let choices = {0: 'rock', 1: 'paper', 2: 'scissors'};
    let computerChoice = choices[Math.floor(Math.random()*3)];
    let para = document.createElement('p');
    let newBreak = document.createElement('br');
    let cpuPlay = document.createTextNode(`CPU: ${computerChoice}`);
    let humanPlay = document.createTextNode(`Player: ${playerChoice}`);
    let decision = comparePlays(computerChoice, playerChoice);
    let decisionText = document.createTextNode(`Winner: ${decision}`)
    para.appendChild(cpuPlay);
    para.appendChild(newBreak);
    para.appendChild(humanPlay);
    para.appendChild(document.createElement('br'));
    para.appendChild(decisionText);
    output.appendChild(para);

}