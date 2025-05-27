import { html, css, LitElement, nothing, } from "lit";
import "./assets/add-participant";
import "./assets/wish-list"
import "./assets/person-draw"


export class SecretSanta extends LitElement{

  static get properties(){
    return {


      participantList: { type: Array },
      wishesList: { type: Array },
    };
  }

  static get styles(){
    return css``;
  }

  constructor(){
    super();
    this.participantList = [];
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
    console.log(this.participantList)
    
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
    
    <add-participant
    @PersonList=${(e) => this.createParticipantList(e.detail)}
    ></add-participant>    
    
    <div>
    ${this.participantList.length > 0 ? html`
      <wish-list
    .drawList=${this.participantList}
    @toggleWish=${(e) => this.handleWish(e.detail)} 
    ></wish-list>`
     : `no hay participantes`}
    </div>

    ${this.participantList.length > 0 &&
      this.participantList.every(p => p.wish.length >= 1)
        ? html`<person-draw></person-draw>`
        : nothing}
      
    `;
  }


}

customElements.define("secret-santa", SecretSanta);