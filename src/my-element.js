import { html, css, LitElement, } from "lit";

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
    `;
  }


}

customElements.define("secret-santa", SecretSanta);