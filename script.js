'use strict';
let randomNumber;
let highScore=Number(document.querySelector(".highscore").innerHTML);
let score=Number(document.querySelector(".score").innerHTML);
let btn=document.getElementsByClassName("btn check");
let message=document.getElementsByClassName("message")[0];
let btn_again=document.getElementsByClassName("btn again")[0];
let guess;
let win= 'Winner';
let winner=document.getElementById("n");

const randomNumberGen=()=>{
    randomNumber=  Math.floor(Math.random() * (20 - 1)) + 1;
    return randomNumber;
}

const highScoreGen=()=>{
    highScore = highScore<score ? score : highScore;
    document.querySelector('.highscore').innerHTML=highScore;
}

const winnerStyle=(color,size,na)=>
{
    winner.style.backgroundColor=color;
    winner.style.width=size;
    winner.textContent=na;
}

randomNumberGen();
console.log(randomNumber);

//guess button
btn[0].addEventListener('click',(e)=>{
    e.preventDefault();
 guess=Number(document.querySelector(".guess").value);
    console.log(typeof guess);
    if(randomNumber===guess)
    {
   
     
        console.log( randomNumberGen());
        score+=2;
        document.querySelector( ".score").innerHTML=score;
        highScoreGen();
        winnerStyle("green","35rem","winner");

    }
   else if(randomNumber>guess)
   { 
    message.innerHTML="Guess Number is small";
    winnerStyle("white","15rem","?");
    score-=1;
    document.querySelector( ".score").innerHTML=score;
    
   }
   else{
    message.innerHTML="Guess Number is larger";
    winnerStyle("white","15rem","?");
    score-=1;
    document.querySelector( ".score").innerHTML=score;
   }

});

//again button function
btn_again.addEventListener("click",()=>{
    score=20;
    document.querySelector( ".score").innerHTML=score;
    highScore=0;
    document.querySelector(".highscore").innerHTML=highScore;
    message.innerHTML="Game reset start guessing";
    randomNumberGen();

})

