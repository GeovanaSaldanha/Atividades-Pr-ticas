import { useEffect, useState } from "react";

export default function MonitorDeProp({ valor }) {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const hora = new Date().toLocaleTimeString("pt-BR");
    console.log(`[Exercício 2] prop "valor" = "${valor}"`);
    setHistorico((anterior) => [
      ...anterior,
      { id: anterior.length + 1, valor, hora },
    ]);
  }, [valor]);

  return (
    <>
      <div className="metricas">
        <div className="metrica">
          <span>Valor atual da prop</span>
          <strong>{valor === "" ? "(vazio)" : valor}</strong>
        </div>
        <div className="metrica destaque">
          <span>Logs registrados</span>
          <strong>{historico.length}</strong>
        </div>
      </div>

      {historico.length === 0 ? (
        <p className="vazio">Nenhum log ainda.</p>
      ) : (
        <ul className="lista">
          {historico.map((item) => (
            <li key={item.id}>
              <span>valor = "{item.valor}"</span>
              <small>{item.hora}</small>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
