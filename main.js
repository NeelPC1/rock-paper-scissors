
//math.floor rounds down. the array length is 3, so it goes to right under 3 (2.99). The math random picks between 0 and 1, meaning the 
//range of numbers is from 0 to 2 (1 in array is 0). if 0 is picked, it chooses rock, 1 is paper, 2 is scissors
    //using the brackets after the choice, is the number from the array that is chosen
    //the order matters, you gotta use the variable after its defined
    function getComputerChoice (){
        const choice = ["rock", "paper", "scissors"]; 
        const random = Math.floor(Math.random() * choice.length);
        return choice[random];
    }
    
    var humanScore = 0;
    var computerScore = 0;
    
    function getHumanChoice(){
        let hchoice = prompt("Rock, Paper, or Scissors?");
        if (!hchoice) return null;
        return hchoice.toLowerCase();
    }
    
    while(humanScore<5 & computerScore<5) {let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log("The computer chooses " + computerChoice + ".");
        console.log("You chose " + humanChoice + ".");
    
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");

        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log("You win!");
            humanScore++;
        } else {
            console.log("Computer wins!");
            computerScore++;
        }
        console.log("Computer Score:" + computerScore);
        console.log("Your score:" + humanScore);

    
    
    }

    if (computerScore==5){
        console.log("Sorry, you lose!");
    }

    if (humanScore==5){
        console.log("Congrats, you win!!!");
    }
   