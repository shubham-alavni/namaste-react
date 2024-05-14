import { RESTAURANT_IMAGE_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div className="container mx-auto px-4">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-4 m-4 border-gray-200 border-2 text-left grid grid-cols-12 gap-4 bg-white rounded-lg shadow-md"
        >
          <div className="col-span-9">
            <h3 className="font-bold text-lg mb-2">{item?.card?.info?.name}</h3>
            <p className="text-gray-600">{item?.card?.info?.description}</p>
            <p className="text-green-500 font-semibold">
              {`\u20B9 ${
                (item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                100
              }`}
            </p>
          </div>
          <div className="col-span-3">
            <img
              src={RESTAURANT_IMAGE_URL + item?.card?.info?.imageId || ""}
              alt={item?.card?.info?.name}
              className="w-full h-24 object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
