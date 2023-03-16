class navbar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' });
    };

    connectedCallback() {
        this.render();
    };

    static get observedAttributes() {
        return ["backgroundcolor","logo", "linkdocument", "name", "title", "icono", "email", "link", "bordersradius", "titlecolor", "backiconcolor"];
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
                    <a href="${this.linkdocument}" target="_blank">
                        <figure>
                            <img class="img-logo" src=${this.logo} />
                        </figure>
                    </a>
                    <span>${this.name}</span>
                </div>

                <h1>${this.title}</h1>
                
                <div class="div-right">
                    <a href="${this.link}" target="_blank">
                        <img src=${this.icono} />
                    </a>
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
                    --borders-radius-top: 3rem 3rem 0 0;
                    --borders-radius-bottom: 0 0 3rem 3rem;

                    display: inline-block;
                    width: 100%;
                    height: 6rem;
                    background-color: #202020;
                    background-color: ${this.backgroundcolor};
                    border-radius: ${this.bordersradius};
                    font-family: 'Roboto', sans-serif;
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
                    color: ${this.titlecolor};
                }

                :host header div {
                    display: flex;
                    align-items: center;
                }

                :host header span {
                    margin-inline: 1rem;
                }

                :host header div figure {
                    display: flex;
                    width: 5rem;
                    height: 4rem;
                    border-radius: 1rem;
                    background-color: #B3B3B3;
                    justify-content: center;
                    align-items: center;
                }

                :host header div .img-logo {
                    width: 3.5rem;
                    height: 3.5rem;                    
                }
                
                :host header .div-right a img {
                    width: 3rem;
                    height: 3rem;
                    background-color: #B3B3B3;
                    background-color: ${this.backiconcolor};
                    border-radius: 1rem;
                    padding: .3rem;
                }
            </style>
        `;
    };

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    };
};

customElements.define("nav-bar", navbar);