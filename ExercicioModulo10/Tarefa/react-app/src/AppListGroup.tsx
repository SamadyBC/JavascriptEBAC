import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  ); // Podemos usar os modulos react como html tags - nesse caso estamos usando o auto fechamento na sintaxe de fechamento
}

export default App;
