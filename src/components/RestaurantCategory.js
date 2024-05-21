import ItemList from "./ItemList";

const RestaurantCategory = ({ category, openItem, setShowIndex }) => {
  const handleOpenItem = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => handleOpenItem()}
        >
          <span className="font-bold text-lg">
            {category?.title} ({category?.itemCards?.length})
          </span>
          <span>{openItem === category.title ? "⬆️" : "⬇️"}</span>
        </div>
        {console.log("openItem", openItem)}
        {openItem && <ItemList items={category?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
