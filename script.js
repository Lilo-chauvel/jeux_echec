const chessboard = document.querySelector(".chessboard-js");

const rules = {
  cell: { width: "75px", height: "75px" },
  pieces: [
    // // Noirs
    // { name: "tour", couleur: "noirs", pos: [0, 0], html: '<i class="fa-solid fa-chess-rook"></i>' },
    // { name: "cavalier", couleur: "noirs", pos: [0, 1], html: '<i class="fa-solid fa-chess-knight"></i>' },
    // { name: "fou", couleur: "noirs", pos: [0, 2], html: '<i class="fa-solid fa-chess-bishop"></i>' },
    // { name: "dame", couleur: "noirs", pos: [0, 3], html: '<i class="fa-solid fa-chess-queen"></i>' },
    // { name: "roi", couleur: "noirs", pos: [0, 4], html: '<i class="fa-solid fa-chess-king"></i>' },
    // { name: "fou", couleur: "noirs", pos: [0, 5], html: '<i class="fa-solid fa-chess-bishop"></i>' },
    // { name: "cavalier", couleur: "noirs", pos: [0, 6], html: '<i class="fa-solid fa-chess-knight"></i>' },
    // { name: "tour", couleur: "noirs", pos: [0, 7], html: '<i class="fa-solid fa-chess-rook"></i>' },
    // ...Array.from({ length: 8 }, (_, i) => ({
    //   name: "pion", couleur: "noirs", pos: [1, i], html: '<i class="fa-solid fa-chess-pawn"></i>'
    // })),
    // // Blancs
    // ...Array.from({ length: 8 }, (_, i) => ({
    //   name: "pion", couleur: "blancs", pos: [6, i], html: '<i class="fa-solid fa-chess-pawn"></i>'
    // })),
    // { name: "tour", couleur: "blancs", pos: [7, 0], html: '<i class="fa-solid fa-chess-rook"></i>' },
    // { name: "cavalier", couleur: "blancs", pos: [7, 1], html: '<i class="fa-solid fa-chess-knight"></i>' },
    // { name: "fou", couleur: "blancs", pos: [7, 2], html: '<i class="fa-solid fa-chess-bishop"></i>' },
    // { name: "dame", couleur: "blancs", pos: [7, 3], html: '<i class="fa-solid fa-chess-queen"></i>' },
    // { name: "roi", couleur: "blancs", pos: [7, 4], html: '<i class="fa-solid fa-chess-king"></i>' },
    // { name: "fou", couleur: "blancs", pos: [7, 5], html: '<i class="fa-solid fa-chess-bishop"></i>' },
    // { name: "cavalier", couleur: "blancs", pos: [7, 6], html: '<i class="fa-solid fa-chess-knight"></i>' },
    // { name: "tour", couleur: "blancs", pos: [7, 7], html: '<i class="fa-solid fa-chess-rook"></i>' },
  ]
};

const Sizechessboard = 8;

// Construire les cases
for (let i = 0; i < Sizechessboard; i++) {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  for (let j = 0; j < Sizechessboard; j++) {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.classList.add((i + j) % 2 === 0 ? "white" : "black");
    cellDiv.dataset.row = i;
    cellDiv.dataset.col = j;
    rowDiv.appendChild(cellDiv);
  }
  chessboard.appendChild(rowDiv);
}

// Placer les pièces
for (const piece of rules.pieces) {
  const { pos, html, couleur } = piece;
  const cell = document.querySelector(
    `.cell[data-row="${pos[0]}"][data-col="${pos[1]}"]`
  );
  if (cell) {
    cell.innerHTML = html;
    cell.classList.add("piece", couleur);
  }
}
