// ──────────────────────────────────────────────────────────────
// Logic.js — Tic-Tac-Toe Game Logic
// Handles: Navigation, Board toggling, Player vs Computer,
//          Player vs Friend, Win detection, and Board reset
// ──────────────────────────────────────────────────────────────


// ── Navigation ──────────────────────────────────────────────
function Secondpage() {
    window.location.href = "Second.html";
}

function HomePage() {
    window.location.href = "index.html";
}


// ── Board Toggling (Mode Selection) ─────────────────────────
// Only run board-related code on the game page (Second.html)
let computerModeBtn = document.querySelector('.computer-mode');
let duoModeBtn = document.querySelector('.duo-mode');

if (computerModeBtn) {
    computerModeBtn.addEventListener('click', function () {
        document.querySelector('.Board1').style.display = "grid";
        document.querySelector('.box').style.display = "flex";
        document.querySelector('.Board2').style.display = "none";
        document.querySelector('.box2').style.display = "none";
        resetGame();  // Reset when switching modes
    });
}

if (duoModeBtn) {
    duoModeBtn.addEventListener('click', function () {
        document.querySelector('.Board1').style.display = "none";
        document.querySelector('.box').style.display = "none";
        document.querySelector('.Board2').style.display = "grid";
        document.querySelector('.box2').style.display = "flex";
        resetFriendGame();  // Reset when switching modes
    });
}


// ──────────────────────────────────────────────────────────────
// MODE 1: Player vs Computer
// ──────────────────────────────────────────────────────────────

let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let computer = "O";
let gameActive = true;  // Prevents moves after a win/draw
let empty_spaces = [];

// All possible winning combinations
let Possibilities = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];


// Player clicks on a cell (Board1 — vs Computer)
let board1Cells = document.querySelectorAll('.Board1 .cell');
board1Cells.forEach(cell => {
    cell.addEventListener('click', function () {
        let position = this.id;
        // Only allow move if cell is empty and game is active
        if (board[position] === "" && gameActive) {
            moveCheck(position, player);
            // Computer responds after a short delay
            if (gameActive) {
                setTimeout(computerMove, 500);
            }
        }
    });
});


// Place a symbol on the board (shared helper for Mode 1)
function moveCheck(position, symbol) {
    if (board[position] === "") {
        board[position] = symbol;
        // Update the correct cell in Board1
        document.querySelectorAll('.Board1 .cell')[position].innerText = symbol;
        updateEmptySpaces();
        let winner = checkWinner();
        if (winner) {
            gameActive = false;
        }
    }
}


// Track remaining empty cells
function updateEmptySpaces() {
    empty_spaces = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") empty_spaces.push(i);
    }
}


// Computer picks a random empty cell
function computerMove() {
    updateEmptySpaces();
    if (empty_spaces.length > 0 && gameActive) {
        let randomIndex = Math.floor(Math.random() * empty_spaces.length);
        let position = empty_spaces[randomIndex];
        moveCheck(position, computer);
    }
}


// Check for a winner (Mode 1: vs Computer)
function checkWinner() {
    for (let i = 0; i < Possibilities.length; i++) {
        let [a, b, c] = Possibilities[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            // Highlight winning cells
            let cells = document.querySelectorAll('.Board1 .cell');
            [a, b, c].forEach(index => {
                cells[index].style.textDecoration = "line-through";
                cells[index].style.color = "rgb(10, 255, 226)";
            });
            document.querySelector(".box").innerText = `${board[a]} is the Winner 🥳`;
            return board[a];
        }
    }

    // Check for draw
    if (!board.includes("")) {
        document.querySelector(".box").innerText = `It's a Draw! 😭`;
        return "Draw";
    }

    return null;
}


// Reset Mode 1 game state
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    empty_spaces = [];
    document.querySelectorAll('.Board1 .cell').forEach(cell => {
        cell.innerText = "";
        cell.style.textDecoration = "none";
        cell.style.color = "white";
        cell.style.pointerEvents = "auto";
    });
    document.querySelector(".box").innerText = "";
}


// ──────────────────────────────────────────────────────────────
// MODE 2: Player vs Friend
// ──────────────────────────────────────────────────────────────

let board2 = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let friendGameActive = true;

let FriendCells = document.querySelectorAll(".Board2 .cell");

FriendCells.forEach((cell) => {
    cell.addEventListener('click', function () {
        let cellIndex = this.id;

        // Only allow move if cell is empty and game is active
        if (board2[cellIndex] !== "" || !friendGameActive)
            return;

        board2[cellIndex] = currentPlayer;
        this.innerText = currentPlayer;

        // Check for winner
        let winner = checkWinnerFriend();
        if (winner) {
            document.querySelector(".box2 .result2").innerText = `${winner} is the Winner 🥳`;
            friendGameActive = false;
            return;
        }

        // Check for draw
        if (!board2.includes("")) {
            document.querySelector(".box2 .result2").innerText = `It's a Draw 😭`;
            friendGameActive = false;
            return;
        }

        // Switch player turn
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});


// Check for a winner (Mode 2: vs Friend)
function checkWinnerFriend() {
    for (let i = 0; i < Possibilities.length; i++) {
        let [a, b, c] = Possibilities[i];
        if (board2[a] && board2[a] === board2[b] && board2[a] === board2[c]) {
            // Highlight winning cells
            let cells = document.querySelectorAll(".Board2 .cell");
            [a, b, c].forEach(index => {
                cells[index].style.textDecoration = "line-through";
                cells[index].style.color = "rgb(10, 255, 226)";
            });
            return board2[a];
        }
    }
    return null;
}


// Reset Mode 2 game state
function resetFriendGame() {
    board2 = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    friendGameActive = true;
    document.querySelectorAll('.Board2 .cell').forEach(cell => {
        cell.innerText = "";
        cell.style.textDecoration = "none";
        cell.style.color = "white";
        cell.style.pointerEvents = "auto";
    });
    document.querySelector(".box2 .result2").innerText = "";
}