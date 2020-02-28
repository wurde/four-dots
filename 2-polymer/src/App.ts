import {
  LitElement,
  html,
  property,
  customElement
} from "lit-element";

import "./components/refresh-button";
import "./components/winner-alert";

@customElement("four-dots-app")
export class FourDotsApp extends LitElement {
  @property({ type: Array }) board = [];

  render() {
    return html`
      <four-dot-grid>
        <four-dot-header />
        <pf-header>
          <pf-h1>Four Dots</pf-h1>
          <refresh-button myProp="blahblah" />
        </pf-header>

        <winner-alert />
        <game-header />
        <main-content />
      </four-dot-grid>
    `;
  }
}

