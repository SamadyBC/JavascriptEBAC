import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>
        Hello<span> World </span>
      </Alert>
    </div>
  ); // Podemos usar os modulos react como html tags - nesse caso estamos usando o auto fechamento na sintaxe de fechamento
}

export default App;
