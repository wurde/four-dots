import { LitElement, customElement, html, property } from "lit-element";

@customElement("conditional-el")
export class ConditionalElement extends LitElement {
  @property({ type: Boolean }) myBool = true;

  render() {
    return html`
      ${this.myBool ?
        html`<p>Render some HTML if myBool is true</p>` :
        html`<p>Render some other HTML if myBool is false</p>`}
    `;
  }
}
