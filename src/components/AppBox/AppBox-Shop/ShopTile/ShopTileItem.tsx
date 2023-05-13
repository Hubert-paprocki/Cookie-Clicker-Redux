interface ShopTileItemProps {
  name: string;
  desc: string;
  price: number;
}

function ShopTileItem({ name, desc, price }: ShopTileItemProps) {
  return (
    <div className="p-5 first:rounded-bl-lg first:rounded-tl-lg last:rounded-br-lg last:rounded-tr-lg duration-200 text-stone-300 rounded-lg bg-yellow-800 bg-opacity-20 flex flex-col  justify-center gap-5 grow group ">
      <div className="relative bg-orange-200 text-gray-700 p-4 rounded-lg flex flex-col items-center justify-center text-center h-32 overflow-hidden">
        <p>{name}</p>
        <p className="absolute bottom-0 w-full bg-orange-100 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
          {desc}
        </p>
      </div>
      <button className="bg-green-400 bg-opacity-20 py-1 px-4 rounded-full hover:bg-opacity-50 duration-200 hover:-translate-y-0.5 active:translate-y-0 active:duration-75">
        Buy for {price} cookies
      </button>
    </div>
  );
}

export default ShopTileItem;
