import React from "react";
import { useAppSelector } from "../../../../app/hooks";
function Score() {
  const cookieValue = useAppSelector((state) => state.cookie.value);
  return (
    <div>
      <h2>Your Score:</h2> <p>{cookieValue}</p>
    </div>
  );
}

export default Score;
