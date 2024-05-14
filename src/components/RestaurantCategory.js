import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category }) => {
  const [openItem, setOpenItem] = useState(false);

  const handleOpenItem = () => {
    setOpenItem(!openItem);
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
        {openItem && <ItemList items={category?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
