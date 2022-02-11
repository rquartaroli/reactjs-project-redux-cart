import { ActionTypes, IProduct } from "./types";

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    }
  }
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    }
  }
}

export function subtractProductFromCart(product: IProduct) {
  return {
    type: ActionTypes.subtractProductFromCart,
    payload: {
      product,
    }
  }
}

export function removeProductFromCart(product: IProduct) {
  return {
    type: ActionTypes.removeProductFromCart,
    payload: {
      product,
    }
  }
}