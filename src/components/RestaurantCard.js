import { RESTAURANT_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restaurantData.info;
  const { deliveryTime } = restaurantData.info.sla;
  return (
    <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="restaurant-logo rounded-lg"
        src={RESTAURANT_IMAGE_URL + cloudinaryImageId}
      />
      <h3 className="font-bold italic py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} mins </h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

// Add higher order component here
// add label to RestaurantCard of Express Delivery if sla.deliveryTime < 30
export const withExpressDelivery = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <RestaurantCard {...props} />
        <span className="absolute top-0 left-0 transform translate-x-2 translate-y-2 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase rounded-tr">
          Express Delivery
        </span>
      </div>
    );
  };
};

export default RestaurantCard;
