import { RESTAURANT_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restaurantData.info;
  const { deliveryTime } = restaurantData.info.sla;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        className="restaurant-logo"
        src={RESTAURANT_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} mins </h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
