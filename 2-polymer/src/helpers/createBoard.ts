export function createBoard() {
  const size = 12;
  let board = [];

  for (let i = 0; i < size; i++) {
    board.push(new Array(size));
  }

  return board;
}
