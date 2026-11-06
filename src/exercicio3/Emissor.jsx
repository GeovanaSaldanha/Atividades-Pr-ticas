import { useState } from "react";
import { emit, EVENTOS } from "./eventBus.js";

export default function Emissor() {
  const [enviados, setEnviados] = useState(0);

  function enviar() {
    const id = enviados + 1;
    setEnviados(id);
    emit(EVENTOS.NOTIFICACAO, {
      id,
      mensagem: `Notificação #${id}`,
      hora: new Date().toLocaleTimeString("pt-BR"),
    });
  }

  return (
    <div className="card">
      <span className="tag">Emissor</span>
      <h2>Componente A</h2>
      <p className="descricao">Emite o evento "{EVENTOS.NOTIFICACAO}" ao clicar.</p>
      <div className="linha">
        <button onClick={enviar}>Emitir evento</button>
      </div>
      <div className="metrica">
        <span>Eventos emitidos</span>
        <strong>{enviados}</strong>
      </div>
    </div>
  );
}
