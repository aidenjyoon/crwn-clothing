import { createContext, useEffect, useState } from "react";

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

export const CartDropdownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  totalNumberItems: 0,
});

export const CartDropdownProvider = ({ children }) => {
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

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    totalNumberItems,
  };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
