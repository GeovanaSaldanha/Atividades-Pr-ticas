import CarregamentoUnico from "./exercicio1/CarregamentoUnico.jsx";
import ExercicioProp from "./exercicio2/ExercicioProp.jsx";
import ExercicioEventBus from "./exercicio3/ExercicioEventBus.jsx";

export default function App() {
  return (
    <main className="app">
      <header>
        <h1>Atividades Práticas</h1>
        <p>useEffect e comunicação entre componentes com Event Bus</p>
      </header>

      <CarregamentoUnico />
      <ExercicioProp />
      <ExercicioEventBus />
    </main>
  );
}
