class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="navbar">
            <a href="index.html"><img src="images/signature.png"></a>
            <h4 class="name">Gael Santos</h4>
            <nav class="nav">
                <h5 class="option">
                    <a href="index.html">Home</a>
                </h5>
                <h5 class="option">
                    <a href="aboutme.html">About Me</a>
                </h5>
                <h5 class="option">
                    <a href="work.html">Work</a>
                </h5>
                <h5 class="option">
                    <a href="Gael Santos - Resume.pdf" target="_blank">Resume</a>
                </h5>
            </nav>
        </div>
        `
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>For any questions or if you just want to reach out, you can contact me at gaelsantosrodriguez0@gmail.com</p>
            <div class="socials">
                <a href="https://www.instagram.com/gsantosreal/"  target="_blank"><img src="images/instagram2.png"></a>
                <a href="https://github.com/gsantosreal"  target="_blank"><img src="images/github.png"></a>
                <a href="https://www.linkedin.com/in/gael-santos-131089236/" target="_blank"><img src="images/linkedin.png"></a>
            </div>
        </footer>
        `
    }
}

customElements.define("my-navbar", MyNavbar);
customElements.define("my-footer", MyFooter);