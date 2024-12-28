let userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options =["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game Draw.Play Again!";
    msg.style.backgroundColor ="green";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="blue";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        console.log("You Lose!");
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};

const playGame =(userChoice) =>{
    console.log("user choice =", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp Choice =", compChoice);

    if(userChoice === compChoice){
        //dreaw Game
        drawGame();
    } else {
        let userWin = true;
        if( userChoice === "rock"){
            // scissor, paper
            userWin = compChoice === "paper"? false : true;
        } else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissor"? false : true;
        } else {
            //paper, rock
            userWin = compChoice === "paper"? true: false;
        }
    showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
});