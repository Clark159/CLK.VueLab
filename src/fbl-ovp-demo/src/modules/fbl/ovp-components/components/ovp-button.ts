// class
export class OvpButton extends HTMLElement {

    // template
    private render(): void { this.innerHTML = `
        <style>
          ovp-button {
            display: inline-block;
          }
        </style>
        <button class="btn btn-red">
            ${this.innerHTML}
        </button>
    `;}

    connectedCallback(): void {
        this.render();
        const button = this.querySelector('button');
        if (button) {
            button.addEventListener('click', this.button_click);
        }
    }

    disconnectedCallback(): void {
        const button = this.querySelector('button');
        if (button) {
            button.removeEventListener('click', this.button_click);
        }
    }    

    // handlers
    private button_click = (): void => {
        this.dispatchEvent(
            new CustomEvent('ovp-click', {
                detail: { source: 'ovp-button' },
                bubbles: true,
                composed: true
            })
        );
    };
}

// define
if (!customElements.get('ovp-button')) {
    customElements.define('ovp-button', OvpButton);
}  