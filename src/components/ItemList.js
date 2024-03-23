import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/reduxSlice/cartSlice";

const Itemlist = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <div
              key={item.card.info.id}
              className="border-b-2 m-2 p-4 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span>
                    {" "}
                    - ₹{" "}
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button
                    onClick={() => handleAddItem(item)}
                    className="bg-orange-600 text-white font-semibold p-2 mx-16 rounded-lg shadow-lg"
                  >
                    Add +
                  </button>
                </div>
                <img
                  alt="loading..."
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full rounded-sm"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Itemlist;
