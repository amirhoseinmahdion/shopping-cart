import react from "react";
import React, { useReducer } from "react";

export const Cartproduct = react.createContext();

const initialState = {
  selectItems: [],
  itemcounter: 0,
  totalprice: 0,
  checkproduct: false,
};


 const sumItem = (items) => {
    const itemcounter = items.reduce((total,product)=>total + product.quantity,0)
    let totalprice = items.reduce((total,product)=> total + product.price*product.quantity,0).toFixed(2)
    return{itemcounter,totalprice}
}

const Funreducer = (state, action) => {
  
  switch (action.type) {
    case "ADD_CART":
      if (!state.selectItems.find((item) => item.id === action.payload.id)) {
        state.selectItems.push({ ...action.payload, quantity: 1  });
      }

      return {
        ...state,
        selectItems: [...state.selectItems],
        ...sumItem(state.selectItems),
        checkproduct: false

      };

    case "REMOVE_ITEM":
      const Newselectitem = state.selectItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectItems: [...Newselectitem],
        ...sumItem(Newselectitem)
      };
    case "INCREASS":
      const IndexI = state.selectItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.selectItems[IndexI].quantity++;
      return { ...state , ...sumItem(state.selectItems) }

    case "DECREASS":
      const IndexD = state.selectItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.selectItems[IndexD].quantity--;
      return { ...state , ...sumItem(state.selectItems) };

    case "CHECK_OUT":
      return {
        selectItems: [],
        itemcounter: 0,
        totalprice: 0,
        checkproduct: true,
      };

    case "CLEAR":
      return {
        selectItems: [],
        itemcounter: 0,
        totalprice: 0,
        checkproduct: false,
      };

    default:
      return state;
  }
};

const CartContext = (props) => {
  const [state, dispatch] = useReducer(Funreducer, initialState);
  return (
    <Cartproduct.Provider value={{ state, dispatch }}>
      {props.children}
    </Cartproduct.Provider>
  );
};

export default CartContext;
