class WebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( { mode: "open" } );
        console.log('Hola desde el constructor, te invito a explorar el código en el repositorio de github');
    };

    static get observedAttributes() {
        return ["img", "title", "parrafo", "cardcolor", "titlecolor", "parrafocolor"];
    };

    attributeChangedCallback(nowValue, oldValue, newValue) {
        if(oldValue !== newValue) {
            this[nowValue] = newValue;
        };
    };

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <article>
                <div>
                    <img src=${this.img} />
                </div>
                <div>
                    <h3>${this.title}</h3>
                    <p>${this.parrafo}</p>
                </div>             
            </article>
            ${this.getStyles()}
        `;
        return template;
    };

    getStyles() {
        return `
            <style>
            
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                :host {
                    --background-card: #060607;
                    --color-parrafo: #FFF;
                    --color-title: grey;

                    display: inline-block;
                    width: 19rem;
                    height: 28rem;
                    border: .15rem solid #991cca;
                    border-radius: 0 0 2rem 0;
                    background-color: var(--background-card);
                    background-color: ${this.cardcolor};
                    
                    margin: 1rem;
                    font-family: 'Roboto', sans-serif;       
                }
                                
                :host div img {
                    width: 100%;
                }

                :host div h3 {
                    margin-block: 1rem;
                    margin-inline: 1rem;
                    color: var(--color-title);
                    color: ${this.titlecolor}
                }

                :host div p {
                    color: var(--color-parrafo);
                    color: ${this.parrafocolor};
                    margin-block-end: 1rem;
                    margin-inline: 1rem;
                    font-size: 1rem;
                }

                @media (max-width: 680px) {
                    :host {
                        width: 80%;
                        height: auto;
                    }
                }

            </styles>
        `;
    };

    connectedCallback() {
        this.render();
        console.log('desde el connectedCallback, te cuento que la información y algunos estilos son establecidos a través de los atributs de la etiqueta customizada de HTML');
    };

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    };

};

customElements.define("web-component", WebComponent);