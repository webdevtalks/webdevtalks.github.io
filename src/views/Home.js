import logo from '../assets/images/logo.png';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="logo-wrapper">
        <img src={logo} className="logo" alt="Logo WDT" />
      </div>
      <ul className="social-icons">
        <li>
          <a href="https://www.facebook.com/ColimaWebDevTalks" target="_blank"><i className="fa fa-facebook-official fa-4x" aria-hidden="true"></i></a>
        </li>

        <li>
          <a href="https://www.instagram.com/webdevtalksmx" target="_blank"><i className="fa fa-instagram fa-4x" aria-hidden="true"></i></a>
        </li>

        <li>
          <a href="https://twitter.com/webdevtalksmx" target="_blank"><i className="fa-brands fa-x-twitter fa-4x" aria-hidden="true"></i></a>
        </li>

        <li>
          <a href="https://www.linkedin.com/company/web-dev-talks" target="_blank"><i className="fa fa-linkedin fa-4x" aria-hidden="true"></i></a>
        </li>

        <li>
          <a href="https://patreon.com/WebDevTalksColima" target="_blank"><i className="fa-brands fa-patreon fa-4x" aria-hidden="true"></i></a>
        </li>

        <li>
          <a href="mailto:contacto@webdevtalks.mx" target="_blank"><i className="fa fa-envelope-o fa-4x" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
