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
  @property({ type: Array }) board = createBoard("blue");
  @property({ type: String }) currentPlayer = "blue";
  @property({ type: String }) visibility = "hidden";

  constructor() {
    super();

    this.addEventListener("add-dot", this.updateGameState);
    this.addEventListener("change-player", this.changePlayer);
  }

  updateGameState(e: CustomEvent) {
    console.log(e.detail);
  }

  changePlayer(e: CustomEvent) {
    this.currentPlayer = e.detail.currentPlayer;
  }

  restartGame() {
    alert("restartGame");
    this.currentPlayer = "blue";
    this.visibility = "hidden";

    let newBoard = createBoard("green");
    console.log(newBoard)
    this.board = newBoard;
  }

  render() {
    return html`
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
