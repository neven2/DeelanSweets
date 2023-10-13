import { createSlice } from "@reduxjs/toolkit";

 const cartItems =
        localStorage.getItem("cartList") !== null
            ? JSON.parse(localStorage.getItem("cartList"))
            : [];
    const totalAmount =
        localStorage.getItem("cartTotal") !== null
            ? JSON.parse(localStorage.getItem("cartTotal"))
            : 0;
    const totalQuantity =
        localStorage.getItem("cartQuantity") !== null
            ? JSON.parse(localStorage.getItem("cartQuantity"))
            : 0;
    
   // adding this function to prevent repear code 
    const setCartListFunc = (cartItems, totalAmount, totalQuantity) => {
        localStorage.setItem("cartList", JSON.stringify(cartItems));
        localStorage.setItem("cartTotal", JSON.stringify(totalAmount));
        localStorage.setItem("cartQuantity", JSON.stringify(totalQuantity));
    };


const initialState = {
  cartItems: cartItems,
  totalAmount: totalAmount,
  totalQuantity: totalQuantity,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

      clearCart: (state) => {
       state.totalAmount=0;
       state.totalQuantity=0;
      state.cartItems = [];
      setCartListFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
    );
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          productImg: newItem.productImg,
          price: newItem.price,
          qty: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.qty++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.qty),
        0
      );
        setCartListFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
    );
    },
    

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.qty++;

       state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.qty),
        0
      );
        setCartListFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
    );
    },


    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.qty === 1) {
        item.qty = 1
      } else {
        item.qty--;
      }
       state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.qty),
        0
      );
        setCartListFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
    );
    },


    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.qty;
      }

    

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.qty),
        0
      );
        setCartListFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
    );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
