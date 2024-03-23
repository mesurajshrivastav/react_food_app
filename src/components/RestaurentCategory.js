import { useState } from "react";
import Itemlist from "./ItemList";

const RestaurentCategory = ({ data, showItems, setShowIndex }) => {
  
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Accordian header */}
      <div
        onClick={handleClick}
        className="w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-xl  "
      >
        <div className="flex justify-between font-bold text-lg cursor-pointer">
          <span>
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {showItems && <Itemlist items={data.itemCards} />}
      </div>
      {/* accofdian body */}
    </div>
  );
};

export default RestaurentCategory;
