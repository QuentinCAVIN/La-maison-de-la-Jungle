import { useState } from "react";

function QuestionFormControlle() {
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
