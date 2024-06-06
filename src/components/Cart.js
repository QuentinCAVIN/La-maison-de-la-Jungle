import "../styles/Cart.css";
import { useState } from "react";

function Cart() {
  const monsteraPrice = 8;
  // Avec cette ligne, on stocke dans "cart" la valeur du "local state" (useState) lié au composant Cart.
  // "updateCart" est une fonction (nommée librement) fournie par React qui permet de modifier la valeur de "cart".
  // Enfin, useState(0) permet d'initialiser la valeur de l'état avec 0, qui peut être un nombre, un booléen, ou une chaîne.
  const [cart, updateCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer le panier
      </button>
      <h2>Panier</h2>
      <div>
        Monstera : {monsteraPrice}€
        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
      </div>
      <h3>Total : {monsteraPrice * cart}€</h3>
      <button onClick={() => updateCart(0)}> Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        {" "}
        Ouvrir le panier
      </button>
    </div>
  );
}
export default Cart;
