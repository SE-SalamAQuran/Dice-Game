var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

switch(randomNumber1){
case 1: document.querySelector(".img1").setAttribute("src","./images/dice1.png");
break;
case 2: document.querySelector(".img1").setAttribute("src","./images/dice2.png");
break;
case 3: document.querySelector(".img1").setAttribute("src","./images/dice3.png");
break;
case 4: document.querySelector(".img1").setAttribute("src","./images/dice4.png");
break;
case 5: document.querySelector(".img1").setAttribute("src","./images/dice5.png");
break;
case 6: document.querySelector(".img1").setAttribute("src","./images/dice6.png");
break;
default: document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}

switch(randomNumber2){
    case 1: document.querySelector(".img2").setAttribute("src","./images/dice1.png");
    break;
    case 2: document.querySelector(".img2").setAttribute("src","./images/dice2.png");
    break;
    case 3: document.querySelector(".img2").setAttribute("src","./images/dice3.png");
    break;
    case 4: document.querySelector(".img2").setAttribute("src","./images/dice4.png");
    break;
    case 5: document.querySelector(".img2").setAttribute("src","./images/dice5.png");
    break;
    case 6: document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    break;
    default: document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    }
    
  
      if(randomNumber1 > randomNumber2){
          document.querySelector("h1").innerHTML = '<i class="fas fa-flag flag"></i> <h1>Player 1 wins!</h1>';
      }else if(randomNumber1 < randomNumber2){
          document.querySelector("h1").innerHTML = '<h1>Player 2 wins!</h1> <i class="fas fa-flag"></i>';
      }else{
        document.querySelector("h1").innerHTML = '<i class="fas fa-flag flag"></i> <h1>It is a draw!</h1> <i class="fas fa-flag"></i>';
      }
  