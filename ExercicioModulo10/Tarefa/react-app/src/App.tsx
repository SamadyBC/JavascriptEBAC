import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button OnClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  ); // Podemos usar os modulos react como html tags - nesse caso estamos usando o auto fechamento na sintaxe de fechamento
}

export default App;
