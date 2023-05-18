import React from "react";
import { useAppSelector } from "../../../../app/hooks";

function UsersActiveBooster() {
  const selectedItems = useAppSelector((state) =>
    state.boosters.boosters.filter((booster) => booster.isActive)
  );

  return (
    <div>
      <h2>— Active boosters —</h2>

      <ul className="text-center">
        {selectedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersActiveBooster;
