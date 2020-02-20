/**
 * Dependencies
 */

import {
  LitElement,
  html,
  property,
  customElement
} from "lit-element";

import "./components/refresh-button";
import "./components/winner-alert";

/**
 * Define and export the App.
 *
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement("four-dots-app")
export class FourDotsApp extends LitElement {
  @property({ type: Array }) board = [];

  render() {
    return html`
      <event-stream />
      <data-store />

      <pf-flex-container style="justify-content: center;">
        <pf-flex-item>
          <pf-header>
            <pf-h1>Four Dots</pf-h1>
            <refresh-button />
          </pf-header>
        </pf-flex-item>

        <pf-flex-item>
          <winner-alert />
          <game-header />
          <main-content />
        </pf-flex-item>
      </pf-flex-container>
    `;
  }
}
