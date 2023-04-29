import { createContext, useEffect, useReducer, useState } from "react";

// HELPER FUNCTIONS //

const clearCartItem = (cartItems, cartItemToClear) => {
  const existingCartItem = cartItems.find(
    (cItem) => cItem.id === cartItemToClear.id
  );

  if (existingCartItem) {
    return cartItems.filter((cItem) => cItem.id !== cartItemToClear.id);
  }
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cItem) => cItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cItem) => cItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cItem) =>
    cItem.id === cartItemToRemove.id
      ? { ...cItem, quantity: cItem.quantity - 1 }
      : cItem
  );
};

// helper function of addItemToCart
const addCartItem = (cartItems, productToAdd) => {
  // finds product in cart if it exists.
  const existingCartItem = cartItems.find(
    (cItem) => cItem.id === productToAdd.id
  );

  // maps through the cartItems to pinpoint the item to increase quantity by 1
  // if it's not the correct cart item, return the item as is.
  if (existingCartItem) {
    return cartItems.map((cItem) =>
      cItem.id === productToAdd.id
        ? { ...cItem, quantity: cItem.quantity + 1 }
        : cItem
    );
  } else {
    // creates and returns a new array with new cartItem with 'quantity' parameter.
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

//////////////////////////

// cartItems: {id, name, imageUrl, price, quantity}
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
  totalNumberItems: 0,
  totalPrice: 0,
});

export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART'
}

const cartReducer = (state, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: payload
      }
    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: payload
      }
    case CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: payload
      }
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }

};

const INTITAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalNumberItems: 0,
  totalPrice: 0,
}

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [totalNumberItems, setTotalNumberItems] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);

  const [state, dispatch] = useReducer(cartReducer, INTITAL_STATE);
  const {isCartOpen, cartItems, totalNumberItems, totalPrice} = state;

  const setIsCartOpen = (isCartOpen) => {
    dispatch({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: !isCartOpen})
  }

  const setCartItem = (fn) => {
    
    dispatch({type: CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload: addCartItem(cItems, productToAdd)})
  }

  const removeCartItem

  

  // to count number of items
  useEffect(() => {
    // going through cartItems to add up quantity.
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0 // starting value
    );
    setTotalNumberItems(newCartCount);
  }, [cartItems]);

  // to count total price
  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, cartItems) => total + cartItems.price * cartItems.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    totalNumberItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
