import "./App.css";
import { CatFact } from "./CatFact";
import { GuessAge } from "./GuessAge";
import { Excuse } from "./Excuse";

function App() {
  return (
    <div className="App">
      <CatFact />
      <hr />
      <GuessAge />
      <hr />
      <Excuse />
    </div>
  );
}

export default App;
