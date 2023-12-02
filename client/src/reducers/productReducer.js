export const productReducer = (state, { type, payload } /*action*/) => {
  switch (type) {
    case "GET_PRODUCTS": {
      return {
        ...state,
        products: payload,
      };
    }

    case "PRODUCT_DETAIL": {
      return {
        ...state,
        productDetail: payload
      };
    }
  }
};
