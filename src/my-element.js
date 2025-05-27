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
  // Usamos `.some()` para mostrar el componente <add-participant> siempre que
  // al menos un participante tenga el array `wish` vacío.
  // Esto permite que se pueda seguir agregando participantes mientras haya
  // alguien sin deseos agregados.
  // Si usáramos `.every()` en cambio, solo se mostraría si TODOS tienen `wish` vacío,
  // lo que impediría agregar más participantes si hay mezcla de participantes con y sin deseos.
    const necesitaAgregarParticipante =
    this.participantList.length === 0 ||    
    this.participantList.some(p => p.wish.length === 0);
    return html `
    
    <h1>Secret Santa</h1>
    
    ${necesitaAgregarParticipante ? html `
    <add-participant
    @PersonList=${(e) => this.createParticipantList(e.detail)}
    ></add-participant>` 
      : nothing}    
    
    <div>
    ${this.participantList.length > 0 ? html`
      <wish-list
    .drawList=${this.participantList}
    @toggleWish=${(e) => this.handleWish(e.detail)} 
    ></wish-list>`
     : `no hay participantes`}

   ${(this.participantList.length >= 3)
        ? html`<person-draw
        .drawList=${this.participantList}
        ></person-draw>`
        : nothing}

    </div>

 
      
    `;
  }


}

customElements.define("secret-santa", SecretSanta);