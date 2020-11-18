const gray = () => {
    return `
        --font-color: #292724;
        --background-color: #a29888;
        --hover-background-color: #d0c3ae;
        --focus-ring-color: gray;
    `
}

const css = function({ color }) {
    return /*css*/`
        :host {
            display: block;
            contain: content;

            /* Variations */
            ${ color === "gray" ? gray() : ''}
        }

        button {
            cursor: pointer;
            border-radius: var(--border-radius, 3px);
            border: 1px solid var(--border-color, transparent);
            padding: var(--padding, 0.5rem 1rem);
            font-weight: var(--font-weight, 500);
            font-family: var(--font-family, 'Comic Sans MS');
            color: var(--font-color, #fd3f92);
            background-color: var(--background-color, papayawhip)
        }

        button:hover {
            background-color: var(--hover-background-color, #ffe9d1);
        }

        button:focus {
            border: 2px solid var(--focus-ring-color, orange);
            outline: none;
        }
    `
}
const html = function ({ color }) {
    return /*html*/`
      <style>
        ${css({ color })}
      </style>
      <button><slot /></button>
   `
}

export class TMButton extends HTMLElement {
    static get observedAttributes() {
    return ['color'];
    }

    constructor() {
        super()
        this.root = this.attachShadow({ mode: "open" })
    }

    get color() {
        return this.getAttribute("color")
    }

    connectedCallback() {
        this.root.innerHTML = html()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        switch(attrName) {
            case "color":
                this.root.innerHTML = html({ color: newVal })
                break;
            default:
                this.root.innerHTML = html({ color: "" })
        }
    }

}

customElements.define("tm-button", TMButton)