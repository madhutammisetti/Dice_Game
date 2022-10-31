var randomNumber1 = Math.floor(Math.random()*6)+1;  // it will generate upto 1 to 6

var image1Path = `images/dice${randomNumber1}.png`  // source path for images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];   // selecting image1 tag

image1.setAttribute("src",image1Path);               // setting attribute to image path 1


var randomNumber2 = Math.floor(Math.random()*6)+1;

var image2Path = `images/dice${randomNumber2}.png`

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",image2Path);


if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Win!!";
}
else if(randomNumber2  > randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 Win!!";
}
else{
    document.querySelector("h1").innerHTML = "Tie!!"
}