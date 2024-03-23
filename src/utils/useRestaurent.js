import { RESTAURENT_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurent = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURENT_API);
      const json = await data.json();

      setListOfRestaurents(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("error fetching data", error);
    }
  };

  return listOfRestaurents;
};

export default useRestaurent;
