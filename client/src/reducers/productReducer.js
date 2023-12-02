export const productReducer = (state, { type, payload } /*action*/) => {
  switch (type) {
    case "GET_PRODUCTS": {
      return {
        ...state,
        products: payload,
      };
    }

    case "SET_CATEGORY_FILTER": {
      return {
        ...state,
        categorys: ["All", ...new Set(state.products.map(prod => prod.category))]
      }
    }

    case "SET_BRAND_FILTER": {
      return {
        ...state,
        brands: ["All", ...new Set(state.products.map(prod => prod.brand))]
      }
    }

    case "PRODUCT_DETAIL": {
      return {
        ...state,
        productDetail: payload,
      };
    }
  }
};
