
//math.floor rounds down. the array length is 3, so it goes to right under 3 (2.99). The math random picks between 0 and 1, meaning the 
//range of numbers is from 0 to 2 (1 in array is 0). if 0 is picked, it chooses rock, 1 is paper, 2 is scissors
    //using the brackets after the choice, is the number from the array that is chosen
    //the order matters, you gotta use the variable after its defined
    let humanScore = 0;
    let computerScore = 0;
    let resetButton = document.getElementById("reset");
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * choices.length);
        return choices[random];
    }
    
    function determineWinner(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) return "draw";
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            return "human";
        }
        return "computer";
    }
    
    function updateScores(winner) {
        if (winner === "human") humanScore++;
        if (winner === "computer") computerScore++;
    }
    
    function checkGameEnd() {
        if (humanScore >= 5) {
            document.getElementById("winner").textContent = "You win the game!";
            disableButtons();
        } else if (computerScore >= 5) {
            document.getElementById("winner").textContent = "Computer wins the game!";
            disableButtons();
        }
    }
    
    function disableButtons() {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("reset").style.display = "block";
    }
    
    function playGame(humanChoice) {
        let computerChoice = getComputerChoice();
        document.getElementById("computer-choice").innerHTML = "Computer's choice: " + computerChoice;
        const winner = determineWinner(humanChoice, computerChoice);
        updateScores(winner);
        document.getElementById("human-score").innerHTML = "Your score: "+humanScore;
        document.getElementById("computer-score").innerHTML = "Computer's score: "+computerScore;
        checkGameEnd();
    }
    let rock= document.getElementById("rock");
    let paper= document.getElementById("paper");
    let scissors= document.getElementById("scissors");

    
    document.getElementById("rock").addEventListener("click", ()=> playGame("rock"));
    document.getElementById("paper").addEventListener("click", ()=> playGame("paper"));
    document.getElementById("scissors").addEventListener("click", ()=> playGame("scissors"));
   resetButton.addEventListener("click", function(){
    location.reload(true);
   })
