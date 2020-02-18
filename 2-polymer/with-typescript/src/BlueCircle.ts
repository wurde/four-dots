import { LitElement, html, customElement } from "lit-element";

@customElement("blue-circle")
export class BlueCircle extends LitElement {
  render() {
    return html`
      <span>Blue Circle</span>
    `
  }
}
