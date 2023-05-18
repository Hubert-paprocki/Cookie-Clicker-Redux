import React from "react";
import UsersActionHistory from "./UserActionHistory";
import UsersActiveBooster from "./UserActiveBooster";
import UserCurrentScore from "./UserCurrentScore";

function UserStatsBox(): JSX.Element {
  return (
    <div className="bg-yellow-800 bg-opacity-20 m-4 rounded-lg text-2xl p-5 flex justify-between">
      <UserCurrentScore />
      <UsersActionHistory />
      <UsersActiveBooster />
    </div>
  );
}

export default UserStatsBox;
