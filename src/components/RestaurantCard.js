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

export default RestaurantCard;
