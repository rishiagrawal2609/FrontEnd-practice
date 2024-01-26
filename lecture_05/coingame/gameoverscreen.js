function gameover(score){
    let root = document.getElementById("root");
    root.innerHTML = "";
    let  scoreHead = document.createElement("h1");

    scoreHead.innerHTML = "Score: "+ score;
    root.appendChild(scoreHead);

    let playAgainButton = document.createElement("button");
    playAgainButton.innerHTML = "Play Again";
    playAgainButton.id = "playagain";
    playAgainButton.style.width = "200px";
    playAgainButton.style.height = "100px"
    playAgainButton.style.backgroundColor="aquamarine";
    playAgainButton.style.borderRadius = "32px";
    playAgainButton.style.fontSize="large";
    playAgainButton.addEventListener("click",function(){
        playgame();
    });
    root.appendChild(playAgainButton);


}