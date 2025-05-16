import { LitElement, html, css } from 'lit';
import '@material/mwc-button'

export class PersonDraw extends LitElement {
    
    static get styles(){
        return css``
    }

    static get properties(){
        return {
            draw: { type: Boolean },
        }
    }

    constructor(){
        super();
        this.draw = false;

    }

    render(){
        return html`
        <mwc-button>draw</mwc-button>
        `
    }
}
customElements.define('person-draw', PersonDraw);
