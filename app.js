let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const result = document.querySelector(".result");
const userImg = document.querySelector("#user-choice");
const compImg = document.querySelector("#comp-choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice=()=>{
    //rock , paper, scissor
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const displayRock = () =>{
    result.innerText="ROCK!!";
    userImg.setAttribute("src","./images/rock.png");
    compImg.setAttribute("src","./images/rock.png");
}

const displayPaper = () =>{
    result.innerText="PAPER!!";
    userImg.setAttribute("src","./images/paper.png");
    compImg.setAttribute("src","./images/paper.png");
}

const displayScissors = () =>{
    result.innerText="SCISSORS!!";
    userImg.setAttribute("src","./images/scissors.png");
    compImg.setAttribute("src","./images/scissors.png");
}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win");
        result.innerText = "You Win!!!";
        result.style.color = "green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("Computer Wins");
        result.innerText = "You Lose!!!";
        result.style.color = "red";
    }
}

// const animation = ()=>{
//     setTimeout(displayRock,300);
//     setTimeout(displayPaper,600);
//     setTimeout(displayScissors,900);
// }

const playGame=(userChoice)=>{
    console.log("User Choice: ",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer Choice: ",compChoice);
    // animation();
    result.innerText="Shoot!!!";
    userImg.setAttribute("src",`./images/${userChoice}.png`);
    compImg.setAttribute("src",`./images/${compChoice}.png`);
    if(userChoice === compChoice){
        result.innerText="DRAW!!";
        console.log("Draw");
        result.style.color="black";
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            // compChoice paper, scissors
            userWin = compChoice ==="scissors"; //userWin true if compChoice is scissor else false
        }
        else if(userChoice==="paper"){
            //compChoice rock, scissors
            userWin = compChoice === "rock"; //userWin true if compChoice is rock else false
        }
        else{
            // compChoice rock, paper
            userWin = compChoice === "paper"; //userWin true if compChoice is paper else false
        }
        showWinner(userWin);
    }

}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});