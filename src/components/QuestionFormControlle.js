import { useState } from "react";

function QuestionFormControlle() {
  // Avec cette ligne, on stocke dans "inputvalue" la valeur du "local state" (useState) lié au composant QuestionFormControlle.
  // "setInputValue" est une fonction (nommée librement) fournie par React qui permet de modifier la valeur de "inputValue".
  // Enfin, useState("Posez votre question ici") permet d'initialiser la valeur de l'état avec une string, qui peut être aussi un nombre ou un booléen
  const [inputValue, setInputValue] = useState("Posez votre question ici");

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => alert(inputValue)}> Alertez moi</button>
    </div>
  );
}

export default QuestionFormControlle;
