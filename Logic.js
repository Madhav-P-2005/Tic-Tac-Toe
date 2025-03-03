function Secondpage(){
    window.location.href = "Second.html"
}


function HomePage(){
    window.location.href = "First.html"
}


// Function to show Board1 (vs Computer)
function viewBoard1() {
    document.querySelector('.Board1').style.display = "grid"; // Show Board1
    document.querySelector('.box').style.display = "grid"; // Show Board1 's Label 
    document.querySelector('.Board2').style.display = "none"; // Hide Board2
    document.querySelector('.box2').style.display = "none"; // Hide Board2
}


// Function to show Board2 (vs Friend)
function viewBoard2() {
    document.querySelector('.Board1').style.display = "none"; // Hide Board1
    document.querySelector('.box').style.display = "none"; // Hide Board1 Label 
    document.querySelector('.Board2').style.display = "grid"; // Show Board2
    document.querySelector('.box2').style.display = "grid"; // Show Board2
}



// Add Event Listeners 
document.querySelector('.computer-mode').addEventListener('click' , viewBoard1);

document.querySelector(".duo-mode").addEventListener("click", viewBoard2);




let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let computer = "O";



// PLAYER PART 
document.querySelectorAll('.cell').forEach(cell =>{
    cell.addEventListener('click' , function(){
        let position = this.id;
        if(board[position] === ""){
            moveCheck(position , player);
            setTimeout(computerMove , 1000);
        }
        moveCheck(
         position,player
        )
    });
});



// Common method for both Computer and Player
function moveCheck(position ,symbol){
    if(board[position] === ""){
        board[position] =  symbol;
        document.getElementById(position).innerText = symbol;
        updateEmptySpaces();
        checkWinner();
        if(checkWinner()){
            updateEmptySpaces()
            exit;
        }
    }
}



function updateEmptySpaces() {
  empty_spaces = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") empty_spaces.push(i);
  }
}




// COMPUTER PART 
function computerMove() {
    updateEmptySpaces();  
    
    if(empty_spaces.length > 0){
        let randomindex = Math.floor(Math.random() * empty_spaces.length);
        let position = empty_spaces[randomindex];
        moveCheck(position, computer);
    }
}




let Possibilities = [
    [0,1,2], [3,4,5], [6,7,8], // Rows
    [0,3,6], [1,4,7], [2,5,8], // Columns
    [0,4,8], [2,4,6]           // Diagonals
];



function checkWinner() {
  for (let i = 0; i < Possibilities.length; i++) {
    let [a, b, c] = Possibilities[i]; 
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
    [a,b,c].forEach((index) =>{
            document.querySelectorAll('.cell')[index].style.textDecoration = "line-through";
    })
    document.querySelector(".box").innerText = `${board[a]} is the Winner 🥳`;
    return board[a];
    }
  }

  if(!board.includes("")){
    document.querySelector(".box").innerText = `It's a Draw! 😭`
    return "Draw"
  }
 
  return null;
}



// Function to disable board after win
function disableBoard() {
    forEach(cell => cell.style.pointerEvents = "none");
}


let FriendCells = document.querySelectorAll(".Board2 .cell")
let board2 = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";


FriendCells.forEach((cell) =>{
    cell.addEventListener('click' , function(){
         let cellIndex = this.id;

         if(board2[cellIndex]!== "") 
            return;

         board2[cellIndex] = currentPlayer;
         this.innerText = currentPlayer;
    
    
          currentPlayer = currentPlayer === "X" ? "O" : "X";

        let winner = checkWinnerFriend()
        if(winner){
      document.querySelector(
           ".box2 .result2"
         ).innerText = `${winner} is the Winner 🥳`;
          disableBoard();
      return board2[a];
    }else


     if (!board2.includes("")) {
       document.querySelector(".box2 .result2").innerText = `Its a draw 😭`;
       return "Draw";
     }
   
     
    });
});



function checkWinnerFriend() {
  for (let i = 0; i < Possibilities.length; i++) {
    let [a, b, c] = Possibilities[i]; // Get three positions

    if (board2[a] && board2[a] === board2[b] && board2[a] === board2[c]) {
        [a, b, c].forEach((index) => {
          document.querySelectorAll(".Board2 .cell")[index].style.textDecoration =
            "line-through";
        });
       
        
      return board2[a];
     
    }
  }

  return null; 
}