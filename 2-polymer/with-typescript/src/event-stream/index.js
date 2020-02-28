import { LitElement, html customElement } from "lit-element";

@customElement("event-stream")
export class EventStream extends LitElement {
  render() {
    return html`<pf-div id="event-stream"></pf-div>`
  }
}
