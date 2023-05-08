'use strict';
let randomNumber;
let highScore=Number(document.querySelector(".highscore").innerHTML);
let score=Number(document.querySelector(".score").innerHTML);
let btn=document.getElementsByClassName("btn check");
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
btn[0].addEventListener('click',(e)=>{
    e.preventDefault();
 guess=Number(document.querySelector(".guess").value);
    console.log(typeof guess);
    if(randomNumber===guess)
    {
   
     
        console.log( randomNumberGen());
        score+=2;
        document.querySelector(".score").innerHTML=score;
        highScoreGen();
        winnerStyle("green","35rem","winner");

    }
   else if(randomNumber>guess)
   {
    console.log("Guess Number is small");
    winnerStyle("white","15rem","?");
   }
   else{
    console.log("Guess Number is large");
    winnerStyle("white","15rem","?");
   }

});

