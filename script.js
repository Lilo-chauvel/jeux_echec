const chessboard = document.querySelector(".chessboard-js");


// alert("test")

// const chessboard = document.querySelector(".chessboard-js")

// const squareBlack = document.createElement("div")
// squareBlack.classList.add('cell', 'black')


// const squareWhite = squareBlack.cloneNode(true)
// squareWhite.classList.remove('black')
// squareWhite.classList.add('white')

// const row = document.createElement("div")
// row.classList.add('row')


// chessboard.appendChild(row)

// row.appendChild(squareBlack)
// row.appendChild(squareWhite)
// row.appendChild(squareBlack.cloneNode(true))
// row.appendChild(squareWhite.cloneNode(true))
// row.appendChild(squareBlack.cloneNode(true))
// row.appendChild(squareWhite.cloneNode(true))
// row.appendChild(squareBlack.cloneNode(true))
// row.appendChild(squareWhite.cloneNode(true))

// chessboard.appendChild(row.cloneNode(true))

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

//For (let index=0; index<9; index++) { row.classList.add('row'index),chessboard.appendChild(row.cloneNode(true)) }


const board = [
  ["TRN","CN","FN","DN","RN","FN","CN","TRN"], // ligne 0 = noire
  ["bp","bp","bp","bp","bp","bp","bp","bp"],
  ["","","","","","","",""],
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

for (let i = 0; i < 8; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < 8; j++) {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.classList.add((i+j)%2===0 ? "white" : "black");
        
        if (board[i][j] !== "") {
            cellDiv.textContent = pieceSymbols[board[i][j]];
            cellDiv.style.fontSize = "50px";
            cellDiv.style.textAlign = "center";
            cellDiv.style.lineHeight = "75px";
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

