import { LitElement, css, html } from 'lit';
import '@material/mwc-textfield';
import '@material/mwc-button'

export class AddParticipant extends LitElement {

    static get properties(){
        return{

            participant: { type: String },
            

        }
    }
    static get styles(){
        return css`
        
        mwc-textfield.rounded {
            --mdc-shape-small: 28px;
        }
            
        
        `;
    }

    constructor(){
        super();
        this.participant = ''
    }

    addPerson(){
        
        this.participant = this.shadowRoot.querySelector('#inputAdd').value;
        console.log(this.participant)
        
        this.dispatchEvent(new CustomEvent('createPersonList', { detail: this.participant}));

    }
    
    render() {
        return html`
        <mwc-textfield
            id="inputAdd"
            class="rounded"
            label="My Textfield"
            outlined>
        </mwc-textfield>
        <mwc-button @click=${this.addPerson}>agregar</mwc-button>

        `;
    }

}
customElements.define('add-participant', AddParticipant);
