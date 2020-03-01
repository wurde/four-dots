import {
  LitElement,
  html,
  property,
  customElement
} from "lit-element";

import "./components/winneralert";
import "./components/header";
import "./components/board";

@customElement("four-dots-app")
export class FourDotsApp extends LitElement {
  @property({ type: Array }) board = [];
  @property({ type: String }) currentPlayer = "red";

  restartGame() {
    this.currentPlayer = "red";
    alert("BLAH")
  }

  render() {
    return html`
      <four-dot-winneralert></four-dot-winneralert>
      <four-dot-header restartGame="${this.restartGame}"></four-dot-header>
      <four-dot-board></four-dot-board>
    `;
  }
}
