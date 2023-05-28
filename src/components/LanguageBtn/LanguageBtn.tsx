import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setLanguage } from "../../app/slices/languageSlice";
import Button from "../Button/Button";
import polishFlag from "../../images/polishFlag.png";
import usaFlag from "../../images/usaFlag.png";

function LanguageButton() {
  const btnText = useAppSelector((state) => state.language.langSwitch);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setLanguage());
  };

  const flagImage = (
    <img
      src={btnText === "en" ? polishFlag : usaFlag}
      alt={btnText === "en" ? `Polish flag` : `USA flag`}
      className="h-full object-cover object-left"
    />
  );

  return (
    <Button lang type="button" onClick={handleClick}>
      {flagImage}
    </Button>
  );
}

export default LanguageButton;
