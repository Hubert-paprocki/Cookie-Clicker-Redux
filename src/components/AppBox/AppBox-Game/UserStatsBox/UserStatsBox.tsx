import UsersActionHistory from "./UserActionHistory";
import UsersActiveBooster from "./UserActiveBooster";
import UserCurrentScore from "./UserCurrentScore";

function UserStatsBox(): JSX.Element {
  return (
    <div className="bg-yellow-800 bg-opacity-20 m-4 rounded-lg p-5 flex justify-between flex-col md:flex-row items-center text-center md:text-left md:items-start gap-y-5">
      <UserCurrentScore />
      <UsersActionHistory />
      <UsersActiveBooster />
    </div>
  );
}

export default UserStatsBox;
