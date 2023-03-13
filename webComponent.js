class WebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( { mode: "open" } );
        console.log('desde el contructor');
    };

    static get observedAttributes() {
        return ["img", "title", "parrafo"];
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
                }
                
                :host {
                    display: inline-block;
                    width: 19rem;
                    height: auto;
                    border-radius: 0 0 2rem 0;
                    background-color: #202020;
                    color: #B3B3B3;                   
                }
                                
                div img {
                    width: 100%;
                }

                div h3 {
                    margin-block: 1rem;
                    margin-inline: 1rem;
                }

                div p {
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