/**
 * Dependencies
 */

import {
  LitElement,
  html,
  property,
  customElement
} from "lit-element";

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
      <pf-container>
        <pf-row>
          <pf-column>
            <event-stream />
            <data-store />

            <span>Four Dots</span>

            <winner-alert />
            <game-header />
            <main-content />
          </pf-column>
        </pf-row>
      </pf-container>
    `;
  }
}
