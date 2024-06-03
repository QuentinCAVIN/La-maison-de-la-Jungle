import sun from "../assets/sun.svg";
import water from "../assets/water.svg";
function CareScale(props) {
  //Destructuration : Syntaxe permise depuis l'ES6 qui limite les déclarations
  const { scaleValue, careType } = props;
  /*
  sans cette syntaxe on déclare:

  const scaleValue = props.scaleValue;
  const careType = props.careType;

  on peut également écrire 
  function CareScale({scaleValue, careType}) {
  */

  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={sun} alt="sun-icon" />
    ) : (
      <img src={water} alt="water-icon" />
    );

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;