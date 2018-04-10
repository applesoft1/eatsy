import * as ShoppingCartItemAPIUtil from "../util/product_api_util";

export const RECEIVE_ALL_SHOPPING_CART_ITEMS_PAYLOAD = "RECEIVE_ALL_SHOPPING_CART_ITEMS_PAYLOAD";
export const RECEIVE_SHOPPING_CART_ITEM_PAYLOAD = "RECEIVE_SHOPPING_CART_ITEM_PAYLOAD";
export const REMOVE_SHOPPING_CART_ITEM = "REMOVE_SHOPPING_CART_ITEM";
export const RECEIVE_SHOPPING_CART_ERRORS = "RECEIVE_SHOPPING_CART_ERRORS";

export const receiveAllShoppingCartItems = payload => ({
  type: RECEIVE_ALL_SHOPPING_CART_ITEMS_PAYLOAD,
  payload
});

export const receiveShoppingCartItem = payload => ({
  type: RECEIVE_SHOPPING_CART_ITEM_PAYLOAD,
  payload
});

export const removeShoppingCartItem = productId => ({
  type: REMOVE_SHOPPING_CART_ITEM,
  productId
});

export const receiveShoppingCartItemErrors = errors => ({
  type: RECEIVE_SHOPPING_CART_ERRORS,
  errors
});

export const fetchShoppingCartItems = (optionalUserId) => dispatch =>
  ShoppingCartItemAPIUtil.fetchShoppingCartItems(optionalUserId).then(products =>
    dispatch(receiveAllShoppingCartItems(products))
  );

export const fetchShoppingCartItem = id => dispatch =>
  ShoppingCartItemAPIUtil.fetchShoppingCartItem(id).then(payload =>
    dispatch(receiveShoppingCartItem(payload))
  );


export const createShoppingCartItem = product => dispatch =>
  ShoppingCartItemAPIUtil.createShoppingCartItem(product).then(
    payload => dispatch(receiveShoppingCartItem(payload)),
    err => dispatch(receiveShoppingCartItemErrors(err.responseJSON))
  );

export const updateShoppingCartItem = product => dispatch =>
  ShoppingCartItemAPIUtil.updateShoppingCartItem(product).then(
    payload => dispatch(receiveShoppingCartItem(payload)),
    err => dispatch(receiveShoppingCartItemErrors(err.responseJSON))
  );

export const deleteShoppingCartItem = id => dispatch =>
  ShoppingCartItemAPIUtil.deleteShoppingCartItem(id).then(payload =>
    dispatch(removeShoppingCartItem(payload.product.id))
  );
