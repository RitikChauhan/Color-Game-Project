var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var resetBut = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click",function(){
  numSquares = 3;
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(var i=0;i<squares.length;i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click",function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares =6;

  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(var i=0;i<squares.length;i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
});

resetBut.addEventListener("click",function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  message.textContent ="";
  this.textContent = "New Colors";
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

for(var i=0;i<squares.length;i++){
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click",function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      resetBut.textContent = "PlayAgain?"
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }
    else{
      this.style.backgroundColor="#232323";
      messageDisplay.textContent="Try Again";
    }
  });
}

function changeColors(color){
  for(var i=0;i<colors.length;i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var num = Math.floor(Math.random() * colors.length);
  return colors[num];
}

function generateRandomColors(num){
  var arr = [];
  for(var i =0;i<num;i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
