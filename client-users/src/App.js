import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarUser from "./component/NavBarUser";
import Banner from "./component/Banner";
import Product from "./component/Product";

function App() {
  return (
    <div className="App">
      <NavBarUser />
      <Banner />
      <Product/>
    </div>
  );
}

export default App;
