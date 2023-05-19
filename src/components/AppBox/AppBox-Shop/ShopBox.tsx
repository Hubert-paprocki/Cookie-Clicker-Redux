import ShopTileList from "./ShopTile/ShopTileLits";

function ShopBox(): JSX.Element {
  return (
    <div className=" min-[1024px]:w-[1024px] w-full">
      <ShopTileList />
    </div>
  );
}

export default ShopBox;
