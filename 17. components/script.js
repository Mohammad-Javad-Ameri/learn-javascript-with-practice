//components and custom elements

/*
when we want to create a section in our website or program
and this section will repeat more than one time and only content of them are different
we create custom elements in html and js then we use that component multiple times
*/

//2. create the template of this element
const template = document.createElement("template");
//we should create a template that is reused in project
//link this components only css to it also
template.innerHTML = `
    <link rel="stylesheet" href="css/site-user.css">
    <h2>this component only prints a headline </h2>
    <hr/>
`;
//1. create a custom html element that inheritate all real html elements
class SiteUser extends HTMLElement {
    constructor() {
        super();
        //codes here will executes when a site-user tag creates
        //can be this.innerHtml=`all the html tags we want`; but its not efficient!
        //right way - static code that should be here
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    //lifecycle methods - use if you want
    connectedCallback() {
        //these codes will executes while a custom element is created
        //like event handling
        let changeColor = this.shadowRoot.querySelector("h1");
        changeColor.addEventListener("click", () => {
            this.remove;
        });
    }
    disconnectedCallback() {
        //this will happen if element is removed
        let removeH1 = this.shadowRoot.querySelector("h1");
        this.removeAttribute.removeEventListener("click", this.remove());
    }
    /* other methods
  adoptedCalback => when custom element is moved to a new document
  attributeChangedCallback: when one of custom elements attributes is added, removed or changed

  */
}
window.customElements.define("site-user", SiteUser);

//now we can use a tag like: <site-user></site-user>
//check it out in index.html file in this folder
//whenever we create a tag in our html SiteUser constructor() executes

//component base projects
/*
we have a folder called components
in this folder we have all components folders like:
header - site-user - footer etc.
in header we have like: 
header.js header.css 
in site-user.js we export({SiteUser}) 
in main app.js we import { SiteUser } from "addres";
*/

//slots - to show inner taqs in custom html
/*
    just add <slot></slot> wherever in template.innerHTML to render all taqs in there
    if you want to add specific inner taq just add a slot="slotName" in html tag and
    use this in template.innerHTML : <slot name="slotName"></slot>
*/
