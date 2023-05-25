import React from "react";
import Button from "../Button";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setLanguage } from "../../app/slices/languageSlice";
import polishFlag from "../../images/polishFlag.png";
import usaFlag from "../../images/usaFlag.png";

function LanguageBtn() {
  const btnText = useAppSelector((state) => state.language.langSwitch);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setLanguage());
  };

  return (
    <Button lang type="button" onClick={handleClick}>
      {btnText === "pl" ? (
        <img
          src={polishFlag}
          alt="polishFlag"
          className="h-full object-cover"
        />
      ) : (
        <img
          src={usaFlag}
          alt="usaFlag"
          className="h-full object-cover object-left"
        />
      )}
    </Button>
  );
}

export default LanguageBtn;
