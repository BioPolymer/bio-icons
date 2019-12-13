import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-icon/iron-icon";
import "@polymer/iron-iconset-svg/iron-iconset-svg";

/**
 * `BioIcons`
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class BioIcons extends PolymerElement {
  static get template() {
    return html`
      <iron-iconset-svg name="bio" size="24">
        <svg>
          <defs>
            <g id="arrow-forward">
              <path
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              />
            </g>
            <g id="description">
              <path
                d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
              />
            </g>

            <g id="launch">
              <path
                d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
              />
            </g>
          </defs>
        </svg>
      </iron-iconset-svg>
    `;
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
    super.ready();
  }
}

customElements.define("bio-icons", BioIcons);
