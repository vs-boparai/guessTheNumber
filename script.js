'use strict';
let randomNumber= Math.floor(Math.random() * (20 - 1)) + 1;
console.log(randomNumber);
let guess;


const btn=document.getElementsByClassName("btn check");
console.log(btn);
btn[0].addEventListener('click',(e)=>{
    e.preventDefault();
 guess=Number(document.querySelector(".guess").value);
    console.log(typeof guess);
    if(randomNumber===guess)
    {
        console.log("winner");
    }
   else if(randomNumber>guess)
   {
    console.log("Guess Number is small")
   }
   else{
    console.log("Guess Number is large")
   }

});