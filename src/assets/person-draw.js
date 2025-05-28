import { LitElement, html, css, nothing } from 'lit';
import '@material/mwc-button'
import '@material/mwc-list'

export class PersonDraw extends LitElement {
    
    static get styles(){
        return css``
    }

    static get properties(){
        return {
            isDraw: { type: Boolean },
            drawList : { type: Array},
        }
    }

    constructor(){
        super();
        this.isDraw = false;
        this.drawList = [];

    }


    handleDraw(){

        this.isDraw = true
        this.dispatchEvent(new CustomEvent('showDraw'));
        
    }

    render(){
        //este const en esta situacion es correcto porque solo condiciona este boton
        //  y no se ocupa mayor logica, de ser lo contrario es mejor usar un get
        const canDraw = this.drawList.every(p => p.wish.length >= 1)
        return html`
        <mwc-button @click="${this.handleDraw}" ?disabled="${!canDraw}">draw</mwc-button>

        ${this.isDraw? html`

        <mwc-list>

        ${this.drawList.map( item => html`
        <mwc-list-item>
            <span> la persona ${item.name}, le regala ${item.wish} a  </span>
        </mwc-list-item>` )}

        </mwc-list>

        `:nothing}

        `
    }
}
customElements.define('person-draw', PersonDraw);
