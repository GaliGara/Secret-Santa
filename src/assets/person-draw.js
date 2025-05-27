import { LitElement, html, css, nothing } from 'lit';
import '@material/mwc-button'

export class PersonDraw extends LitElement {
    
    static get styles(){
        return css``
    }

    static get properties(){
        return {
            draw: { type: Boolean },
            drawList : { type: Array},
        }
    }

    constructor(){
        super();
        this.draw = false;
        this.drawList = [];

    }


    handleDraw(){

        this.draw = true
    }

    render(){
        //este const en esta situacion es correcto porque solo condiciona este boton
        //  y no se ocupa mayor logica, de ser lo contrario es mejor usar un get
        const canDraw = this.drawList.every(p => p.wish.length >= 1)
        return html`
        <mwc-button @click="${this.handleDraw}" ?disabled="${!canDraw}">draw</mwc-button>

        `
    }
}
customElements.define('person-draw', PersonDraw);
