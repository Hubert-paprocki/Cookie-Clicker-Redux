import ShopTileList from "./ShopTile/ShopTileLits";

function ShopBox(): JSX.Element {
  return (
    <section className=" min-[1024px]:w-[1024px] w-full">
      <ShopTileList />
    </section>
  );
}

export default ShopBox;
