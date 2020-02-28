/**
 * Dependencies
 */

import {
  LitElement,
  html,
  property,
  customElement
} from "lit-element";

import "./event-stream";
import "./data-store";

import "./layouts/four-dot-grid";

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
