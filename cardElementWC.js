class WebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( { mode: "open" } );
        console.log('desde el contructor');
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
                }

            </styles>
        `;
    };

    connectedCallback() {
        this.render();
        console.log('desde el connectedCallback');
    };

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    };

};

customElements.define("web-component", WebComponent);