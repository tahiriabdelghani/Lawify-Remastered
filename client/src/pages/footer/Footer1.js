import "./Footer1.css";
function Footer1() {
  return (
    <body>
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="#">
              <i class="icon ion-social-instagram"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-snapchat"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-twitter"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">
                Politique de confidentialité | Conditions d'utilisation
              </a>
            </li>
            <li className="copyright">
              © Copyright Avocat.com 2022 - Tous droits réservés..
            </li>
          </ul>
        </footer>
      </div>
    </body>
  );
}

export default Footer1;
