import {
  LitElement,
  html,
  property,
  customElement
} from "lit-element";

import "./event-stream";
import "./components/winneralert";
import "./components/header";
import "./components/board";

@customElement("four-dots-app")
export class FourDotsApp extends LitElement {
  @property({ type: Array }) board = this.createBoard();
  @property({ type: String }) currentPlayer = "blue";
  @property({ type: String }) visibility = "hidden";

  constructor() {
    super();

    this.addEventListener("change-player", (e: CustomEvent) => {
      this.currentPlayer = e.detail.currentPlayer
    });
  }

  createBoard() {
    const size = 12;
    let board = [];
    for (let i = 0; i < size; i++) {
      board.push(new Array(size));
    }
    return board;
  }

  restartGame() {
    this.currentPlayer = "blue";
    this.visibility = "hidden";
    this.board = this.createBoard();
  }

  render() {
    return html`
      <event-stream></event-stream>
      <four-dot-winneralert
        visibility="${this.visibility}"
      ></four-dot-winneralert>
      <four-dot-header .restartGame="${this.restartGame}"></four-dot-header>
      <four-dot-board
        board=${JSON.stringify(this.board)}
        currentPlayer="${this.currentPlayer}"
      ></four-dot-board>
    `;
  }
}
