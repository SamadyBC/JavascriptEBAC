import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button OnClick={() => console.log("Pushed button")}>My Button</Button>
    </div>
  ); // Podemos usar os modulos react como html tags - nesse caso estamos usando o auto fechamento na sintaxe de fechamento
}

export default App;
