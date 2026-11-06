import { useEffect, useRef, useState } from "react";

export default function CarregamentoUnico() {
  const [horaCarregada, setHoraCarregada] = useState(null);
  const [execucoesDoEfeito, setExecucoesDoEfeito] = useState(0);
  const [cliques, setCliques] = useState(0);
  const renderizacoes = useRef(0);

  renderizacoes.current += 1;

  useEffect(() => {
    console.log("[Exercício 1] efeito executado");
    setHoraCarregada(new Date().toLocaleTimeString("pt-BR"));
    setExecucoesDoEfeito((total) => total + 1);
  }, []);

  return (
    <section className="card">
      <span className="tag">Exercício 1</span>
      <h2>useEffect com array de dependências vazio</h2>
      <p className="descricao">
        A hora é definida uma única vez, na montagem. Clique no botão para
        forçar novas renderizações: o efeito não roda de novo.
      </p>

      <div className="metricas">
        <div className="metrica">
          <span>Hora carregada</span>
          <strong>{horaCarregada ?? "carregando..."}</strong>
        </div>
        <div className="metrica destaque">
          <span>Execuções do efeito</span>
          <strong>{execucoesDoEfeito}</strong>
        </div>
        <div className="metrica">
          <span>Renderizações</span>
          <strong>{renderizacoes.current}</strong>
        </div>
      </div>

      <div className="linha">
        <button onClick={() => setCliques((total) => total + 1)}>
          Re-renderizar ({cliques})
        </button>
      </div>
    </section>
  );
}
