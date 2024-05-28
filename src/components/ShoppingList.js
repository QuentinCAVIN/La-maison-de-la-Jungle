import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";

function ShoppingList() {
  // On récupére toutes les catégories dans une liste
  const categories = plantList.map((plant) => plant.category);
  // On filtre cette liste pour garder uniquement un élément
  const categoriesUnique = plantList
    .map((plant) => plant.category)
    .filter(
      (category, i) => categories.indexOf(category) === i //IndexOf renvoie l'index du premier (category) rencontré
    );

  return (
    <div>
      <ul>
        {categoriesUnique.map((category) => (
          <li key={`${category}`}> {category} </li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={`${plant.id}`} className="lmj-plant-item">
            {plant.name}
            {plant.isSpecialOffer ? (
              <div className="lmj-sales">SOLDE</div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

//Solution proposé par le cours :

//.reduce() est utilsié pour extraire les categories de plantes unique
// l'accumulateur (acc) est un parmatétre qui va pouvoir evoluer a chaque callback de la methode
/*
function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
            // si la category est déja présente dans l'accumulmateur on renvoi l'accumulateur tell quel avec "acc"
            // sinon on ajoute  grace à .contact un element au tableau
			acc.includes(plant.category) ? acc : acc.concat(plant.category), 
		[] // ici l'accumulateur (acc) est initialisé avec un tableau vide
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name}</li>
				))}
			</ul>
		</div>
	)
}
*/

export default ShoppingList;

/*

À partir de cette liste de plantes, vous devrez :

Constituer une nouvelle liste de manière dynamique qui extrait les catégories uniques de plantes (que nous utiliserons également plus tard). 

Il existe plusieurs solutions pour créer une liste d'éléments uniques, mais je vous conseille de vous pencher sur la méthode reduce()  ou bienforEach().

Afficher la liste des catégories de plantes au-dessus de la liste des plantes à vendre.

Attention à votre  key !

*/
