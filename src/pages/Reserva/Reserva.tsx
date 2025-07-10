import { useEffect, useState } from "react";
import "./Reserva.css";

interface Car {
  id: number;
  modelo: string;
  categoria: string;
  cambio: string;
  arCondicionado: boolean;
  imagem: string;
  preco: number;
}

export default function Reserva() {
  const [carros, setCarros] = useState<Car[]>([]);

  useEffect(() => {
    setCarros([
      {
        id: 1,
        modelo: "Fiat Mobi Like 1.0",
        categoria: "Econômico",
        cambio: "Manual",
        arCondicionado: true,
        imagem: "/assets/carros/mobi.png",
        preco: 79.9,
      },
      {
        id: 2,
        modelo: "Chevrolet Onix Plus LT 1.0",
        categoria: "Intermediário",
        cambio: "Manual",
        arCondicionado: true,
        imagem: "/assets/carros/onix.png",
        preco: 109.9,
      },
    ]);
  }, []);

  return (
    <div className="reserva-container">
      <div className="reserva-container-veicles">
        <section className="veiculos-disponiveis">
          <h2>Veículos Disponíveis</h2>
          <div className="veiculos-grid">
            {carros.map((carro) => (
              <div className="card-veiculo" key={carro.id}>
                <img src={carro.imagem} alt={carro.modelo} />
                <h3>{carro.modelo}</h3> 
                <p>
                  {carro.categoria} - {carro.cambio}
                </p>
                <p>R$ {carro.preco.toFixed(2)} / dia</p>
                <button>Reservar</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
