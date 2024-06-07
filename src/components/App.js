import { useState } from "react";
import Banner from "./Banner";
import logo from "../assets/logo.png";
import Cart from "./Cart.js";
import ShoppingList from "./ShoppingList";
import QuestionFormNonControlle from "./QuestionFormNonControlle.js";
import QuestionFormControlle from "./QuestionFormControlle.js";
import Footer from "./footer.js";

function App() {
  // On conserve le local state de cart dans le composant parent, et on le fais redescendre via les props dans les composant enfants
  // ainsin on peut partager un local state entre plusieurs composant
  //voir le détail de la syntaxe dans "Cart"
  const [cart, updateCart] = useState([]);

  return (
    // On utilise différents composant : Cart, ShoppingList, Banner
    <div>
      {/* La particularité de Banner ici est que les
          Les éléments imbriqués (img et h1) seront passés en tant que children au composant Banner. */}
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>

      <QuestionFormNonControlle />
      <QuestionFormControlle />
      <Footer />
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
