class Banner extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `         
            <div id="banner" style="position: absolute; left: 30px; top:30px">
                <img src="banner.jpg" height="100px">
                <a href="home.html">
                <img src="home.jpg" height="70px" style="position: absolute; 
                    left: 10px; top: 17px;">
                </a>
                <a href="pictures.html">
                <h1 class="text" style="position: absolute; left: 100px; top: 10px;">
                    Pictures</h1>
                </a>
                <a href="songs.html">
                <h1 class="text" style="position: absolute; left: 230px; top: 10px;">
                    Songs</h1>
                </a>
                <a href="stories.html">
                    <h1 class="text" style="position: absolute; left: 330px; top: 10px;">
                        Stories</h1>
                </a>
                <a href="film.html">
                    <h1 class="text" style="position: absolute; left: 440px; top: 10px;">
                        film</h1>
                </a>
            </div>
      `;
    }
  }

customElements.define('main-banner', Banner);