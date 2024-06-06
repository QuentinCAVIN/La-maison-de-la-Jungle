import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre email"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={(e) => emailChecker(e.target.value)} // Quand on clique a coté du champ
      />
    </footer>
  );

  function emailChecker(email) {
    if (!email.includes("@")) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
    }
  }
}

export default Footer;
