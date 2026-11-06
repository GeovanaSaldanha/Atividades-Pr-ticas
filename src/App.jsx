import CarregamentoUnico from "./exercicio1/CarregamentoUnico.jsx";
import ExercicioProp from "./exercicio2/ExercicioProp.jsx";

export default function App() {
  return (
    <main className="app">
      <header>
        <h1>Atividades Práticas</h1>
        <p>useEffect e comunicação entre componentes com Event Bus</p>
      </header>

      <CarregamentoUnico />
      <ExercicioProp />
    </main>
  );
}
