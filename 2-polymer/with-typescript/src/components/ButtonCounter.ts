import { LitElement, customElement, html, property } from "lit-element";

@customElement("btn-counter")
export class ButtonCounter extends LitElement {
  @property({ type: Number }) count = 0;

  increment() {
    this.count++;
  }

  render() {
    return html`
      <button @click="${this.increment}">Add: ${this.count}</button>
    `;
  }
}
