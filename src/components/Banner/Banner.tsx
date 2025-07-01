import "./Banner.css";
import banner from "../../assets/banner1.png";

export default function Banner() {
  return (
    <div className="container-banner">
      <img src={banner} alt="Banner" className="background-image" />
      <div className="content-overlay">
        <h1>A Liberdade de Viajar é sua!</h1>
        <p>
          Na Você-Aluga, garantimos o veículo perfeito para cada jornada. Com
          diversas filiais espalhadas pelo Brasil, nossa rede de atendimento
          está sempre preparada para oferecer locações ágeis e sem
          complicações.
        </p>
        <button>RESERVAR AGORA</button>
      </div>
    </div>
  );
}
