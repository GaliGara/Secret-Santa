import { html, css, LitElement, nothing, } from "lit";
import "./assets/add-participant";
import "./assets/wish-list"
import "./assets/person-draw"


export class SecretSanta extends LitElement{

  static get properties(){
    return {


      participantList: { type: Array },
      minimumParticipants: { type: Boolean },
      wishesList: { type: Array },
    };
  }

  static get styles(){
    return css``;
  }

  constructor(){
    super();
    this.participantList = [];
    this.minimumParticipants = false;
    this.wishesList = [];
  }


  createParticipantList(person){
    this.participantList = [
      ...this.participantList,
      {
       name: person.name,
       ID : person.id,
       wish: []
      }
    ];
  }

  handleWish(event){
    this.minimumParticipants = event
    
    this.participantList = this.participantList.map(participant => {
      if( participant.ID == event.selectID){
        return {

          ...participant,
          wish: [...participant.wish, event.wishItem], 
          
        }
      }
      return participant
    })
  }

  // handleParticipant(){

  //   this.participantList = this.participantList.map( participan => {
  //     (participan.ID == event.selectID)
  //     ? {...participant, wish: [...participant.wish, event.wishItem]}
  //     : participant
  //   })
  // }



  render(){
    return html `
    
    <h1>Secret Santa</h1>
    ${!this.minimumParticipants? html `
    
    <add-participant
    .minimumParticipants=${this.minimumParticipants}
    @PersonList=${(e) => this.createParticipantList(e.detail)}
    ></add-participant>    
    `
    : html`<person-draw></person-draw>`}


    <wish-list
    .drawList=${this.participantList}
    @toggleWish=${(e) => this.handleWish(e.detail)} 
    ></wihs-list>

    
    `;
  }


}

customElements.define("secret-santa", SecretSanta);