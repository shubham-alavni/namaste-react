import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="bg-red-500 text-white p-2 rounded-lg my-4"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="w-6/12 mx-auto my-4 p-4">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
