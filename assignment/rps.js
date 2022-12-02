function rps() {
    function determineComputerOption(num) {
        if (num <= .033) return "rock";
        else if (num <= 0.66) return "paper";
        else 
        return "scissor";
    }

    const userOption = prompt("Choose rock, paper, or scissor").toLowerCase();
    const computerOption = determineComputerOption(Math.random());
    const answers = ["rock", "paper", "scissor"];

    if (!userOption || answers.indexOf(userOption) === -1) {
    alert("Please choose a valid option");
    return;
    }

    if (userOption === computerOption) {
    alert("It's a Tie!");
    return;
    }

    if (userOption === "rock" && computerOption === "paper") {
    alert("You lose, computer chose " + computerOption);
    return
    }

    if (userOption === "paper" && computerOption === "scissor") {
    alert("You lose, computer chose " + computerOption);
    return;
        }

    if (userOption === "scissor" && computerOption === "rock") {
    alert("You lose, computer chose" + computerOption);
    return;

    }   
        alert("You win! Computer chose " + computerOption);
}

rps()