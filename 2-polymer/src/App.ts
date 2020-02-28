import {
  LitElement,
  html,
  property,
  customElement
} from "lit-element";

import "./components/header";
import "./components/board";

@customElement("four-dots-app")
export class FourDotsApp extends LitElement {
  @property({ type: Array }) board = [];

  render() {
    return html`
      <four-dot-grid>
        <four-dot-header></four-dot-header>
        <four-dot-board></four-dot-board>
      </four-dot-grid>
    `;
  }
}
