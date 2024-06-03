import CareScale from "./CareScale";
import "../styles/PlantItem.css";

//les props permettent de passer des éléments du parents vers les enfants, et uniquement dans ce sens
//Voir d'autre syntaxes de 'props' ici en parametre dans CareScale.js
function PlantItem({ name, cover, id, light, water }) {
  return (
    <li
      key={`${id}`}
      className="lmj-plant-item"
      onClick={() => handleClick(name)}
    >
      <img src={cover} className="lmj-plant-item-cover" alt={`${name} cover`} />
      {name}
      <CareScale careType="water" scaleValue={water} />
      <CareScale careType="light" scaleValue={light} />
    </li>
  );
}

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix`);
}

export default PlantItem;
