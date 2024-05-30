import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // Below line can lead to performance issues as it will re-render the component on every state change in the store, use only right portion of the store
  // const store = useSelector((store) => store);
  // const cartItems = store.cart.items;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5">
      <h1 className="text-3xl font-bold mb-5">Cart</h1>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-4"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <p className="text-lg text-gray-500"> Your cart is empty! Add Items </p>
      )}
      <div className="w-full sm:w-6/12 mx-auto my-4 p-4">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
