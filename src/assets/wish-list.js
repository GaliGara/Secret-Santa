import { css, LitElement, html, nothing } from 'lit';
import '@material/mwc-list'
import '@material/mwc-button'
import '@material/mwc-select'

export class WishList extends LitElement {
    
    static get properties(){
        return{
            drawList: { type: Array },
            isListCompleted: { type: Boolean },

        }
    }
    static get styles(){
        return css``;
    }
    constructor(){
        super();
        this.drawList = [];
        this.isListCompleted = false;
    }

    createWish(){
        this.isListCompleted = true;
        this.dispatchEvent(new CustomEvent('toggleWish', { detail: this.isListCompleted}));

    }
    render() {
        return html`

        <div>
            <mwc-list>
                ${this.drawList.map(item => { return html`
                    <mwc-list-item twoline>
                        <span>${item.person}</span>
                        ${this.isListCompleted? html `
                        <span slot="secondary">${item.person}</span>
                        `: nothing}
                        
                    </mwc-list-item>
                    
                        `;})}
            </mwc-list>
        </div>
        
        ${this.isListCompleted? html `    
        <mwc-select>
            ${this.drawList.map(item =>{ return html`
            <mwc-list-item>${item.person}</mwc-list-item>
            `})}    
        </mwc-select>`
        : nothing}

        <mwc-button @click=${this.createWish}>agregar wish</mwc-button>

        `;
    }
}
customElements.define('wish-list', WishList);
