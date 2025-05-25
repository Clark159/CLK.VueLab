// class
class OvpButton extends HTMLElement {

    // constructors
    initialize() { this.innerHTML = `
        <style>
            ovp-button {
                display: inline-block;
            }
        </style>
        <button class="btn btn-primary">
            ${this.innerHTML}
        </button>
    `;}

    connectedCallback() {
        this.initialize();
        const button = this.querySelector('button');
        if (button) {
            button.addEventListener('click', this.button_click);
        }
    }
    
    disconnectedCallback() {
        const button = this.querySelector('button');
        if (button) {
            button.removeEventListener('click', this.button_click);
        }
    }

    // handlers
    button_click = () => {
        this.dispatchEvent(
            new CustomEvent('ovp-click', {
                detail: { source: 'ovp-button' },
                bubbles: true,
                composed: true
            })
        );
    }
}

// define
if (!customElements.get('ovp-button')) {
    customElements.define('ovp-button', OvpButton);
}
