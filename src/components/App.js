import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

function App() {
  return (
    <div>
      <Banner />
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
  </div>
);*/

export default App;
