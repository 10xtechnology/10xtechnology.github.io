class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>&copy; 2024 10x Technology</p>
            </footer>
        `;
    }
}

customElements.define('my-footer', Footer);