import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { useProducts } from "../contexts/Products";

//funcion reductora
import { cartReducer } from "../reducers/cartReducer";

//contexto
export const CartContext = createContext();

//uso de contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used withing a CartProvider");
  return context;
};

//initial state
const initialState = {
  cart: [],
  showCart: false,
  expandCart: false,
  cartTotal: 0,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const { getProduct } = useProducts();

  useEffect(() => {
    if (state.cart.length > 0) displayCart(true);
  }, [state.cart]);

  useEffect(() => {
    handleTotalesCart();
  }, [state.cart]);

  //cierra el carrito (icono X)
  const handleCloseCart = () => {
    displayCart(false);
    fullShowCart(false);
    return;
  };

  //despliega totales de los items del carrito
  const handleTotalesCart = () => {
    dispatch({ type: "TOTALS_CART", payload: state.cart });
    return;
  };

  //agrega item al carro
  const addToCart = (idItem) => {
    const index = state.cart.findIndex((item) => item._id === idItem);
    //no está en carrito
    if (index < 0) {
      dispatch({ type: "ADD_TO_CART", payload: getProduct(idItem) });
      return;
    }
    //está en carrito
    return incrementItemCart(idItem);
  };

  //incrementa cantidad del item en carro
  const incrementItemCart = (idItem) => {
    dispatch({ type: "INCREMENT_ITEM_CART", payload: idItem });
    return;
  };

  //decrementa cantidad de item del carro
  const decrementItemCart = (idItem) => {
    const { cantidad } = state.cart.find((item) => item._id === idItem);
    if (cantidad > 1)
      return dispatch({ type: "DECREMENT_ITEM_CART", payload: idItem });
    else return deleteItemCart(idItem);
  };

  //elemina item desde carrito
  const deleteItemCart = (idItem) => {
    dispatch({ type: "DELETE_ITEM_CART", payload: idItem });
    return;
  };

  //limpia el carro
  const cleanCart = () => {
    dispatch({ type: "CLEAN_CART" });
    return;
  };

  //muestra el carro
  const displayCart = (status) => {
    dispatch({ type: "DISPLAY_CART", payload: status });
  };

  //muestra el carro en toda la pantalla
  const fullShowCart = (status) => {
    dispatch({ type: "SHOW_FULL_CART", payload: status });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        cleanCart,
        addToCart,
        deleteItemCart,
        incrementItemCart,
        decrementItemCart,
        displayCart,
        handleCloseCart,
        fullShowCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
