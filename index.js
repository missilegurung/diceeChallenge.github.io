
var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6
var randomDiceeImage = "dice"+randomNumber1+".png"; //dice1-6.png
var randomImageSource = "images/"+randomDiceeImage; //images/dice1-6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins !!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins !!";
}
else{
  document.querySelector("h1").innerHTML="Draw !!";
}
