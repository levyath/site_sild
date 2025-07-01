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

      <div className="reserva-container-form">
        <div className="reserva-content">
          <h1>Faça sua Reserva</h1>
          <p>
            Escolha as opções abaixo para encontrar o veículo ideal para sua
            jornada.
          </p>

          <form className="reserva-form">
            <div className="form-group">
              <label htmlFor="localRetirada">Local de Retirada</label>
              <input
                type="text"
                id="localRetirada"
                placeholder="Ex: São Paulo - SP"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dataRetirada">Data de Retirada</label>
              <input type="date" id="dataRetirada" required />
            </div>

            <div className="form-group">
              <label htmlFor="horarioRetirada">Horário de Retirada</label>
              <input type="time" id="horarioRetirada" required />
            </div>

            <div className="form-group">
              <label htmlFor="dataDevolucao">Data de Devolução</label>
              <input type="date" id="dataDevolucao" required />
            </div>

            <div className="form-group">
              <label htmlFor="horarioDevolucao">Horário de Devolução</label>
              <input type="time" id="horarioDevolucao" required />
            </div>

            <div className="form-group">
              <label htmlFor="categoria">Categoria do Veículo</label>
              <select id="categoria" required>
                <option value="">Selecione...</option>
                <option value="economico">Econômico</option>
                <option value="intermediario">Intermediário</option>
                <option value="suv">SUV</option>
                <option value="luxo">Luxo</option>
              </select>
            </div>

            <button type="submit" className="botao-reservar">
              Buscar Veículos
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
