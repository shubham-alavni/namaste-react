import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restaurantId);
    const response = await data.json();
    console.log(response.data);
    setRestaurantInfo(response.data);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
