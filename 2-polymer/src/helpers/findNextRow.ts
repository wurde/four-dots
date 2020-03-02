export function findNextRow(board, colIndex) {
  const length = board.length;
  let rowIndex = 0;

  for (let i = 0; i < length; i++) {
    if (board[i][colIndex]) {
      return rowIndex;
    }

    rowIndex = i;
  }

  return rowIndex;
}
