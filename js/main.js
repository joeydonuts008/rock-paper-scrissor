document.addEventListener("DOMContentLoaded", () => {
    const choices = ["rock", "paper", "scissors"];
    const playerChoiceDiv = document.getElementById("playerChoice");
    const computerChoiceDiv = document.getElementById("computerChoice");
    const resultDiv = document.getElementById("result");

    const buttons = document.querySelectorAll(".choice");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const playerChoice = e.target.id;
            const computerChoice = getComputerChoice();
            const result = determineWinner(playerChoice, computerChoice);

            playerChoiceDiv.textContent = `You chose: ${playerChoice}`;
            computerChoiceDiv.textContent = `Computer is thinking...`;
            resultDiv.textContent = '';

            // Start with a slight delay before revealing the computer's choice
            setTimeout(() => {
                computerChoiceDiv.textContent = `Computer chose: ${computerChoice}`;
                resultDiv.textContent = result;
                animateResults();
            }, 1000);

            animateResults();
        });
    });

    // Randomly selects the computer's choice
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    // Determines the winner between player and computer
    function determineWinner(player, computer) {
        if (player === computer) {
            return "It's a tie!";
        }

        if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
        ) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }

    // Animate the results by fading them in
    function animateResults() {
        playerChoiceDiv.classList.add("fade");
        computerChoiceDiv.classList.add("fade");
        resultDiv.classList.add("fade");
    }
});
