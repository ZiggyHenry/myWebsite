class Banner extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `         
            <div style="position: absolute; left: 30px; top:30px">
            <img src="banner.jpg" height="100px" style="position:absolute; z-index: 0;">
                <div style="position: relative; left:10px; top:-10px; z-index:20;">
                    <a class="banner" href="home.html" style="position:relative; top:26px">
                    <img src="home.jpg" height="70px">
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

customElements.define('main-banner', Banner);