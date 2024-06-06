import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

function ShoppingList({ cart, updateCart }) {
  // On récupére toutes les catégories dans une liste
  const categories = plantList.map((plant) => plant.category);
  // On filtre cette liste pour garder uniquement un élément
  const categoriesUnique = categories.filter(
    (category, i) => categories.indexOf(category) === i //IndexOf renvoie l'index du premier (category) rencontré
  );

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

  return (
    <div className="lmj-shopping-list">
      <ul>
        {categoriesUnique.map((category) => (
          <li key={`${category}`}> {category} </li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(
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
