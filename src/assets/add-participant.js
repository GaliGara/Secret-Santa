import { LitElement, css, html, nothing } from 'lit';
import '@material/mwc-textfield';
import '@material/mwc-button'

export class AddParticipant extends LitElement {

    static get properties(){
        return{

            participant: { type: String },
            minimumParticipants: { type: Boolean },
            participanId: { type: Number },

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
        this.participanId = 0
        
    }

    addPerson(){        
        this.participant = this.shadowRoot.querySelector('#inputAdd').value;
        this.dispatchEvent(new CustomEvent('PersonList', { detail: {name: this.participant, id: this.participanId++}}));
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
