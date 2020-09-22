class NvStarRating extends HTMLElement {
  constructor(){
    super();
    this._root = this.attachShadow({mode: "open"});
    this.stop = null;
    this._bottom = null;
  }

  connectedCallback(){
    this._root.innerHTML = `
     <style></style>
     <div class="container">
       <div class="top">
        <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>
       </div>
       <div class="bottom">
         <span data-value="5">*</span>
         <span data-value="4">*</span>
         <span data-value="3">*</span>
         <span data-value="2">*</span>
         <span data-value="1">*</span>
       </div>
     </div>
    `
  }

}

window.customElements.define('nv-star-rating', NvStarRating);