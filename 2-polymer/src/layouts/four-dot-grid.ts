import { LitElement, html, css, customElement } from 'lit-element';

@customElement("four-dot-grid")
export class FourDotGrid extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-area: "header"
                   "main";
      }

      #header {
        grid-area: header;
      }
      #main {
        grid-area: main;
      }
      #sidebar {
        visibility: hidden;
      }

      @media (min-width: 768px) {
        grid-template-columns: 1fr auto;
        grid-auto-rows: auto;
        grid-area: "header  header"
                   "sidebar main";

        #sidebar {
          visibility: visible;
        }
      }
    `;
  }

  render() {
    return html``
  }
}
