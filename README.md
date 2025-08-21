# Jeux_echec

## Création chessboard test
```js

alert("test")

const chessboard = document.querySelector(".chessboard-js")

const squareBlack = document.createElement("div")
squareBlack.classList.add('cell', 'black')


const squareWhite = squareBlack.cloneNode(true)
squareWhite.classList.remove('black')
squareWhite.classList.add('white')

const row = document.createElement("div")
row.classList.add('row')


chessboard.appendChild(row)

row.appendChild(squareBlack)
row.appendChild(squareWhite)
row.appendChild(squareBlack.cloneNode(true))
row.appendChild(squareWhite.cloneNode(true))
row.appendChild(squareBlack.cloneNode(true))
row.appendChild(squareWhite.cloneNode(true))
row.appendChild(squareBlack.cloneNode(true))
row.appendChild(squareWhite.cloneNode(true))

chessboard.appendChild(row.cloneNode(true))
```
## Idée Joachim pour gestion des pièces 
```js
querySelector(.pion)

const rules = {
    cell : {
        height: '75px'
        width: '75px'
    }
    piece : [
        {
            name: "dame",
            couleur: "noirs",
            defaultpos : [1, 1],
            html: pion 
        }
    ]
}

setup = () =>{
    
}


const 
```
## Proposition Joachim pour la boucle For création chessboard
```js
const chessboard2 = document.querySelector(".chessboard-js2");
const lengthBoard = 8 

for (let i = 0; i < lengthBoard * lengthBoard; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("cell");
    const lignNumber = Math.floor(i / lengthBoard)
    
    if (lignNumber % 2 === 0) {
        rowDiv.classList.add((i)%2!==0 ? "white" : "black");
    } else {
        rowDiv.classList.add((i)%2===0 ? "white" : "black");
    }

    chessboard2.appendChild(rowDiv);
}
```
## Création de pièce par ChatGPT
```js

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
```
