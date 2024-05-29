import Banner from "./Banner";
import logo from "../assets/logo.png";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

function App() {
  return (
    // On utilise différents composant : Cart, ShoppingList, Banner
    <div>
      {/* La particularité de Banner ici est que les
          Les éléments imbriqués (img et h1) seront passés en tant que children au composant Banner. */}
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <Cart />
      <ShoppingList />
    </div>
  );
}

// on peut également l'écrire avec une fonction fléchée :
/*const App = () => (
  <div>
    <Banner />
    <Cart />
    <ShoppingList />
  </div>
);*/

export default App;
