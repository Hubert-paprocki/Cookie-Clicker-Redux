import React from "react";
import { useAppSelector } from "../../../../app/hooks";

function UsersActiveBooster() {
  const selectedItems = useAppSelector((state) => state.shop.selectedItems);

  return (
    <div>
      <h2>— Active boosters —</h2>

      <ul className="text-center">
        {selectedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersActiveBooster;
