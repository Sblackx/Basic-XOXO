let player1_turn = true;
let player2_turn = false;
let player1_score = 0;
let player2_score = 0;
let track_matrix = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
];
let matrix1 = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
];
let matrix2 = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
];
let empty_cells = 9;
let win = false;
function setter(num) {
  let count = 1;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (count == num) {
        if (!track_matrix[i][j]) {
          empty_cells--;
          num = "" + count;
          if (player1_turn) {
            matrix1[i][j] = true;
            track_matrix[i][j] = true;
            let square = document.getElementById(num).querySelector(".x");
            square.style.display = "block";
            if (winner(matrix1)) {
              win = true;
              setTimeout(() => scoreUpdate(1), 1000);
            }
            player1_turn = false;
            player2_turn = true;
          } else {
            matrix2[i][j] = true;
            track_matrix[i][j] = true;
            let square = document.getElementById(num).querySelector(".o");
            square.style.display = "block";

            if (winner(matrix2)) {
              win = true;
              setTimeout(() => scoreUpdate(2), 1000);
            }
            player1_turn = true;
            player2_turn = false;
          }
        }
      }
      count++;
    }
  }
  // console.log(empty_cells);
  if (!win && empty_cells == 0) {
    // console.log("helllllllo");

    setTimeout(() => scoreUpdate(-1), 1000);
  }
}
function setter1() {
  setter(1);
}
function setter2() {
  setter(2);
}
function setter3() {
  setter(3);
}
function setter4() {
  setter(4);
}
function setter5() {
  setter(5);
}
function setter6() {
  setter(6);
}
function setter7() {
  setter(7);
}
function setter8() {
  setter(8);
}
function setter9() {
  setter(9);
}

function winner(matrix) {
  // rows, columns, both diagonals!
  //rows and columns and main diagonal
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (matrix[i][i]) count++;
    let count_row = 0;
    let count_column = 0;
    for (let j = 0; j < 3; j++) {
      if (matrix[i][j]) count_row++;
      if (matrix[j][i]) count_column++;
    }
    if (count_column == 3 || count_row == 3) return true;
  }
  //diagonal
  return count == 3 || (matrix[0][2] && matrix[1][1] && matrix[2][0]);
}

function scoreUpdate(player) {
  if (player == 1) {
    player1_score++;
    document.getElementById("winner").textContent =
      `The Player ${player} Wins This Round!`;
    document.getElementById("score1").textContent = `${player1_score}`;
  } else if (player == 2) {
    player2_score++;
    document.getElementById("winner").textContent =
      `The Player ${player} Wins This Round!`;
    document.getElementById("score2").textContent = `${player2_score}`;
  } else if (player == -1) {
    document.getElementById("winner").textContent = `Fair!`;
  }
  empty_cells = 9;
  win = false;
  matrix1 = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  matrix2 = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  track_matrix = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  for (let i = 1; i <= 9; i++) {
    let num = "" + i;
    let square = document.getElementById(num);
    square.querySelector(".o").style.display = "none";
    square.querySelector(".x").style.display = "none";
  }
  setTimeout(() => (document.getElementById("winner").textContent = ""), 3000);
}

function end() {
  scoreUpdate(0);
  let curr = document.getElementById("winner");
  if (player1_score > player2_score) {
    curr.textContent = `The Player ${1} Wins The Match!`;
  } else if (player1_score < player2_score) {
    curr.textContent = `The Player ${2} Wins The Match!`;
  } else {
    curr.textContent = `Fair!`;
  }
  player1_score = 0;
  player2_score = 0;
  document.getElementById("score1").textContent = "0";
  document.getElementById("score2").textContent = "0";
}
function restart() {
  player1_score = 0;
  player2_score = 0;
  document.getElementById("score1").textContent = "0";
  document.getElementById("score2").textContent = "0";
  scoreUpdate(0);
}
