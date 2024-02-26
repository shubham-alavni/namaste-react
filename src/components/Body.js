import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(RESTAURANT_LIST_API);
      const response = await data.json();
      // used for rendering the list
      setRestaurantList(
        response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // used for filtering
      setFilteredRestaurantList(
        response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>
        You're Looking offline!!!. Please check your internet connection!!!!
      </h1>
    );
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            placeholder="Search Restaurants"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="all-restaurant-btn"
            onClick={() => {
              const filteredList = restaurantList.filter((restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurantList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated-restaurant-btn"
          onClick={() => {
            // rating more than 4
            const filteredList = restaurantList.filter((restaurant) => {
              return restaurant.info.avgRating > 4;
            });
            setFilteredRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurantList.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard
                restaurantData={restaurant}
                key={restaurant.info.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
