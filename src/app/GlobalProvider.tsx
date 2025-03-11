import { CartProvider } from "@/app/( main)/context/cartcontext";
import React, { ReactNode } from "react";

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <CartProvider>{children}</CartProvider>;
};
