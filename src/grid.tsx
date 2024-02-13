import { useState } from "react";
import "./App.css";

function ButtonClickHandler() {
  const [buttons, setButtons] = useState(Array(3).fill(0));

  const handleButtonClick = (index = 0) => {
    const newButtons = [...buttons];
    newButtons[index] += 1;
    setButtons(newButtons);
  };

  return (
    <>
      <div>
        {buttons.map((buttonValue, index) => (
          <button key={index} onClick={() => handleButtonClick(index)}>
            {buttonValue}
          </button>
        ))}
      </div>
    </>
  );
}
export default ButtonClickHandler;
