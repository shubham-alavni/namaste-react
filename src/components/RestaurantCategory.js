import ItemList from "./ItemList";

const RestaurantCategory = ({ category }) => {
  console.log("category", category);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {category?.title} ({category?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        <ItemList items={category?.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
