import { createContext, useContext, useEffect, useReducer } from "react";
import { productData } from "../utils/constants";

export const ContextStore = createContext();

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || productData,
};

const onLineReduser = (state, action) => {
  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.staticPrice,
            };
          }
          return item;
        }),
      };
    case "incrementProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.staticPrice,
            };
          }
          return item;
        }),
      };

    case "decrementProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload && item.quantity !== 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              price: item.price - item.staticPrice,
            };
          }
          return item;
        }),
      };

    case "removeProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload && item.quantity !== 0) {
            return {
              ...item,
              quantity: 0,
              price: item.staticPrice,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(onLineReduser, initialState);

  useEffect(() => {
    localStorage.setItem("product",JSON.stringify(store.product));
  }, [store.product]);

  const incProduct = (id) => {
    dispatch({ type: "incrementProduct", payload: id });
  };
  const decProduct = (id) => {
    dispatch({ type: "decrementProduct", payload: id });
  };

  const addProduct = (id) => {
    dispatch({ type: "addProduct", payload: id });
  };

  const removeProduct = (id) => {
    dispatch({ type: "removeProduct", payload: id });
  };

  const contextValue = {
    store,
    incProduct,
    decProduct,
    addProduct,
    removeProduct,
  };

  return (
    <ContextStore.Provider value={contextValue}>
      {children}
    </ContextStore.Provider>
  );
};

export const useContextStore = () => useContext(ContextStore)

