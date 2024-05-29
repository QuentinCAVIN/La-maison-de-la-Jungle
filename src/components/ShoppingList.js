import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
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
        {plantList.map(
          ({ name, cover, id, light, water } /*à la place de (plant)*/) => (
            // On utilise la déstructuration({propriété1 , propriété3}) pour récupérer directement les propriétés utiles de "plant"
            // On simplifie ainsi la syntaxe en évitant d'écrire name=plant.name
            <PlantItem // Ici on utilise des props pour pouvoir passer des élément au composant PlantItem
              name={name}
              cover={cover}
              id={id}
              light={light}
              water={water}
            />
          )
        )}
      </ul>
    </div>
  );
}

//Solution proposé par le cours avec .reduce() :

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
