import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const restaurantInfo = useRestaurantMenu(restaurantId);

  if (!restaurantInfo) {
    return <Shimmer />;
  }

  let { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards?.find((card) => card?.card?.card?.info)?.card?.card
      ?.info || {};

  console.log(name, cuisines, costForTwoMessage);

  let itemCards =
    restaurantInfo?.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (card) => card?.card?.card?.itemCards
      )?.card?.card?.itemCards ?? [];

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-2">{name}</h1>
      <p className="text-lg text-gray-600 mb-4">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="text-2xl font-semibold mb-2">Menu</h2>
      <ul className="list-none">
        {itemCards.map((item) => {
          const { id, name, price, defaultPrice } = item.card.info;
          return (
            <li
              key={id}
              className="flex justify-between items-center border-b border-gray-200 py-2"
            >
              <span className="text-lg font-medium flex-1 mr-4">{name}</span>
              <span className="text-lg font-medium">
                Rs. {price / 100 || defaultPrice / 100}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
