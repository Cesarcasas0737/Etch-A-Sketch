let color = "black";

function populateBoard(size){
        
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} ,1fr)`;
    board.style.gridTemplateRows =  `repeat(${size} ,1fr)`;

    let amount = size * size;
    for (let i = 0; i <amount; i++){

        let square = document.createElement("div");
        square.addEventListener('mouseover',colorSquare);//magic here
        square.style.backgroundColor = "white";
        //square.style.outline = "thick solid #0000FF"; //see the grid lines
        board.insertAdjacentElement("beforeend", square);
        }
}

populateBoard(4);

//
function changeSize(input){
  if (input <=2){
    alert("Value is Too Low, Try a value no less then 2");
    return;
  }
  if (input >=100){
    alert("Value is Too High, Try somthing less than 100");
    return;
  }
  populateBoard(input);
}

function colorSquare(){
    if(color === "random"){
        this.style.backgroundColor = randomRGB();
    }else{
        this.style.backgroundColor = color;
    }
}

function penToRGB(){
    color = "random"
}
function penToWhite(){
    color = "white";
}
function penToBlack(){
    color = "black";
}

function reset(){
    populateBoard(4);
}

function randomRGB(){
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';

}