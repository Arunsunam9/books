// // context/CartContext.tsx
"use client";

// import React, { createContext, useContext, useState, ReactNode } from "react";

// // Define product type
// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// }

// // Define Cart Context Type
// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: string) => void;
//   cartCount: number;
// }

// // Create context
// const CartContext = createContext<CartContextType | undefined>(undefined);

// // Cart Provider Component
// export const CartProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   // Add to cart function
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   // Remove from cart function
//   const removeFromCart = (id: string) => {
//     setCart((prevCart) => prevCart.filter((product) => product.id !== id));
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, cartCount: cart.length }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom Hook to use Cart Context
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };





// import { createContext, useContext, useState, ReactNode } from "react";

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: number) => void;
//   cartCount: number;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   const removeFromCart = (id: number) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const cartCount = cartItems.length;

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, cartCount }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };



"use client";

import { createContext, ReactNode, useState , useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";




interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Check if item already exists in the cart
  const isItemExist = (item: CartItem) => {
    return cartItems.some((cartItem) => cartItem.id === item.id);
  };

  const addToCart = (item: CartItem) => {
    if (isItemExist(item)) {
      // If the item exists, don't add it again
      console.log("Item already in the cart");
      return;
    }
    // If the item doesn't exist, add it to the cart
    // toast(`Added 1 ${CartItem?.name || "item"}`);
    toast(`Added  ${item.name}`);

    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

    // export const removeFromCart = (id: number) => {
    //   setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    // };

    const cartCount = cartItems.length;

    return (
      <CartContext.Provider
        value={{
          cartItems,
          addToCart,
          removeFromCart,
          cartCount,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };

// export default removeFromCart ;


 export const useCart = (): CartContextType => {
   const context = useContext(CartContext);
   if (!context) {
     throw new Error("useCart must be used within a CartProvider");
   }
   return context;
 };


