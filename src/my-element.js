import { html, css, LitElement, } from "lit";
import "./assets/add-participant";

export class SecretSanta extends LitElement{

  static get properties(){
    return {

    };
  }

  static get styles(){
    return css``;
  }

  constructor(){
    super();
  }

  render(){
    return html `
    
    <h1>Component</h1>
    <add-participant></add-participant>
    `;
  }


}

customElements.define("secret-santa", SecretSanta);