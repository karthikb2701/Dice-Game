var randomNumber1=Math.floor(Math.random()*6)+1;

var randomdi="dice"+ randomNumber1 +".png";

var ran= "images/"+ randomdi;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",ran);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomdi2="dice" +randomNumber2+ ".png";

var ran2="images/"+randomdi2;

var images2=document.querySelectorAll("img")[1];

images2.setAttribute("src",ran2);


if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
    
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Play 1 Wins";
}
else{
    document.querySelector("h1").innerHTML="Play 2 Wins";
}