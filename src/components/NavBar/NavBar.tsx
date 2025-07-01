import "./NavBar.css";
import logoImg from "../../assets/logo.png";
// import homeIcon from "../assets/home.svg";
// import reservarIcon from "../assets/reservar.svg";
// import reservasIcon from "../assets/reservas.svg";
// import userIcon from "../assets/user.svg";

export default function NavBar() {
  return (
    <div className="container-navbar">
      <div className="logo">
        <img src={logoImg} alt="Logo" />
      </div>

      <div className="navegacao">
        <nav>
          <ul className="menus">
            <li className="HomePage">
              {/* <figure>
                <img src={homeIcon} alt="Home" />
              </figure> */}
              <a href="#">HOME</a>
            </li>
            <li className="ReservarAgora">
              {/* <figure>
                <img src={reservarIcon} alt="Reservar Agora" />
              </figure> */}
              <a href="#">RESERVAR AGORA</a>
            </li>
            <li className="MinhasReservas">
              {/* <figure>
                <img src={reservasIcon} alt="Minhas Reservas" />
              </figure> */}
              <a href="#">MINHAS RESERVAS</a>
            </li>
            <li className="Login">
              {/* <figure>
                <img src={userIcon} alt="Entrar" />
              </figure> */}
              <a href="#">ENTRAR</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
