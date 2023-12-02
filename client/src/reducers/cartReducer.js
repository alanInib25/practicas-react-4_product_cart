export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, { ...payload, cantidad: 1 }],
      };
    }

    case "INCREMENT_ITEM_CART": {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id === payload) {
            item.cantidad += 1;
            return item;
          } else {
            return item;
          }
        }),
      };
    }

    case "DECREMENT_ITEM_CART": {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id === payload) {
            item.cantidad -= 1;
            return item;
          } else {
            return item;
          }
        }),
      };
    }

    case "DELETE_ITEM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== payload),
      };
    }

    case "CLEAN_CART": {
      return {
        ...state,
        cart: [],
      };
    }

    case "DISPLAY_CART": {
      return {
        ...state,
        showCart: payload,
      };
    }

    case "SHOW_FULL_CART": {
      return {
        ...state,
        expandCart: payload,
      };
    }

    case "TOTALS_CART": {
      return {
        ...state,
        cartTotal: state.cart.reduce((acc, cur) => {
          acc += (cur.price - cur.discountPercentage) * cur.cantidad;
          return acc;
        }, 0)
      }
    }

    default: {
      break;
    }
  }
};
