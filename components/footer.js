class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `  
      <footer class="footer">
        <div class="footer-section footer-about">
            <h4>About OGCF</h4>
            <p>
                OGCF is a charity foundation dedicated to empowering the lives
                of the less privileged and widows. Through our programs and
                advocacy, we aim to inspire humanity and promote sustainable
                growth in our communities and beyond.
            </p>
        </div>
        <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="index.html"> HOME</a></li>
                <li><a href="involved.html"> GET INVOLVED</a></li>
                <li><a href="about.html"> ABOUT</a></li>
                <li><a href="impact.html"> IMPACT</a></li>
                <li><a href="services.html"> SERVICES</a></li>
                <li><a href="contact.html"> CONTACT</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter</p>
            <form action="" class="newsletter">
                <input
                type="text"
                id="newsletter"
                name="newsletter"
                placeholder="Your Email"
                />
                <button>Go</button>
            </form>
        </div>
        <div class="footer-section">
            <h4>Contact Us</h4>
            <p>No 10A & B, Queen Amina street, Aso rock Presidential villa, Abuja, Nigeria</p>
            <p>info@owasglobalcharity.org</p>
        </div>
      </footer>    
  
  `;
  }
}

customElements.define("footer-component", Footer);
