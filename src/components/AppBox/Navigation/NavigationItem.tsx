import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { changePage } from "../../../app/slices/navigationSlice";
import Button from "../../Button";

interface NavigationItemProps {
  name: string;
  link: string;
}

function NavigationItem({ name, link }: NavigationItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changePage(link));
  };

  return (
    <Button menu onClick={handleClick}>
      {name}
    </Button>
  );
}

export default NavigationItem;
