import { Reducer } from "redux";
import produce from 'immer';
import { ActionTypes, ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item => item.product.id === product.id);

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      case ActionTypes.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId);

        break;
      }
      case ActionTypes.subtractProductFromCart: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item => item.product.id === product.id);

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity--;
        }

        const checkProductInFailedStockCheck = draft.failedStockCheck.findIndex(item => item === product.id);

        if (checkProductInFailedStockCheck >= 0) {
          draft.failedStockCheck.splice(checkProductInFailedStockCheck, 1);
        }

        break;
      }
      case ActionTypes.removeProductFromCart: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item => item.product.id === product.id);

        if (productInCartIndex >= 0) {
          draft.items.splice(productInCartIndex, 1);
        }

        const checkProductInFailedStockCheck = draft.failedStockCheck.findIndex(item => item === product.id);

        if (checkProductInFailedStockCheck >= 0) {
          draft.failedStockCheck.splice(checkProductInFailedStockCheck, 1);
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
}

export default cart;