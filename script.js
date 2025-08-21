const chessboard = document.querySelector(".chessboard-js");

const board = [
  ["TRN","CN","FN","DN","RN","FN","CN","TRN"], // ligne 0 = noire
  ["bp","bp","bp","bp","bp","bp","bp","bp"],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["wp","wp","wp","wp","wp","wp","wp","wp"],
  ["TRB","CB","FB","DB","RB","FB","CB","TRB"]  // ligBe 7 = blanche
];


const pieceSymbols = {
  "bp": "♙", "TRN": "♖", "CN": "♘", "FN": "♗", "DN": "♕", "RN": "♔",
  "bp": "♟", "TRB": "♜", "CB": "♞", "FB": "♝", "DB": "♛", "RB": "♚"
};

const Sizechessboard = 8

for (let i = 0; i < Sizechessboard; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let j = 0; j < Sizechessboard; j++) {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
                
        cellDiv.classList.add((i+j)%2===0 ? "white" : "black");
        
        if (board[i][j] !== "") {
            cellDiv.textContent = pieceSymbols[board[i][j]];
        }
        rowDiv.appendChild(cellDiv);
    }
    chessboard.appendChild(rowDiv);
}


let selected = null;

chessboard.addEventListener("click", e => {
    const cell = e.target.closest(".cell");
    if (!cell) return;

    if (cell.textContent !== "" && !selected) {
        selected = cell;
    } else if (selected) {
        cell.textContent = selected.textContent;
        selected.textContent = "";
        selected.style.border = "";
        selected = null;
    }
});