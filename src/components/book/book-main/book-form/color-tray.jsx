import { useContext } from "react";
import "../../../global.css";
import BookContext from "../../book-context";

export const Colors1 = ({ handleChoosingColor }) => {
  const { colorName } = useContext(BookContext);

  return (
    <>
      <span
        className={`colors in-block ${
          colorName === "Lightning Yellow" && "color-selected"
        }`}
        id="Lightning_Yellow"
        onClick={(e) => handleChoosingColor(e)}
      ></span>
      <span
        className={`colors in-block ${
          colorName === "Eclipse Red" && "color-selected"
        }`}
        id="Eclipse_Red"
        onClick={(e) => handleChoosingColor(e)}
      ></span>
      <span
        className={`colors in-block ${
          colorName === "India Blue" && "color-selected"
        }`}
        id="India_Blue"
        onClick={(e) => handleChoosingColor(e)}
      ></span>
      <span
        className={`colors in-block ${
          colorName === "Stealth Black" && "color-selected"
        }`}
        id="Stealth_Black"
        onClick={(e) => handleChoosingColor(e)}
      ></span>
      <span
        className={`colors in-block ${
          colorName === "Mist Grey" && "color-selected"
        }`}
        id="Mist_Grey"
        onClick={(e) => handleChoosingColor(e)}
      ></span>
      <span
        className={`colors in-block ${
          colorName === "Cosmic Black" && "color-selected"
        }`}
        id="Cosmic_Black"
        onClick={(e) => handleChoosingColor(e)}
      ></span>
    </>
  );
};
export const Colors2 = ({ handleChoosingColor }) => {
  const {colorName} = useContext(BookContext)
  
  return (
    <>
      <span
        className={`colors in-block ${
          colorName === "Dark Lunatic Green" && "color-selected"
        }`}
        id="Dark_Lunatic_Green"
        onClick={(e) => handleChoosingColor(e)}
      ></span>
      <span
        className={`colors in-block ${
          colorName === "Dark Silver" && "color-selected"
        }`}
        id="Dark_Silver"
        onClick={(e) => handleChoosingColor(e)}
      ></span>
      <span
        className={`colors in-block ${
          colorName === "Cosmic Black1" && "color-selected"
        }`}
        id="Cosmic_Black1"
        onClick={(e) => handleChoosingColor(e)}
      ></span>
      <span
        className={`colors in-block ${
          colorName === "Rebel Red" && "color-selected"
        }`}
        id="Rebel_Red"
        onClick={(e) => handleChoosingColor(e)}
      ></span>
      <span
        className={`colors in-block ${
          colorName === "Pacific Blue" && "color-selected"
        }`}
        id="Pacific_Blue"
        onClick={(e) => handleChoosingColor(e)}
      ></span>
    </>
  );
};
