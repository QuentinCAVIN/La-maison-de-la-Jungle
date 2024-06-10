import { useState } from "react";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";

function ShoppingList({ cart, updateCart }) {
  const [categorieSelected, updateCategorieSelected] = useState("all");
  //*** Logique pour stocker les catégorie dans le local state déclaré plus haut et l'utiliser dans le component Categories***/
  // On récupére toutes les catégories dans une liste
  const duplicatedCategories = plantList.map((plant) => plant.category);
  // On filtre cette liste pour garder uniquement un élément
  const categories = duplicatedCategories.filter(
    (category, index) => duplicatedCategories.indexOf(category) === index //IndexOf renvoie l'index du premier (category) rencontré
  );

  //On utilise .filter pour afficher uniquement les plantes de la catégorie seléctionné
  let plantFiltredByCategory = plantList;

  if (categorieSelected !== "all") {
    plantFiltredByCategory = plantList.filter(
      (plant) => plant.category === categorieSelected
    );
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        updateCategorieSelected={updateCategorieSelected}
      />
      <ul className="lmj-plant-list">
        {plantFiltredByCategory.map(
          (
            { name, cover, id, light, water, price } /*à la place de (plant)*/
          ) => (
            // On utilise la déstructuration({propriété1 , propriété3}) pour récupérer directement les propriétés utiles de "plant"
            // On simplifie ainsi la syntaxe en évitant d'écrire name=plant.name

            <div key={id}>
              <PlantItem // Ici on utilise des props pour pouvoir passer des élément au composant PlantItem
                name={name}
                cover={cover}
                light={light}
                water={water}
                price={price}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
              {cart.some((plant) => plant.name === name) ? ( // some retourne true si au moins un élément du tableau satisfait la condition spécifiée dans la fonction callback
                <button onClick={() => removeToCart(name, price)}>
                  Retirer
                </button>
              ) : null}
            </div>
          )
        )}
      </ul>
    </div>
  );

  //Fonction pour ajouter un article au panier
  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    //Si la plante ajouté est déja dans le panier...
    if (currentPlantSaved) {
      // ... on crée une nouvelle liste du contenue du panier en retirant la plante déja présente...
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      //... et on rajoute au panier la plante retirée en augmentant sa quantité de 1
      updateCart([
        ...cartFilteredCurrentPlant, //utilisation du spread operator pour ajouter tout les élément du tableau...
        /*...avec un element en plus: */ {
          name,
          price,
          amount: currentPlantSaved.amount + 1,
        },
      ]);
    } else {
      // si la plante ajouté n'est pas dans le panier, on l'ajoute ici
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  //Fonction pour retirer un artice du panier
  function removeToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    // ... on crée une nouvelle liste du contenue du panier en retirant la plante déja présente...
    const cartFilteredCurrentPlant = cart.filter(
      (plant) => plant.name !== name
    );
    if (currentPlantSaved.amount > 1) {
      //... et on rajoute au panier la plante retirée en augmentant sa quantité de 1
      updateCart([
        ...cartFilteredCurrentPlant, //utilisation du spread operator pour ajouter tout les élément du tableau...
        /*...avec un element en plus: */ {
          name,
          price,
          amount: currentPlantSaved.amount - 1,
        },
      ]);
    } else {
      updateCart(cartFilteredCurrentPlant);
    }
  }
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
