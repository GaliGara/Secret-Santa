import { html, css, LitElement, } from "lit";
import "./assets/add-participant";
import "./assets/wish-list"

export class SecretSanta extends LitElement{

  static get properties(){
    return {


      participantList: { type: Array },
    };
  }

  static get styles(){
    return css``;
  }

  constructor(){
    super();
    this.participantList = [];
  }


  createParticipantList(person){
    this.participantList = [ ...this.participantList, {person}]
    console.log('list', this.participantList)
  }

  render(){
    return html `
    
    <h1>Component</h1>
    <add-participant
    @PersonList=${(e) => this.createParticipantList(e.detail)}
    ></add-participant>

    <wish-list
    .drawList=${this.participantList} 
    ></wihs-list>
    `;
  }


}

customElements.define("secret-santa", SecretSanta);