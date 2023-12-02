import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
//data
import { getProducts } from "../api/productRequest";

//crea contexto
export const ProductsContext = createContext();

//uso contexto
export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error("useProducts must be used within a ProductsProviders");
  return context;
};

//funcion reductora
import { productReducer } from "../reducers/productReducer";

//initalState
const initialState = {
  products: [],
  productDetail: null,
};

export function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: "All",
    brand: "All",
  });

  useEffect(() => {
    getAllProducts();
  }, []);

  //tra todos los productos
  const getAllProducts = async () => {
    try {
      const products = await getProducts();
      const data = await products.json();
      dispatch({ type: "GET_PRODUCTS", payload: data });
    } catch (error) {
      return console.log(error);
    }
  };

  //filtrar productos
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "All" || product.category === filters.category) &&
        (filters.brand === "All" || product.brand === filters.brand)
      );
    });
  };

  //producto para detalle
  const productforDetail = (id) => {
    const index = state.products.findIndex((product) => product._id === id);
    if (index >= 0)
      dispatch({ type: "PRODUCT_DETAIL", payload: state.products[index] });
    return;
  };

  const getProduct = (id) => {
    const index = state.products.findIndex((prod) => prod._id === id);
    return state.products[index];
  };

  const productsFiltered = filterProducts(state.products);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        getProduct,
        productforDetail,
        productsFiltered,
        filters,
        setFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
