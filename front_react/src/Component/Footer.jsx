import "../CSS/Footer.css";

function Footer() {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Zipgab<span>.info</span>
          </h3>

          <p class="footer-company-name">LGCNS SCOURT © 2021</p>
        </div>

        <div class="footer-center">
          <p class="footer-links">
            <a href="http://dev.zipgab.info/" class="link-1">
              Home
            </a>

            <a href="https://github.com/Sol-cito/zipkap_project">Github</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:ybg4828@gmail.com">ybg4828@gmail.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
