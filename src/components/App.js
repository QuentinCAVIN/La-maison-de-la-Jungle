import Banner from "./Banner";
import logo from "../assets/logo.png";
import Cart from "./Cart.js";
import ShoppingList from "./ShoppingList";
import QuestionFormNonControlle from "./QuestionFormNonControlle.js";
import QuestionFormControlle from "./QuestionFormControlle.js";

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
      <QuestionFormNonControlle />
      <QuestionFormControlle />
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
