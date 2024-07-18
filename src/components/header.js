class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
            <div class="title">
                <pre>
 ██╗ ██████╗ ██╗  ██╗
███║██╔═████╗╚██╗██╔╝
╚██║██║██╔██║ ╚███╔╝ 
 ██║████╔╝██║ ██╔██╗ 
 ██║╚██████╔╝██╔╝ ██╗
 ╚═╝ ╚═════╝ ╚═╝  ╚═╝
                     
</pre>
                
<div><h1>10x Technology</h1>
                <h2>Software Consulting</h2></div>
            </div>
                        
                <nav>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/services'>Services</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('my-header', Header);