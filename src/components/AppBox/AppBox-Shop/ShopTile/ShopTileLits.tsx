import React from "react";
import ShopTileItem from "./ShopTileItem";

interface ListedShopTile {
  id: number;
  name: string;
  desc: string;
  price: number;
}

const shopTileList: ListedShopTile[] = [
  {
    id: 1,
    name: `Granny Hands`,
    desc: `Earns two cookies with one click`,
    price: 40,
  },
  {
    id: 2,
    name: `One Worker`,
    desc: `makes one cookie per 2s`,
    price: 50,
  },
  {
    id: 3,
    name: `Two Workers`,
    desc: `makes one cookie per 1s`,
    price: 100,
  },
  {
    id: 4,
    name: `Worker Squad`,
    desc: `makes two cookie per 1s`,
    price: 150,
  },
  {
    id: 5,
    name: `Cookie Factory`,
    desc: `makes ten cookie per 1s`,
    price: 250,
  },
];

function ShopTileList() {
  const renderedShopTileList = shopTileList.map((shopTile) => {
    return (
      <ShopTileItem
        key={shopTile.id}
        name={shopTile.name}
        desc={shopTile.desc}
        price={shopTile.price}
      />
    );
  });
  return (
    <div className="flex flex-wrap  text-2xl gap-3 h-full mx-4 pb-4">
      {renderedShopTileList}
    </div>
  );
}

export default ShopTileList;
