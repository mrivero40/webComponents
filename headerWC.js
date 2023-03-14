class Header extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' });
    };

    connectedCallback() {
        this.render();
    };

    static get observedAttributes() {
        return ["logo", "name", "title", "icono", "email"];
    };

    attributeChangedCallback(nowValue, oldValue, newValue) {
        if(newValue !== oldValue) {
            this[nowValue] = newValue;
        };
    };

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <header>

                <div>
                    <figure>
                        <img class="img-logo" src=${this.logo} />
                    </figure>
                    <span>${this.name}</span>
                </div>

                <h1>${this.title}</h1>
                
                <div>
                    <img src=${this.icono} />
                    <span>${this.email}</span>
                </div>

            </header>
            ${this.getStyles()}
        `;
        return template;
    };

    getStyles() {
        return `
            <style>
                :host * {
                    margin: 0;
                    padding: 0;
                }
                :host {
                    display: inline-block;
                    width: 100%;
                    height: 7rem;
                    background-color: #202020;
                    border-radius: 0 0 1rem 1rem;
                    font-family: 'Roboto', sans-serif;
                    border-radius: 0 0 2rem 2rem;
                    color: #B3B3B3;  
                }

                :host header {
                    width: 100%;
                    height: 100%;                    
                    display: flex;
                    justify-content: space-around;
                    align-items: center;                                   
                }

                :host header h1 {
                    color: #D8EE22;
                }

                :host header div {
                    display: flex;
                    align-items: center;
                }

                :host header span {
                    margin-inline: 1.5rem;
                }

                :host header div figure {
                    display: flex;
                    width: 3rem;
                    height: 6rem;
                    border-radius: 50%;
                    background-color: #B3B3B3;
                    justify-content: center;
                    align-items: center;
                }

                :host header div .img-logo {
                    width: 4rem;
                    height: 4rem;                    
                }
                
                :host header div img {
                    background-color: #B3B3B3;
                    border-radius: 1rem;
                    padding: .25rem;
                }
            </style>
        `;
    };

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    };
};

customElements.define("header-nav", Header);