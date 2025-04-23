import { css, LitElement, html } from 'lit';
import '@material/mwc-list'

export class WishList extends LitElement {
    
    static get properties(){
        return{
            drawList: { type: Array },

        }
    }
    static get styles(){
        return css``;
    }
    constructor(){
        super();
        this.drawList = [];
    }
    render() {
        return html`
        
        <mwc-list>
            ${this.drawList.map(item => { return html`
                <mwc-list-item>${item.person}</mwc-list-item>
                
                    `;})}
        </mwc-list>
        `;
    }
}
customElements.define('wish-list', WishList);
