'use strict';

// document.querySelector('.message').textContent='correct Number';
// console.log(document.querySelector('.message').textContent);



// document.querySelector('.input').value = 12;

// console.log(document.querySelector('.input').value);


// document.querySelector('.score').textContent = 30;


let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;







document.querySelector('.check').addEventListener('click',function(){
  const input = Number(document.querySelector('.input').value);
  console.log(input);
  
  // document.querySelector('.number').textContent= secretNumber;




  
  if(!input){    //when no number guess
    document.querySelector(".message").textContent='🚫 No Number';
  }else if(input === secretNumber){    //when you win the game
    document.querySelector(".message").textContent='🎉 Correct Number';
    
    document.querySelector("body").style.backgroundColor = "#60b347"
    document.querySelector(".number").style.width = "16rem";
    document.querySelector(".number").textContent=secretNumber;
    if(score>highscore) {
      highscore=score;
      document.querySelector(".highscore").textContent=highscore;
    }

  }
  else if(input > secretNumber){    //when input is greater than the secret no.
    if(score>1){
      document.querySelector(".message").textContent=' 📈 Too High';
    score --;//score=score-1;
    document.querySelector(".score").textContent=score;
  }else{                             //when you loose the game
    document.querySelector(".message").textContent="💥You lost the Game!"
    document.querySelector(".score").textContent=0;
  }
    }
    
  
  else if(input < secretNumber){    //when input is lesser than the secret no.
    if(score>1){
      document.querySelector(".message ").textContent=' 📉 Too low';
    score --;//score=score-1;
    document.querySelector(".score").textContent=score;
 
    }else{                           //when you loose the game
      document.querySelector(".message").textContent=" 💥 You lost the Game!"
      document.querySelector(".score").textContent=0;
    }
    
  }


})

document.querySelector(".again").addEventListener("click",function(){
 secretNumber=Math.trunc(Math.random()*20)+1;
 score=20; 

 document.querySelector(".message").textContent=" Start guessing...";
 document.querySelector(".score").textContent=score;
 document.querySelector(".input").value=" ";
 document.querySelector(".number").textContent="?";
 document.querySelector("body").style.backgroundColor = "#222"
 document.querySelector(".number").style.width = "8rem";


})
