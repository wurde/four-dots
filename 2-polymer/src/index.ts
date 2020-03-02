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
  @property({ type: String }) visibility = "hidden";

  constructor() {
    super();

    this.addEventListener("restart-game", this.restartGame);
    this.addEventListener("add-dot", this.updateGameState);
    this.addEventListener("change-player", this.changePlayer);
  }

  restartGame() {
    this.currentPlayer = "blue";
    this.visibility = "hidden";
    this.board = createBoard();
  }

  updateGameState(e: CustomEvent) {
    const { colIndex, player } = e.detail;

    const rowIndex = findNextRow(this.board, colIndex);
    this.board[rowIndex][colIndex] = player;

    if (rowIndex == 0) {
      this.columnFilled(colIndex);
    }
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer == "blue" ? "black" : "blue";
  }

  columnFilled(colIndex) {
    this.actionbar[colIndex] = "disabled";
  }

  render() {
    return html`
      <div>
        <four-dot-winneralert
          visibility="${this.visibility}"
        ></four-dot-winneralert>

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
