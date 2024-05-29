import "../styles/Banner.css";
//import logo from "../assets/logo.png";

// Dans le cours, nous avons initialement écrit le composant Banner sous la forme d'un composant classique.

/*function Banner() {
  return (
    <div className="lmj-banner">
      <img src={logo} alt="la maison jungle" className="lmj-logo" />
      <h1 className="lmj-tittle">La maison de la Jungle</h1>
    </div>
  );
}*/

// nous avons réécrit le composant pour démontrer l'utilisation de la prop 'children'.
// Au lieu de définir directement le contenu à l'intérieur du composant, on utilise'children'
// pour récupérer les éléments imbriqués passés au composant Banner dans App.

function Banner({ children }) {
  return <div className="lmj-banner">{children}</div>;
}

/* Ici ce composant permet de réutiliser le même style CSS où qu'il soit utilisé,
 tout en permettant de personnaliser le contenu de la bannière depuis le composant parent.
 On peut quand même imaginer de meilleur utilisation quand même...*/

export default Banner;
