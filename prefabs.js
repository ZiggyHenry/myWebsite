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
            <img src="/myWebsite/images/banner.jpg" height="100px" style="position:absolute; z-index: 0;">
                <div style="position: relative; left:10px; top:-10px; z-index:20;">
                    <a class="banner" href="/myWebsite/pages/home.html" style="position:relative; top:26px; text-decoration: none;" height="70px">
                        <img src="/myWebsite/images/home.jpg" height="70px"></img>
                        <span style="color: rgb(184, 192, 199); position: absolute; top: -62px; left: -10px; rotate: 312deg; font-size: 75%; z-index: 50;">Home</span>
                    </a>
                    
                    <a class="btext" href="/myWebsite/pages/pictures.html">
                    <h1 class="text">
                        Sights</h1>
                    </a>
                    <a class="btext" href="/myWebsite/pages/songs.html">
                    <h1 class="text">
                        Sounds</h1>
                    </a>
                    <a class="btext" href="/myWebsite/pages/stories.html">
                        <h1 class="text">
                            Words</h1>
                    </a>
                    <a class="btext" href="/myWebsite/pages/film.html">
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
        <link rel="icon" type="image/jpg" href="/myWebsite/images/home.jpg">
      `;
    }
}

customElements.define('main-head', boilerHead);
customElements.define('main-banner', Banner);
customElements.define('main-boiler', boiler);
