let randomNumberOne = Math.floor(Math.random()*6)+1;
let randomNumberTwo = Math.floor(Math.random()*6)+1;


let diceOneNumber = "/dice" + randomNumberOne + ".svg";
let diceTwoNumber = "/dice" + randomNumberTwo + ".svg";


let randomDiceOnePath ="./src" + diceOneNumber;

let randomDicetwoPath ="./src" + diceTwoNumber;

let dice1= document.querySelector(".dice1");

dice1.setAttribute("src", randomDiceOnePath);

let dice2= document.querySelector(".dice2");

dice2.setAttribute("src", randomDicetwoPath);


if(randomNumberOne>randomNumberTwo){
 document.querySelector(".glow h3").innerText = "PLAYER 1";
}
else if(randomNumberOne<randomNumberTwo){ 
    document.querySelector(".glow h3").innerText = "PLAYER 2";   
}
else {
    document.querySelector(".glow h3").innerHTML = "<h3>Tie !</h3>";
}