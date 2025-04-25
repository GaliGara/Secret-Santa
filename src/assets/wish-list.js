import { css, LitElement, html, nothing } from 'lit';
import '@material/mwc-list'
import '@material/mwc-button'
import '@material/mwc-select'
import '@material/mwc-textfield'

export class WishList extends LitElement {
    
    static get properties(){
        return{
            drawList: { type: Array },
            isListCompleted: { type: Boolean },
            wishItems: { type: Array },
            wish: { type: String },

        }
    }
    static get styles(){
        return css``;
    }
    constructor(){
        super();
        this.drawList = [];
        this.isListCompleted = false;
        this.wishItems = [];
        this.wish = '';

    }

    createWish(){
        this.isListCompleted = true;
        this.wish = this.shadowRoot.querySelector('#inputWish').value
        const selectedPerson = this.shadowRoot.querySelector('mwc-select').selected;
        const wishID = selectedPerson ? selectedPerson.id : null


        this.dispatchEvent(new CustomEvent('toggleWish', {
             detail: { listCompleted: this.isListCompleted, wishItem: this.wish, selectID: wishID}
            }));

    }
    render() {
        return html`

        <div>
            <mwc-list>
                ${this.drawList.map(item => { return html`
                    <mwc-list-item twoline>
                        <span>${item.name}</span>
                        ${this.isListCompleted? html `
                        <span slot="secondary">${item.ID}</span>`: nothing}                     
                    </mwc-list-item>                    
                        `;})}
            </mwc-list>
        </div>
        
        ${this.drawList.length >= 3? html `    
        <mwc-select>
            ${this.drawList.map((item, index) =>{ return html`
            <mwc-list-item class="wish" id="${index}">${item.name}</mwc-list-item>
            `})}    
        </mwc-select>

            <mwc-textfield
                id="inputWish"
                class="rounded"
                label="My Textfield"
                outlined>
            </mwc-textfield>
            
          <mwc-button @click=${this.createWish}>agregar wish</mwc-button>
        `
        : nothing}


      

        `;
    }
}
customElements.define('wish-list', WishList);
