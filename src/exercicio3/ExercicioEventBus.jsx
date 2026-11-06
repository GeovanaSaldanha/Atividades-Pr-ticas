import Emissor from "./Emissor.jsx";
import Receptor from "./Receptor.jsx";

export default function ExercicioEventBus() {
  return (
    <section className="card">
      <span className="tag">Exercício 3</span>
      <h2>Event Bus entre componentes independentes</h2>
      <p className="descricao">
        Emissor e Receptor não são pai e filho e não compartilham props. A
        comunicação passa apenas pelo módulo eventBus.
      </p>
      <div className="duas-colunas">
        <Emissor />
        <Receptor />
      </div>
    </section>
  );
}
