import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { changePage } from "../../../app/slices/navigationSlice";
import Button from "../../Button";
import { NavigationState } from "../../../app/slices/navigationSlice";
interface NavigationItemProps extends NavigationState {
  readonly name: string;
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
