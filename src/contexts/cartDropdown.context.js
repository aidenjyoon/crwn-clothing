import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItem contains productToAdd
  // if so, modify quantity
  // else, add to cartItem and return the new array.

  // will return the cartItem object that matches to the productToAdd.id and undefined otherwise.

  const cartItem = cartItems.find((cItem) => cItem.id === productToAdd.id);

  if (cartItem) {
    // const product = {...productToAdd, quantity: cItem.quantity + 1}
    // cartItems.push(product)
    // TODO: find a way to point to the object in cartItems array to increase that object's quantity.
    cartItem.quantity += 1;
  } else {
    const product = { ...productToAdd, quantity: 1 };
    cartItems.push(product);
  }
};

export const CartDropdownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
});

export const CartDropdownProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
