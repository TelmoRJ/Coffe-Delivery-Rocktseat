import { createContext, useContext, useEffect, useState } from "react";
import { Coffee } from "../@types/coffe";
import produce from "immer";

export interface Cart extends Coffee {
  quantity: number;
}

type CartContextType = {
  cart: Cart[];
  addCoffee: (coffe: Cart) => void;
  amountOfCarts: number;
  handleIncrementCart: (id: number) => void;
  handleDecrementCart: (id: number) => void;
  removeCart: (id: number) => void;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [cart, setCart] = useState<Cart[]>(() => {
    const local = localStorage.getItem("@coffe:cart");

    if (local) {
      return JSON.parse(local);
    }
    return [] as Cart[];
  });

  useEffect(() => {
    localStorage.setItem("@coffe:cart", JSON.stringify(cart));
  }, [cart]);

  const amountOfCarts = cart.length;

  function addCoffee(coffe: Cart) {
    const coffeAlreadyExists = cart.findIndex((c) => c.id === coffe.id);

    const copyCart = produce(cart, (draft) => {
      if (coffeAlreadyExists < 0) {
        draft.push(coffe);
        return;
      }

      draft[coffeAlreadyExists].quantity += coffe.quantity;
    });

    setCart(copyCart);
  }

  function handleIncrementCart(id: number) {
    console.log("kkkk");
    const coffeAlreadyExists = cart.findIndex((c) => c.id === id);
    const copyCart = produce(cart, (draft) => {
      if (coffeAlreadyExists < 0) {
        return;
      }

      draft[coffeAlreadyExists].quantity++;
    });

    setCart(copyCart);
  }

  function handleDecrementCart(id: number) {
    const coffeAlreadyExists = cart.findIndex((c) => c.id === id);
    const copyCart = produce(cart, (draft) => {
      if (coffeAlreadyExists < 0) {
        return;
      }

      if (draft[coffeAlreadyExists].quantity <= 1) return;
      draft[coffeAlreadyExists].quantity--;
    });

    setCart(copyCart);
  }

  function removeCart(id: number) {
    const coffeAlreadyExists = cart.findIndex((c) => c.id === id);

    const copyCart = produce(cart, (draft) => {
      if (coffeAlreadyExists < 0) {
        return;
      }

      draft.splice(coffeAlreadyExists, 1);
    });

    setCart(copyCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffee,
        amountOfCarts,
        handleIncrementCart,
        handleDecrementCart,
        removeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);

  return context;
}
