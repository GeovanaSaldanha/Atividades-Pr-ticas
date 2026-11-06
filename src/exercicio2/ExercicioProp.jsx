import { useState } from "react";
import MonitorDeProp from "./MonitorDeProp.jsx";

export default function ExercicioProp() {
  const [texto, setTexto] = useState("React");
  const [cliques, setCliques] = useState(0);

  return (
    <section className="card">
      <span className="tag">Exercício 2</span>
      <h2>useEffect observando uma prop</h2>
      <p className="descricao">
        O log acontece na montagem e a cada mudança da prop. O botão abaixo
        re-renderiza o componente sem alterar a prop, então não gera log.
      </p>

      <div className="linha">
        <input
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
          placeholder="Digite para alterar a prop"
        />
        <button className="secundario" onClick={() => setCliques((c) => c + 1)}>
          Re-renderizar ({cliques})
        </button>
      </div>

      <MonitorDeProp valor={texto} />
    </section>
  );
}
