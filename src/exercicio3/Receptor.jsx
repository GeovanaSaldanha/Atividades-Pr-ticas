import { useEffect, useState } from "react";
import { subscribe, EVENTOS } from "./eventBus.js";

export default function Receptor() {
  const [recebidos, setRecebidos] = useState([]);

  useEffect(() => {
    const cancelar = subscribe(EVENTOS.NOTIFICACAO, (dados) => {
      setRecebidos((anterior) => [dados, ...anterior]);
    });

    return cancelar;
  }, []);

  return (
    <div className="card">
      <span className="tag">Receptor</span>
      <h2>Componente B</h2>
      <p className="descricao">Assina o evento e atualiza o próprio estado.</p>
      <div className="metrica destaque">
        <span>Eventos recebidos</span>
        <strong>{recebidos.length}</strong>
      </div>
      {recebidos.length === 0 ? (
        <p className="vazio">Aguardando eventos...</p>
      ) : (
        <ul className="lista">
          {recebidos.map((item) => (
            <li key={item.id}>
              <span>{item.mensagem}</span>
              <small>{item.hora}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
