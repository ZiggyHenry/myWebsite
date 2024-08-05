class template extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <!--[put html here!]-->
      `;
    }
}

class Banner extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
            <div style="position: absolute; left: 30px; top:30px; white-space: nowrap;">
            <img src="banner.jpg" height="100px" style="position:absolute; z-index: 0;">
                <div style="position: relative; left:10px; top:-10px; z-index:20;">
                    <a class="banner" href="home.html" style="position:relative; top:26px">
                        <img src="home.jpg" height="70px">
                        <p style="text-decoration: none; display: none;
                        ">Home!</p>
                    </a>
                    
                    <a class="btext" href="pictures.html">
                    <h1 class="text">
                        Pictures</h1>
                    </a>
                    <a class="btext" href="songs.html">
                    <h1 class="text">
                        Songs</h1>
                    </a>
                    <a class="btext" href="stories.html">
                        <h1 class="text">
                            Stories</h1>
                    </a>
                    <a class="btext" href="film.html">
                        <h1 class="text">
                            film</h1>
                    </a>
                    
                </div>
                
            </div>
      `;
    }
  }

class boiler extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!--put stuff here-->
        `;
    }
}

class boilerHead extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/jpg" href="home.jpg">
      `;
    }
}

customElements.define('main-head', boilerHead);
customElements.define('main-banner', Banner);
customElements.define('main-boiler', boiler);
