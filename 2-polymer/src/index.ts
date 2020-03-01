import {
  LitElement,
  html,
  property,
  customElement
} from "lit-element";

import { createBoard } from "./helpers/createBoard";

import "./components/winneralert";
import "./components/header";
import "./components/board";

@customElement("four-dots-app")
export class FourDotsApp extends LitElement {
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
    const { colIndex, player } = e.detail

    console.log("updateGameState", colIndex, player);
    // this.board[rowIndex][colIndex] = player;
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer == "blue" ? "black" : "blue";
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
          currentPlayer="${this.currentPlayer}"
        ></four-dot-board>
      </div>
    `;
  }
}
