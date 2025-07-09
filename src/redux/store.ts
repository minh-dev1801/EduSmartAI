import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

// Tạo store với reducer
const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

// Định nghĩa RootState và AppDispatch từ store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
