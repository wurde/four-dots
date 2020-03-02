import {
  LitElement,
  html,
  property,
  customElement
} from "lit-element";

import { createBoard } from "./helpers/createBoard";
import { findNextRow } from "./helpers/findNextRow";

import "./components/winneralert";
import "./components/header";
import "./components/board";

@customElement("four-dots-app")
export class FourDotsApp extends LitElement {
  @property({ type: Array }) actionbar = new Array(12).fill(null);
  @property({ type: Array }) board = createBoard();
  @property({ type: String }) currentPlayer = "blue";
  @property({ type: String }) winner;

  constructor() {
    super();

    this.addEventListener("restart-game", this.restartGame);
    this.addEventListener("add-dot", this.updateGameState);
    this.addEventListener("change-player", this.changePlayer);
  }

  restartGame() {
    this.currentPlayer = "blue";
    this.winner = null;
    this.board = createBoard();
  }

  updateGameState(e: CustomEvent) {
    const { colIndex, player } = e.detail;

    const rowIndex = findNextRow(this.board, colIndex);
    this.board[rowIndex][colIndex] = player;

    if (rowIndex == 0) {
      this.columnFilled(colIndex);
    }
    this.checkIfGameOver(this.board, rowIndex, colIndex, player);
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer == "blue" ? "black" : "blue";
  }

  columnFilled(colIndex) {
    this.actionbar[colIndex] = "disabled";
  }

  checkIfGameOver(board, rowIndex, colIndex, player) {
    let count = 1;

    // Check vertical
    let counter = rowIndex + 1;
    while (counter <= 11) {
      let x = board[counter][colIndex];
      if (!x || x != player) break;
      count++;
      counter++;
    }
    if (count == 4) {
      this.rewardWinner(player);
      return;
    }

    // Check horizontal
    count = 1;
    let leftCounter = colIndex - 1;
    while (leftCounter >= 0) {
      let x = board[rowIndex][leftCounter];
      if (!x || x != player) break;
      count++;
      leftCounter--;
    }
    let rightCounter = colIndex + 1;
    while (rightCounter <= 11) {
      let x = board[rowIndex][rightCounter];
      if (!x || x != player) break;
      count++;
      rightCounter++;
    }
    if (count == 4) {
      this.rewardWinner(player);
      return;
    }

    // Check diagonalLeft
    count = 1;
    leftCounter = colIndex - 1;
    let topCounter = rowIndex - 1;
    while (leftCounter >= 0 && topCounter >= 0) {
      let x = board[topCounter][leftCounter];
      if (!x || x != player) break;
      count++;
      leftCounter--;
      topCounter--;
    }
    rightCounter = colIndex + 1;
    let bottomCounter = rowIndex + 1;
    while (rightCounter <= 11 && bottomCounter <= 11) {
      let x = board[bottomCounter][rightCounter];
      if (!x || x != player) break;
      count++;
      rightCounter++;
      bottomCounter++;
    }
    if (count == 4) {
      this.rewardWinner(player);
      return;
    }

    // Check diagonalRight
    count = 1;
    leftCounter = colIndex - 1;
    bottomCounter = rowIndex + 1;
    while (leftCounter >= 0 && bottomCounter <= 11) {
      let x = board[bottomCounter][leftCounter];
      if (!x || x != player) break;
      count++;
      leftCounter--;
      bottomCounter++;
    }
    topCounter = rowIndex - 1;
    rightCounter = colIndex + 1;
    while (rightCounter <= 11 && topCounter >= 0) {
      let x = board[topCounter][rightCounter];
      if (!x || x != player) break;
      count++;
      topCounter--;
      rightCounter++;
    }
    if (count == 4) {
      this.rewardWinner(player);
      return;
    }
  }

  rewardWinner(player) {
    this.actionbar.fill("disabled");
    this.winner = player;
  }

  render() {
    return html`
      <div>
        <four-dot-winneralert .winner="${this.winner}"></four-dot-winneralert>

        <four-dot-header></four-dot-header>

        <four-dot-board
          board=${JSON.stringify(this.board)}
          actionbar="${JSON.stringify(this.actionbar)}"
          currentPlayer="${this.currentPlayer}"
        ></four-dot-board>
      </div>
    `;
  }
}
