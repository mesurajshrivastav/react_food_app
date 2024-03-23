import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./ItemList";
import { clearCart } from "../utils/reduxSlice/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
          <button
            onClick={handleClearCart}
            className="p-2 bg-black text-white rounded-lg"
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && <h1>Card is empty! Add some item to this card</h1>}
          <Itemlist items={cartItems} />
        </div>
      </div>
    </>
  );
};

export default Cart;
