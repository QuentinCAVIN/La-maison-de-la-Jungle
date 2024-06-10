import "../styles/Cart.css";
import { useState } from "react";
import { useEffect } from "react";

function Cart({ cart, updateCart }) {
  // on récupére avec la destructuration les props passé dans App
  // Avec cette ligne, on stocke dans "isOpen" la valeur du "local state" (useState) lié au composant Cart.
  // "setIsOpen" est une fonction (nommée librement) fournie par React qui permet de modifier la valeur de "isOpen".
  // Enfin, useState(false) permet d'initialiser la valeur de l'état avec false, qui peut être un nombre, un booléen, ou une chaîne.
  const [isOpen, setIsOpen] = useState(false);

  // Calcul du total du panier en multipliant la quantité de chaque type de plante par son prix et en ajoutant ces montants.
  // - L'accumulateur `acc` stocke le montant total en cours. `plantType` représente chaque type de plante dans le panier
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total]);

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer le panier
      </button>

      <h2>Panier</h2>
      <ul>
        {cart.map(({ name, amount, price }, index) => (
          <div key={`${name}-${index}`}>
            {" "}
            {name} {price}€ x {amount}
          </div>
        ))}
      </ul>
      <h3>Total : {total}€</h3>
      <button onClick={() => updateCart([])}> Vider le panier</button>
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
