
const options=["rock","paper","scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)];
    //console.log(choice);
    return choice ;
}

function getWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "tie";

    }else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")){

                    return "player";
            }else{
                return "computer";
            }
}

function playRound(playerSelection, computerSelection){
    const result = getWinner(playerSelection, computerSelection);
    if(result == "tie"){
        return "Its a Tie"
    }else if(result == "player"){
        return `You won! ${playerSelection} beats ${computerSelection}`
    }else {
        return `You lost! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt( "Rock Paper Scissors");
        if(choice == null){
            alert("Please enter rock, paper or scissors");
            //continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}


function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcomee")
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice(); 
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log("____________________________");
        //const playerSelection = "rock";// we need users input 
        // const computerSelection = getComputerChoice();
        // return playRound(playerSelection, computerSelection);
        if(getWinner(playerSelection,computerSelection) == "player"){
            scorePlayer++;
        
    }else if(getWinner(playerSelection,computerSelection) == "computer") {
        scoreComputer++;
    }
        
    
}
console.log("Game Over");
if(scorePlayer > scoreComputer){
    console.log(`Player is the Winner!${scorePlayer} , ${scoreComputer}`);
}else if(scorePlayer < scoreComputer){
    console.log(`Computer is the Winner!${scoreComputer} , ${scorePlayer}`);
}else {
    console.log("We have a tie!");
}
}


game()

//TO Test 
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection,computerSelection));