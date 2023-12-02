import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";

//contexto
import { usefilters } from "./FiltersContext.jsx";

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
  categorys: [],
  brands: [],
};

export function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { filterProducts } = usefilters();
  console.log("products context")

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    categorysProducts();
    brandsProducs();
  }, [state.products]);

  //trae todos los productos
  const getAllProducts = async () => {
    try {
      const products = await getProducts();
      const data = await products.json();
      dispatch({ type: "GET_PRODUCTS", payload: data });
    } catch (error) {
      return console.log(error);
    }
  };

  //producto para detalle
  const productforDetail = (id) => {
    const index = state.products.findIndex((product) => product._id === id);
    if (index >= 0)
      dispatch({ type: "PRODUCT_DETAIL", payload: state.products[index] });
    return;
  };

  //trae un producto (para el cartContext))
  const getProduct = (id) => {
    const index = state.products.findIndex((prod) => prod._id === id);
    return state.products[index];
  };

  //categorias de productos para filtro
  const categorysProducts = () => {
    dispatch({ type: "SET_CATEGORY_FILTER" });
    return;
  };

  //marcas de productos para filtro
  const brandsProducs = () => {
    dispatch({ type: "SET_BRAND_FILTER" });
    return;
  };

  //productos filtrados
  const productsFiltered = filterProducts(state.products);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        getProduct,
        productforDetail,
        productsFiltered,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
