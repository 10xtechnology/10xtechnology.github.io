class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1>10x Technology</h1>
                <img src="../images/logo.png" alt="10x Technology Logo" width="200" height="200">
                <h2>Software Consulting</h2>
                <nav>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/services'>Services</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </nav>
                <hr>
            </header>
        `;
    }
}

customElements.define('my-header', Header);