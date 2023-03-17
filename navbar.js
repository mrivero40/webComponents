class navbar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' });
    };

    connectedCallback() {
        this.render();
    };

    static get observedAttributes() {
        return ["backgroundcolor","logo", "linkdocument", "name", "titleh1", "icono", "email", "link", "bordersradius", "titlecolor", "backiconcolor", "backimgcolor"];
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
                            <img class="img-logo" src=${this.logo} title="Click para Ingresar" alt="logo-ícono" />
                        </figure>
                    </a>
                    <span>${this.name}</span>
                </div>

                <h1>${this.titleh1}</h1>
                
                <div class="div-right">
                    <a href="${this.link}" target="_blank">
                        <img src=${this.icono} title="Click para Ingresar" alt="logo-ícono" />
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
                    text-align: center;
                    color: #D8EE22;
                    color: ${this.titlecolor};
                }

                :host header div {
                    display: flex;
                    align-items: center;
                    margin-inline: 1rem;
                }

                :host header span {
                    margin-inline: 1rem;
                    color: ${this.backimgcolor};
                }

                :host header div figure {
                    display: flex;
                    width: 4rem;
                    height: 4rem;
                    border-radius: 1rem;
                    background-color: #B3B3B3;
                    background-color: ${this.backimgcolor};
                    justify-content: center;
                    align-items: center;
                }

                :host header div .img-logo {
                    width: 3.5rem;
                    height: 3.5rem;                    
                }
                
                :host header .div-right a img {
                    width: 3.5rem;
                    height: 3.5rem;
                    background-color: #B3B3B3;
                    background-color: ${this.backiconcolor};
                    border-radius: 1rem;
                    padding: .3rem;
                }

                @media (max-width: 930px) {
                    :host {
                        --borders-radius-top: 2rem 2rem 0 0;
                        --borders-radius-bottom: 0 0 2rem 2rem;

                        border-radius: var(${this.bordersradius});
                        height: 8rem;
                    }

                    :host header div {
                        flex-direction: column;
                    }
                }

                @media (max-width: 680px) {
                    :host {
                        --borders-radius-top: 1.5rem 1.5rem 0 0;
                        --borders-radius-bottom: 0 0 1.5rem 1.5rem;

                        border-radius: var(${this.bordersradius});                        
                    }

                    :host header span {
                        display: none;
                    }

                    :host header h1 {
                        font-size: 1.5rem;
                    }
                }
            </style>
        `;
    };

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    };
};

customElements.define("nav-bar", navbar);