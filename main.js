const options = ["rock", "paper", "scissors"];
const playerResults = document.getElementById("playerResults");
const computerResults = document.getElementById("computerResults");
const resultsDisplay = document.getElementById("resultsDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerOption){

    const computerOption = options[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerOption === computerOption){
        result = "No Winner!";
    }
    else{
        switch(playerOption){
            case "rock":
                result = (computerOption === "scissors") ? "You Win!" : "You Lose!";
                break;
                case "paper":
                    result = (computerOption === "rock") ? "You Win!" : "You Lose!";
                    break;
                    case "scissors":
                        result = (computerOption === "paper") ? "You Win!" : "You Loose!";
                        break;
        }
    }

    playerResults.textContent = `Player: ${playerOption}`;
    computerResults.textContent = `Computer: ${computerOption}`;
    resultsDisplay.textContent = result;

    resultsDisplay.classList.remove("greenText", "redText", "neutralText");

    switch(result){
        case "You Win!":
            resultsDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
            case "You Lose!":
                resultsDisplay.classList.add("redText");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                break;
            case "No Winner!":
                resultsDisplay.classList.add("neutralText");
    }
}

    