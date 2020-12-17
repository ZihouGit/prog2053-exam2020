import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object },
      username: {type:Boolean},
      all: {type:Boolean}
    };
  }

  constructor() {
    super();
  }

  // din kode her

  render() {
    if (this.oldpwd !== "")
      this.username = true;
      else if (this.oldpwd === "")
        this.username = false;
      else if (this.oldpwd !== "" && this.newpwd !== "")
        this.all = true;
      else if (this.oldpwd === "" || this.newpwd === "")
        this.all = false;
    return html`
      <form action="update.php" method="POST">
        First name: <input type="text" name="firstName"><br>
        Last name: <input type="text" name="lastName"><br>
        ${this.username ?
        html`
          Username <input type="text" name="username"><br>
        `:
        html``}
        ${this.all ?
        html`
          uid <input type="number" name="uid"><br>
          oldpwd <input type="text" name="oldpwd"><br>
          newpwd <input type="text" name="newpwd"><br>
        `:
        html``}
      </form>
    `;
  }

}
customElements.define('edit-user', EditUser);
