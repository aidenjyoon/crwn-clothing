import { createContext, useEffect, useState } from "react";

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

// cartItems: {id, name, imageUrl, price, quantity}
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  totalNumberItems: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalNumberItems, setTotalNumberItems] = useState(0);

  useEffect(() => {
    // going through cartItems to add up quantity.
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0 // starting value
    );
    setTotalNumberItems(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    totalNumberItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
