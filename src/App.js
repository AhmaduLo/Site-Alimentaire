import "./App.scss";
import NavBar from "../src/Composents/NavBar";
import Produit from "../src/Composents/Produit";
import NavProd from "./Composents/NavProd";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header><NavBar/></header>

      <section>
      <Produit/>
      <NavProd/>
      </section>
     
      </div>
    </div>
  );
}

export default App;
