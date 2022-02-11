export enum ActionTypes {
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',

  subtractProductFromCart = 'SUBTRACT_PRODUCT_FROM_CART',

  removeProductFromCart = 'REMOVE_PRODUCT_FROM_CART',
}

export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}