const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: flex;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      border-radius: 0 1.5rem 1.5rem 0;
      background: white;
      padding: 1rem 2rem;
    }
    nav {
      height: 100%;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      padding: 0.5rem 0;
    }
    a {
      text-decoration: none;
      border-bottom: 2px solid transparent;
      color: RoyalBlue;
    }
    a:hover {
      border-color: MediumPurple;
    }
  </style>
  <nav>
    <ul>
      <li><a href="ex1.html">Exercício 1</a></li>
      <li><a href="ex2.html">Exercício 2</a></li>
      <li><a href="ex3.html">Exercício 3</a></li>
      <li><a href="ex4.html">Exercício 4</a></li>
    </ul>
  </nav>
`;

class MenuComponent extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-menu', MenuComponent);

